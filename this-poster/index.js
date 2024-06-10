import { create, cssomSheet } from 'https://cdn.skypack.dev/twind';
const sheet = cssomSheet({ target: new CSSStyleSheet() });
const { tw } = create({ sheet });

class Header extends HTMLElement {
	constructor() {
		super();
		this.tw = tw;
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.adoptedStyleSheets = [sheet.target];

		shadow.innerHTML = `<header class="${tw`top-0 fixed shadow-md`}">
        <h1 class="${tw`font-extralight text-xl p-4 bg-white w-[92px]`}">
            <a href="/index.html">pío, pío Graphic Club</a>
        </header>`;
	}
}

class Splash extends HTMLElement {
	constructor() {
		super();

		const template = document.createElement('template');
		template.innerHTML = `
        <style>
        content {
            display: flex;
            min-height: 100svh;
            align-items:center;
            justify-content: center;
        }
        ::slotted(img){
            width: 100%
        }
        </style>
        <div id="invitation" class="${tw`z-10 fixed inset-0 bg-white h-full`}">
        <header class="${tw`top-0 fixed shadow-md`}">
            <h1 class="${tw`font-extralight text-xl p-4 bg-white w-[92px]`}">
                <a href="/index.html">pío, pío Graphic Club</a>
            </header>
        <content>
          <slot></slot>
        </content>
    </div>
`;
		this.template = template;
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.adoptedStyleSheets = [sheet.target];
		this.shadow = shadow;
		this.shadow.appendChild(this.template.content.cloneNode(true));
	}

	connectedCallback() {}
}

customElements.define('main-header', Header);
customElements.define('invitation-splash', Splash);
