import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  } // pega as props q foram passadas no componente e ao clicar no botão, vc acessa a props onDelete e passa como parametro pra ela outra props declarada lá no componente, que é a id

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
