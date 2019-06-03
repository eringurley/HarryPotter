import Component from './Component.js';

class RmItem extends Component {

    renderTemplate() {
        const characters = this.props.characters;
        return /*html*/`
            <li>
                <h2>${characters.name}</h2>
                <h3>${characters.species}</h3>
                <img src="${characters.image}">
            </li>
        `;
    }
}

export default RmItem;