import BasicCursor from "../basic-cursor/basic-cursor";
import { cursorInterface } from './virgin.interface';

class Virgin extends BasicCursor {

	constructor(public cursor?: cursorInterface) {
		super('virgin');
		this.cursor = {
			element: document.querySelector('.virgin__cursor'),
			position: {
				x: null,
				y: null
			}
		};
	};

	run = () => {
		this.addEventListener();
	};

	addEventListener = () => {
		window.addEventListener('pointermove', (event: MouseEvent) => {
			this.updateCursorPosition(event);
			this.moveCursor();
		});
		window.addEventListener('mousedown', () => this.cursorStyleBig());
		window.addEventListener('mouseup', () => this.cursorStyleDefault());
	}

	updateCursorPosition = (event: MouseEvent) => {
		this.cursor.position.x = event.clientX;
		this.cursor.position.y = event.clientY;
	};

	moveCursor = () => {
		this.updateCursorStyle();
		this.cursor.element.style.top = `${this.cursor.position.y}px`;
		this.cursor.element.style.left = `${this.cursor.position.x}px`;
	};

	updateCursorStyle = () => {
		if (this.cursor.position.x < 8 || this.cursor.position.y < 8 || this.cursor.position.x > (document.body.scrollWidth) - 8 || this.cursor.position.y > (document.body.scrollHeight) - 8) {
			this.hideCursor();
		} else {
			this.cursorStyleDefault();
		};
	};

	cursorStyleBig = () => {
		this.cursor.element.style.transform = 'scale(2) translate(-50%, -50%)';
	};

	cursorStyleDefault = () => {
		this.cursor.element.style.transform = 'scale(1) translate(-50%, -50%)';
	};

	hideCursor = () => {
		this.cursor.element.style.transform = 'scale(0.1) translate(-50%, -50%)';
	};

};

export default Virgin;