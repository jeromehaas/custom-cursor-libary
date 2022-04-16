import { cursorInterface } from './basic-cursor.interface'

class BasicCursor {

	constructor(public name: string, public cursor?: cursorInterface) {
		this.name = name;
		this.cursor  = {
			element: document.querySelector('.cursor')
		};
	};

	init = (): void => {
		if (document.querySelector(`.js-${this.name}`)) {
			this.print();
			this.show();
			this.run();
		};
	};

	print = (): void => {
		console.log(`Initialize:`);
		console.log(
		`%c ${this.name}`, 
		'font-weight: bold; font-size: 50px;color: #eab5de;');
	};

	replaceCursors = (): void => {
		this.cursor.element.style.display = 'block'	
		document.body.style.cursor = 'none';
		window.removeEventListener('mousemove', this.replaceCursors);
	};

	show = (): void => {
		window.addEventListener('mousemove', this.replaceCursors);
	};

	run = () => {};


};

export default BasicCursor;