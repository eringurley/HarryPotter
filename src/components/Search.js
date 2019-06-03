import Component from './Component.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();

        const input = form.querySelector('input');
        

        form.addEventListener('submit', event => {
            event.preventDefault();
            console.log(input);
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form id="search">
                <input type="text" placeholder="search by name">
                <button>Submit</button>
            </form>
        `;
    }
}

export default Search;