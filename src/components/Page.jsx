import React from "react";
import { useState } from 'react';
import Header from './Header';
import Card from './Card';
import AddForm from './AddForm';
import CardList from './CardsList';
import { nanoid } from 'nanoid'
import axios from "axios";

const Page = () => {    

const [notes,setNotes] = useState([]);



  const AddNote = (content) => {
    let note = {
      id : nanoid(),
      content:content
    }

    axios.post(`http://localhost:7777/notes`, { note })
      .then(res => {
      })


      UpdateNotes();
  }

  const DeleteNote = (note) => {
    console.log(note);
    axios.delete(`http://localhost:7777/notes/${note.id}`)
    .then(res => {
      //console.log(res);
    })

    UpdateNotes();
  }


  const UpdateNotes = () =>{
    axios.get(`http://localhost:7777/notes`)
      .then(res => {
        console.log(res.data);
        const updatedValue = res.data;
        //const updatedNotes = updatedValue.map((item) => item.note);
        setNotes(updatedValue);
      })
  }
  UpdateNotes();

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