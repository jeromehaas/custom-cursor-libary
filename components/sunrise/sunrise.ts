import BasicCursor from '../basic-cursor/basic-cursor';
import { cursorInterface } from './sunrise.interface';
import { gsap } from 'gsap';

class Sunrise extends BasicCursor {

	constructor(public cursor?: cursorInterface) {
		super('sunrise');
		this.cursor = {
			element: document.querySelector('.sunrise__cursor'),
			position: {
				x: null,
				y: null
			}
		};
	}

	run = () => {
		this.addEventListener();
	};

	addEventListener() {
		window.addEventListener('pointermove', (event) => {
			this.updateCursorPosition(event);
			this.moveCursor(); 
		});
	}

	moveCursor() {
		gsap.set(this.cursor.element, {
			x: this.cursor.position.x,
			y: this.cursor.position.y,
		});
		gsap.to('.shape__item', {
			x: this.cursor.position.x,
			y: this.cursor.position.y,
			stagger: -0.1
		});
	}

	updateCursorPosition(event: MouseEvent): void {
		this.cursor.position.x = event.clientX;
		this.cursor.position.y = event.clientY;
	}

}

export default Sunrise;