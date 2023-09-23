import { Plugin } from "obsidian";
import { ErrorNotice } from "./Notice";
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

	sendNodeToBack(node: unknown) {
		try {
			if (!isCanvasNodeData(node)) {
				throw new Error(`Must provide a valid node.`);
			}
			const { view, data } = getActiveCanvas(this.app);
			const matchingNode = getCanvasNodeDataByID(node.id, data);
			const filteredNodes = data.nodes.filter((x) => x.id !== node.id);
			filteredNodes.unshift(matchingNode);
			data.nodes = filteredNodes;
			setActiveCanvasData(view, data);
		} catch (err) {
			new ErrorNotice(`Error sending node to back.\n${err}`);
		}
	}

	sendNodeToFront(node: unknown) {
		try {
			if (!isCanvasNodeData(node)) {
				throw new Error(`Must provide a valid node.`);
			}
			const { view, data } = getActiveCanvas(this.app);
			const matchingNode = getCanvasNodeDataByID(node.id, data);
			const filteredNodes = data.nodes.filter((x) => x.id !== node.id);
			filteredNodes.push(matchingNode);
			data.nodes = filteredNodes;
			setActiveCanvasData(view, data);
		} catch (err) {
			new ErrorNotice(`Error sending node to front.\n${err}`);
		}
	}
}
