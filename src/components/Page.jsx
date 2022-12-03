import React from "react";
import { useState } from 'react';
import Header from './Header';
import Card from './Card';
import AddForm from './AddForm';


const Page = () => {    

const [notes,setNotes] = useState([]);

  const AddNote = (content) => {
    let note = {
      id : 1,
      content:content
    }
    setNotes([...notes,note]);
  }

  const DeleteNote = (note) => {
    setNotes(notes.filter(n=>n!==note));
  }


    return(  
        <div>  
            <Header />
            {notes.map((note,index)=><Card key={index} note={note} action={(note) => DeleteNote(note)}/>)}            
            <AddForm action = {(content) => AddNote(content)}/>
        </div>
        )   
}

export default Page;