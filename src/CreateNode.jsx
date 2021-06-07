import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
const CreateNode = (props) => {
  
  const [expand,setExpand]=useState(false);


  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    // console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);

    setNote({   //displyed data refresh
      title: "",
      content: ""
    });
  };
 
  const expandIt = ()=>{
    setExpand(true);
  }

  const shrinkIt =()=>{
   setExpand(false);
  }
  return (
    <>
      <div className="main_note">
        <form>

     {   expand?
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />:null
     }
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="write a note..."
            onClick={expandIt}
            onDoubleClick={shrinkIt}
          />


      { 
        expand?
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
          :null
      }
        </form>
      </div>
    </>
  );
};

export default CreateNode;
