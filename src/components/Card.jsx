import React from "react";
import classes from '../styles/Card.css';

const Card = (props) => {

    console.log(props);
    
    const note = props.note;
    const action = props.action;


    const Delete = () => {
        action(note);
    }

    return(   
        <>     
            {
                note !== undefined
                ?
                    <div className="card">
                        <div className="close" onClick={Delete}></div>
                        <div className="content">{note.content}</div>                        
                    </div> 
                :
                    <h2>Ничего не найдено</h2>
            }
        </>
        )   
}

export default Card;