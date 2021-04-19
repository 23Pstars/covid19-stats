import icon from '../../image/feature-icon-01.svg';

class C19Item extends HTMLElement {

    set dataTitle(title) {
        this._title = title;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const __title = (this._title || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this._description = this.getAttribute('data-description') || 'Description';
        this.innerHTML = `
            <div class="feature text-center">
                <div class="feature-inner">
                    <div class="feature-icon">
                        <img src="${icon}" alt="Icon">
                    </div>
                    <h4 class="feature-title mt-24">${__title}</h4>
                    <p class="text-sm mb-0">${this._description}</p>
                </div>
            </div>
        `;
    }

}

customElements.define('c19-item', C19Item);