import React from "react";
import classes from '../styles/Card.css';

const AddForm = (props) => {

    const action = props.action;

    const addNote = () =>{
        let newContent = document.getElementById("newContent").value;
        action(newContent);
    }

    return(        
        <div className="card">
            <div className="content">
                <input className="" id="newContent"/>
            </div>
            <button onClick={addNote}>Click</button>
        </div>
        )   
}

export default AddForm;