import { Menu } from "obsidian";
import CanvasSendToBackPlugin from "./main";

export function registerEvents(plugin: CanvasSendToBackPlugin) {
	const menuSectionName = "canvasSendToBack";

	plugin.registerEvent(
		plugin.app.workspace.on(
			"canvas:node-menu",
			(menu: Menu, node: unknown) => {
				menu.addItem((item) => {
					item.setTitle("Send to back");
					item.setSection(menuSectionName);
					item.onClick((e) => {
						plugin.sendNodeToBack(node);
					});
				});
			}
		)
	);

	plugin.registerEvent(
		plugin.app.workspace.on(
			"canvas:node-menu",
			(menu: Menu, node: unknown) => {
				menu.addItem((item) => {
					item.setTitle("Send to front");
					item.setSection(menuSectionName);
					item.onClick((e) => {
						plugin.sendNodeToFront(node);
					});
				});
			}
		)
	);
}
