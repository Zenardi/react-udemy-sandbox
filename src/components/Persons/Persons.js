import React, {PureComponent} from 'react'
import Person from '../Persons/Person/Person'

class Persons extends PureComponent{
shouldComponentUpdate(nextProps, nextState){
    return true;
}

    render(){
        return this.props.persons.map((person, index) => {
                return <Person
                  click={() => this.props.clicked(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.props.changed(event, person.id)} />
              });
        
    }
}

      export default Persons
