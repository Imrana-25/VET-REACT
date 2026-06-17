import { useState,useEffect } from "react";
function App(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[Department,setDepartment]=useState("");
  const[Age,setAge]=useState("");
  const[student,setStudent]=useState([]);
  const[editIndex,setEditIndex]=useState(null);

  return(
    <div
    style={{
      width:"700px",
      margin:"30px auto",
      padding:"25px",
      borderRadius:"15px",
      boxShadow:"0 0 15px rgba(0,0,0,0.2)"
    }}
    >
  )
  <h1 
  style={{
    textAllign:"center"
  }}

  >
    learner Registration

  </h1>

  <input
    type="text"
    placeholder="Enter Name"
    value={Name}
    onChange={(e) =>
      setName=(e.target.value)

    }
    style={inputStyle}
  />
  <input
   type="email"
    placeholder="Enter Email"
   value={Email}
   onChange={(e)
      setEmail=(e.target.value)
   }
   style={inputStyle}
  />
   <input
   type="text"
    placeholder="Enter Department"
    value={Department}
    onChange={(e) =>
      setName=(e.target.value)

    }
    style={inputStyle}
  />
  <input
  type="Number"
    placeholder="Enter Age"
    value={Age}
    onChange={(e) =>
      setName=(e.target.value)

    }
    style={inputStyle}
  />
  <button 
  onClick={handleSubmit}
  style={buttonStyle}
  >
    {
      editIndex !== null
      
      ?
      "update student"
      :
      "Add student"
    }
  </button>
  <h2>
    student list
  </h2>
  </div>


  
}