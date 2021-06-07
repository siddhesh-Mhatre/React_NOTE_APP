import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNode from "./CreateNode";
import Note from "./Note";
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("i am clciked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    // console.log(note);
  };

  const onDelete=(id)=>{
    setAddItem((oldData)=>
      oldData.filter((currdata,indx)=>{
         return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNode passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem ={onDelete}
          />
        );
      })
      }
      <Footer />
    </>
  );
};

export default App;
