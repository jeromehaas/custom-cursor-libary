import BasicCursor from '../basic-cursor/basic-cursor';
import { cursorInterface, mainInterface, followerInterface } from './clingy.interface';
import { gsap } from "gsap";

class Clingy extends BasicCursor {

	constructor(public cursor?: cursorInterface, public main?: mainInterface, public follower?: followerInterface) {
		super('clingy');
		this.cursor = {
			element: document.querySelector('.clingy__cursor'),
			position: {
				x: null,
				y: null
			}
		};
		this.main = {
			element: document.querySelector('.cursor__main'),
			position: {
				x: null,
				y: null
			}
		};
		this.follower = {
		 element: document.querySelector('.cursor__follower'),
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
	};

	updateCursorStyle = () => {
		if (this.cursor.position.x < 8 || this.cursor.position.y < 8 || this.cursor.position.x > (document.body.scrollWidth) - 8 || this.cursor.position.y > (document.body.scrollHeight) - 8) {
			this.hideCursor();
		} else {
			this.showCursor();
		};
	};

	showCursor() {
		gsap.to(this.main.element, {
			opacity: 1,
			duration: 0.1,
			width: 32,
			height: 32
		});
		gsap.to(this.follower.element, {
			opacity: 1,
			duration: 0.1,
			width: 16,
			height: 16
		});
	};

	hideCursor() {
		gsap.to([this.main.element, this.follower.element], {
			opacity: 0,
			duration: 0.5,
			width: 0,
			height: 0
		});
	};
	
	moveCursor() {
		this.updateCursorStyle();
		gsap.to(this.main.element, {
			x: this.cursor.position.x,
			y: this.cursor.position.y,
		});
		gsap.to(this.follower.element, {
			x: this.cursor.position.x,
			y: this.cursor.position.y,
			duration: 0.75,
			ease: 'circ.out'
		});
	};

	updateCursorPosition = (event: MouseEvent) => {
		this.cursor.position.x = event.clientX;
		this.cursor.position.y = event.clientY;
	};
	
};

export default Clingy;