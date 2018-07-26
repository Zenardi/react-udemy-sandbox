import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import PropTypes from 'prop-types'
import {AuthContext} from '../../../containers/App'

class Person extends Component{

    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount(){
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
    }

    focus(){
        this.inputElement.current.focus();
    }

    render(){
        return (
            <Auxiliary>
                <AuthContext.Cosumer>
                    {auth => auth ? <p>Welcome {this.props.name} ! </p> : null}
                </AuthContext.Cosumer>
                
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Auxiliary>
        )
} 
};

Person.PropTypes = {
    click: PropTypes.func, 
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;

// export default withClass(Person, classes.Person);