import { Notice } from "obsidian";

const DEFAULT_NOTICE_TIMEOUT_SECONDS = 5;

export class InfoNotice extends Notice {
	constructor(
		message: string | DocumentFragment,
		timeout = DEFAULT_NOTICE_TIMEOUT_SECONDS
	) {
		super(`Canvas Send To Back\n${message}`, timeout * 1000);
		console.info(`canvas-send-to-back: ${message}`);
	}
}

export class ErrorNotice extends Notice {
	constructor(
		message: string | DocumentFragment,
		timeout = DEFAULT_NOTICE_TIMEOUT_SECONDS
	) {
		super(`Canvas Send To Bac\n${message}`, timeout * 1000);
		console.error(`canvas-send-to-back: ${message}`);
	}
}
