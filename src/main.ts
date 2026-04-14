import { Notice, Plugin } from "obsidian";
import {
	getActiveCanvas,
	getCanvasNodeDataByID,
	isCanvasNodeData,
	setActiveCanvasData,
} from "./canvas";
import { registerEvents } from "./register-events";

export default class CanvasSendToBackPlugin extends Plugin {
	async onload() {
		registerEvents(this);
	}

	onunload() {}

	async sendNodeToBack(node: unknown) {
		try {
			if (!isCanvasNodeData(node)) {
				throw new Error(`Must provide a valid node.`);
			}
			const { view, data } = getActiveCanvas(this.app);
			const matchingNode = getCanvasNodeDataByID(node.id, data);
			const filteredNodes = data.nodes.filter((x) => x.id !== node.id);
			filteredNodes.unshift(matchingNode);
			data.nodes = filteredNodes;
			await setActiveCanvasData(view, data);
		} catch (err) {
			console.error(err);
			new Notice(`Error sending node to back.\n${err}`);
		}
	}

	async sendNodeToFront(node: unknown) {
		try {
			if (!isCanvasNodeData(node)) {
				throw new Error(`Must provide a valid node.`);
			}
			const { view, data } = getActiveCanvas(this.app);
			const matchingNode = getCanvasNodeDataByID(node.id, data);
			const filteredNodes = data.nodes.filter((x) => x.id !== node.id);
			filteredNodes.push(matchingNode);
			data.nodes = filteredNodes;
			await setActiveCanvasData(view, data);
		} catch (err) {
			console.error(err);
			new Notice(`Error sending node to front.\n${err}`);
		}
	}
}
