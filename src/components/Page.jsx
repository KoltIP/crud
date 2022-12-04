import React from "react";
import { useState } from 'react';
import Header from './Header';
import Card from './Card';
import AddForm from './AddForm';
import CardList from './CardsList';
import { nanoid } from 'nanoid'


const Page = () => {    

const [notes,setNotes] = useState([]);

  const AddNote = (content) => {
    let note = {
      id : nanoid(),
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
            <div>
              {notes.length===0?
                  <span>Пусто</span>
                :
                  <CardList notes = {notes} action = {(note) => {DeleteNote(note)}}/>}   
            </div>     
            <AddForm action = {(content) => {AddNote(content)}}/>
        </div>
        )   
}

export default Page;