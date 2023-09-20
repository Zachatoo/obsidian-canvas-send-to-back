import { ItemView, Menu, Plugin } from "obsidian";
import { ErrorNotice } from "./Notice";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CanvasSendToBackPluginSettings {}

const DEFAULT_SETTINGS: CanvasSendToBackPluginSettings = {};

export default class CanvasSendToBackPlugin extends Plugin {
	settings: CanvasSendToBackPluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerEvent(
			this.app.workspace.on(
				"canvas:node-menu",
				(menu: Menu, node: unknown) => {
					menu.addItem((item) => {
						item.setTitle("Send to back");
						item.setSection("canvas");
						item.onClick((e) => {
							this.sendNodeToBack(node);
						});
					});
				}
			)
		);
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	sendNodeToBack(node: unknown) {
		try {
			if (!node || typeof node !== "object" || !("id" in node)) {
				new ErrorNotice(`Must provide a valid node.`);
				return;
			}
			const view = this.app.workspace.getActiveViewOfType(ItemView);
			if (
				!view ||
				!view.getViewData ||
				!view.setViewData ||
				!view.requestSave
			) {
				new ErrorNotice(`Must have an active canvas view.`);
				return;
			}
			const data: unknown = JSON.parse(view.getViewData());
			if (
				!data ||
				typeof data !== "object" ||
				!("nodes" in data) ||
				!Array.isArray(data.nodes)
			) {
				new ErrorNotice(
					`Could not retrieve canvas data from canvas view.`
				);
				return;
			}
			const matchingNode = data.nodes.find((x) => x.id === node.id);
			const filteredNodes = data.nodes.filter((x) => x.id !== node.id);
			filteredNodes.unshift(matchingNode);
			data.nodes = filteredNodes;
			view.setViewData(JSON.stringify(data), true);
			view.requestSave();
		} catch (err) {
			new ErrorNotice(`Unknown error.\n${err}`);
		}
	}
}
