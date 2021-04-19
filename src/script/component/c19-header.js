import logo from '../../image/logo.svg';

class C19Header extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <header class="site-header">
                <div class="container">
                    <div class="site-header-inner">
                        <div class="brand header-brand">
                            <h1 class="m-0">
                                <a href="#">
                                    <img class="header-logo-image" src="${logo}" alt="Logo">
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }

}

customElements.define('c19-header', C19Header);