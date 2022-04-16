import BasicCursor from '../basic-cursor/basic-cursor';
import { cursorInterface, mainInterface, followerInterface, contentInterface } from './gravity.interface';
import { gsap } from 'gsap';

class Gravity extends BasicCursor {

	constructor(public cursor?: cursorInterface, public main?: mainInterface, public follower?: followerInterface, public content?: contentInterface ) {
		super('gravity');
		this.cursor = {
			element: document.querySelector('.gravity__cursor'),
			position: {
				x: null,
				y: null
			}
		};	
		this.main = {
			element: document.querySelector('.cursor__main')
		};
		this.follower = {
			element: document.querySelector('.cursor__follower'), 
			isStuck: false
		};
		this.content = {
			element: document.querySelector('.gravity__content')
		};
	}
	
	run = () => {
		this.addEventListener();		
	};

	addEventListener = () => {
		window.addEventListener('pointermove', (event) => this.updateCursorPosition(event), true);
		window.addEventListener('pointermove', () => this.moveMain(), true);
		window.addEventListener('pointermove', () => this.moveFollower(), true);
		this.content.element.addEventListener('pointerenter', (event) => this.activateContent(event));
		this.content.element.addEventListener('pointerleave', () => this.deactivateContent());
	};

	activateContent = (event: MouseEvent) => {
		this.follower.isStuck = true;
		const targetBox = event.currentTarget as HTMLElement;
		const targetRect = targetBox.getClientRects();
		console.log(targetRect);
		console.log('go');
		gsap.to(this.follower.element, {
			x: targetRect[0].left,
			y: targetRect[0].top,
			width: targetRect[0].width,
			height: targetRect[0].height,
			transform: 'translate(0, 0)',
			duration: 0.3
		});
	};

	deactivateContent = (): void => {
		this.follower.isStuck = false;
		gsap.to(this.follower.element, {
			width: 32,
			height: 32,
			transform: 'translate(-50%, -50%)',
			duration: 0.3
		});	
	};
	
	moveMain = () => {
		gsap.to(this.main.element, {
			x: this.cursor.position.x,
			y: this.cursor.position.y,
			duration: 0.6
		});
	};

	moveFollower = () => {
		if (!this.follower.isStuck) {
			gsap.to(this.follower.element, {
				x: this.cursor.position.x,
				y: this.cursor.position.y,
				duration: 0.1
			});
		}
	};
	
	updateCursorPosition = (event: MouseEvent) => {
		this.cursor.position.x = event.clientX;
		this.cursor.position.y = event.clientY;
	};
	
}

export default Gravity;