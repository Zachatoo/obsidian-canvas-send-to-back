import { Plugin } from "obsidian";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CanvasSendToBackPluginSettings {}

const DEFAULT_SETTINGS: CanvasSendToBackPluginSettings = {};

export default class CanvasSendToBackPlugin extends Plugin {
	settings: CanvasSendToBackPluginSettings;

	async onload() {
		await this.loadSettings();
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
}
