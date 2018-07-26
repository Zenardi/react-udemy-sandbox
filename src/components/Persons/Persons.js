import React, {PureComponent} from 'react'
import Person from '../Persons/Person/Person'

class Persons extends PureComponent{

    constructor(props){
        super(props);
        this.lastPersonRef = React.createRef();
    }

shouldComponentUpdate(nextProps, nextState){
    return true;
}

componentDidMount(){
    this.lastPersonRef.current.focus();
}

    render(){
        return this.props.persons.map((person, index) => {
                return <Person
                  click={() => this.props.clicked(index)}
                  name={person.name}
                  position={index}
                  age={person.age}
                  ref ={this.lastPersonRef}
                  key={person.id}
                  changed={(event) => this.props.changed(event, person.id)} />
              });
        
    }
}

      export default Persons
