let vm = Vue.createApp({
	data() {
		return {
			perspectiveValue: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
		};
	},
	computed: {
		box_styles() {
			return {
				transform: `perspective(${this.perspectiveValue}px)
                rotateX(${this.rotateX}deg)
				rotateY(${this.rotateY}deg)
				rotateZ(${this.rotateZ}deg)`,
			};
		},
	},
	methods: {
		reset() {
			this.rotateX = 0;
			this.rotateY = 0;
			this.rotateZ = 0;
			this.perspectiveValue = 100;
		},
		async copyValues() {
			let text = `transform:${this.box_styles.transform}`;
			await navigator.clipboard.writeText(text);
			alert('CSS copied to clipboard!');
		},
	},
}).mount('#app');
