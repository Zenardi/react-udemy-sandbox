import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Auxiliary from '../hoc/Auxiliary';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
constructor(props){
  super(props);
  this.state = {
    persons: [
      { id: 'ads', name: 'Max', age: 28 },
      { id: 'agf', name: 'Manu', age: 29 },
      { id: 'hnf', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }
}


shouldComponentUpdate(nextProps, nextState){
  return true;
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
    this.setState( (prevState, props) =>
      { 
        return{
          showPersons: !doesShow, 
          toggleClicked: prevState.toggleClicked + 1
        }
    });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
             persons={this.state.persons}
             clicked={this.deletePersonHandler} 
             changed={this.nameChangedHandler}>
          </Persons>
      );
    }

    return (
      <Auxiliary classes = {classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        {<Cockpit appTitle = {this.props.title}
                  showPersons={this.state.showPersons} 
                  persons={this.state.persons}
                  login={this.loginHandler}
                  clicked={this.togglePersonHandler}/>}
        
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
        
      </Auxiliary>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
