const URL = 'https://rickandmortyapi.com/api/character/';

const rmApi = {
    getCharacters() {

        return fetch(URL) 
            .then(response => response.json());
    }
};

export default rmApi;