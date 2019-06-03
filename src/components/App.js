import Component from './Component.js';
import Header from './Header.js';
import RmList from './RmList.js';
import rmApi from '../services/rm-api.js';
import Search from './Search.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const search = new Search();
        main.appendChild(search.render());

        const rmList = new RmList({ characters: [] });
        main.appendChild(rmList.render());

        function loadCharacters() {
            rmApi.getCharacters()
                .then(characters => {
                    rmList.update({ characters: characters.results });
                    
                })
                .catch(err => { 
                    console.log(err);
                });
                
        }
        loadCharacters();

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;