import React from "react";
import classes from '../styles/Card.css';

const Card = (props) => {


    const note = props.note;
    const action = props.action;

    
    const Delete = () => {
        action(note);
    }

    return(          
            <div className="card">
                <div className="close" onClick={Delete}></div>
                <div className="content">{note.content}</div>                        
            </div> 
        )   
}

export default Card;