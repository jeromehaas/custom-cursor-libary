export interface cursorInterface {
	element: HTMLElement,
	position: {
		x: number | null,
		y: number | null
	}
}

export interface mainInterface {
	element: HTMLElement
}

export interface followerInterface {
	element: HTMLElement,
	isStuck: boolean
}

export interface contentInterface {
	element: HTMLElement
}