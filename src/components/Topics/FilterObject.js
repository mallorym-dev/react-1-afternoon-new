import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            characters: [
                {
                    name: 'Gandalf',
                    species: 'wizard',
                    age: 800
                },
                {
                    name: 'Bilbo',
                    species: 'hobbit',
                    age: 89
                },
                {
                    name: 'Thorin',
                    species: 'Dwarf',
                    age: 98
                }
            ],
            userInput: '',
            filteredChar: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filterChars(prop) {
        let characters = this.state.characters;
        let filteredChar = [];

        for (let i = 0; i < characters.length; i++) {
            if (characters[i].name.includes(prop)) {
                filteredChar.push(characters[i])
            }
        }

        this.setState({filteredChar: filteredChar})
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.characters, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterChars(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredChar, null, 10)}</span>
            </div>
        )
    }
}