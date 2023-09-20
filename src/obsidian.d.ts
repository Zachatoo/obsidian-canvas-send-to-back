import "obsidian";

declare module "obsidian" {
	interface Workspace {
		on(
			name: "canvas:node-menu",
			callback: (menu: Menu, node: unknown) => void,
			ctx?: unknown
		): EventRef;
	}

	interface ItemView {
		getViewData?: () => string;
		setViewData?: (data: string, clear: boolean) => void;
		requestSave?: () => void;
	}
}
