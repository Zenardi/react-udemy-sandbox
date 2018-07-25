import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import Validation from './Validation/Validation';
// import Char from './Char/Char'

class App extends Component {
  state = {
    persons: [
      { id: 'ads', name: 'Max', age: 28 },
      { id: 'agf', name: 'Manu', age: 29 },
      { id: 'hnf', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: ''
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    //Alternative way
    //const selectedPerson = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const new_persons = this.state.persons.slice(); //copy array before manipulating
    //Alternative approach
    //const new_persons = [...this.state.persons];

    new_persons.splice(personIndex, 1); //remove one element
    this.setState({ persons: new_persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  inputChangehandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {
    // const charList = this.state.userInput.split('').map((ch, index) => {
    //   return <Char character={ch} key={index}
    //     clicked={() => this.deleteCharHandler(index)} />
    // });

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.red;

    }

    const assignedClasses =[];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className = {btnClass} 
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}

        {/* <input type='text' onChange={this.inputChangehandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputlenght={this.state.userInput.length} />
        {charList} */}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default (App);
