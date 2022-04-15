class BasicCursor {

	constructor(name) {
		this.name = name;
		this.cursor = {
			element: document.querySelector('.cursor')
		};
	};

	init = () => {
		if (document.querySelector(`.js-${this.name}`)) {
			this.print();
			this.show();
			this.run();
		};
	};

	print = () => {
		console.log(`Initialize:`);
		console.log(
		`%c ${this.name}`, 
		'font-weight: bold; font-size: 50px;color: #eab5de;');
	};

	replaceCursors = () => {
		this.cursor.element.style.display = 'block'	
		document.body.style.cursor = 'none';
		window.removeEventListener('mousemove', this.replaceCursors);
	};

	show = () => {
		window.addEventListener('mousemove', this.replaceCursors);
	};


};

export default BasicCursor;