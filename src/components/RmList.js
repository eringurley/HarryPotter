import Component from './Component.js';
import RmItem from './RmItem.js';

class RmList extends Component {

    render() {
        const list = this.renderDOM();
        const characters = this.props.characters;
        characters.forEach(character => {
            const rmItem = new RmItem({ characters: character });
            

            list.appendChild(rmItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="rm-list">
            
            </ul>
        `;
    }
}

export default RmList;