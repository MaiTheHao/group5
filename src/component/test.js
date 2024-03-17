import React, { useState } from "react";

function Test() {
  const [prop, setProp] = useState({});

  const handleChange = (event) => {
    setProp((prevd)=>(
        {   
            ...prevd, 
            name:event.target.value,
        }
    ))
    console.log(prop)
    
  };

//   const handleSubmit = (event) => {
//     alert("A name was submitted: " + name);
//     event.preventDefault();
//   };

  return (
    <form >
      <label>
        Name:{" "}
        <input type="text" value={prop.name} onChange={handleChange} />
        <input type="number" value={prop.age} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Test;
