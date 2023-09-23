import { App, ItemView } from "obsidian";
import { CanvasNodeData, CanvasData } from "obsidian/canvas";

export function isCanvasNodeData(node: unknown): node is CanvasNodeData {
	return !!node && typeof node === "object" && "id" in node;
}

function isCanvasData(data: unknown): data is CanvasData {
	return (
		!!data &&
		typeof data === "object" &&
		"nodes" in data &&
		Array.isArray(data.nodes) &&
		"edges" in data &&
		Array.isArray(data.edges)
	);
}

export function getActiveCanvas(app: App) {
	const view = app.workspace.getActiveViewOfType(ItemView);
	if (!view || !view.getViewData || !view.setViewData || !view.requestSave) {
		throw new Error("No active view.");
	}
	const data: unknown = JSON.parse(view.getViewData());
	if (!isCanvasData(data)) {
		throw new Error("Active view does not contain Canvas data.");
	}
	return { view, data };
}

export function setActiveCanvasData(view: ItemView, data: unknown) {
	if (!view || !view.getViewData || !view.setViewData || !view.requestSave) {
		throw new Error("No active view.");
	}
	if (!isCanvasData(data)) {
		throw new Error("Data is not Canvas data.");
	}
	view.setViewData(JSON.stringify(data), true);
	view.requestSave();
}

export function getCanvasNodeDataByID(id: string, data: CanvasData) {
	const matchingNode = data.nodes.find((x) => x.id === id);
	if (!matchingNode) {
		throw new Error(`Could not find matching node with id "${id}".`);
	}
	return matchingNode;
}
