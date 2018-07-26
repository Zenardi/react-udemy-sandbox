import React from 'react'
import classes from './Cockpit.css'
import Auxiliary from '../../hoc/Auxiliary'

const cockpit =(props)=>{
    const assignedClasses =[];
    let btnClass = '';

    if(props.showPersons)
        btnClass = classes.red;

    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
    <Auxiliary>
        <h2>{props.appTitle}</h2>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className = {btnClass} onClick={props.clicked}>Toggle Persons</button>
    </Auxiliary>
    );
};

export default cockpit;