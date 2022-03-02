import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import GlobalStyles from "../_app";
  



function App() {
  const [notes, setNotes] = useState([]); // criar uma lista de notas

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  } // adiciona uma nota na lista de notas

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  } // percorre as notas existentes na lista de notas, filter acessando 2 de suas propriedades e retornando todas em que o id não é igual ao index

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />)}
        )}        
      <Footer />
      </div>
    
  ); //percorre a lista de notas, acessa 2 de suas propriedades e retorna o componente note com os props q são passados
} 


export default App;
