const activatedElements = [];
const hljsClases = ['hljs-tag', 'hljs-name', 'hljs-attr', 'hljs-string', 'hljs-attribute', 'hljs-selector-pseudo'];

const edit = (element) => {
	element.setAttribute("contentEditable", "true");
	const target = element.closest('section').querySelector('[data-edit]');
	if (target) {
		element.addEventListener('keyup', () => {
			const text = element.textContent;
			target.innerHTML = text;
		});
		activatedElements.push(element);
	}
};

const Plugin = {
	id: 'editor',
	init(reveal) {
		reveal.getRevealElement().addEventListener( 'click', function( { target } ) {
			if (target.classList.contains('hljs') && target.getAttribute("contentEditable") === null) {
				edit(target);
			}
			if (Array.from(target.classList).some(cls => hljsClases.includes(cls))) {
				const parent = target.closest(".hljs");
				if (parent.getAttribute("contentEditable") === null) {
					edit(parent);
				}
			}
		} );
	},
	destroy() {
		activatedElements.forEach((element) => {
			element.removeAttribute("contentEditable");
			element.removeEventListener('keyup');
		});
	}
};

export default () => Plugin;
