import React from "react";
import classes from '../styles/CardsList.css';
import Card from './Card';

const CardsList = (props) => {
    const notes = props.notes;
    const action = props.action;

    return(   
        <div className="list">
            {notes.map((note,index)=><Card key={index} note={note} action={action}/>)}  
        </div>     
        )   
}

export default CardsList;