import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Department, setDepartment] = useState("");
  const [Age, setAge] = useState("");
  const [student, setStudent] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(()=>{
    const savedStudents=
    JSON.parse(
      localStorage.getItem("students")
    )||[];
    setStudents(savedStudents);
  },[] );

const handleSubmit=() => {
  if(
    name===""||
    email===""||
    department===""||
    age===""
  ){
    alert("please fill all fields");
    return;
  }

const student={
  name,
  email,
  department,
  age
};

if(editIndex !== null){
  const updatedStudents=[...students];
  updateStudents[editIndex]=student;
  setStudents(updatedStudents);
  localStorage.setItem(
    "students",
    JSON.stringify(updatedStudents)

  );
  setEditIndex(null);
}

}

  return (
    <div
      style={{
        width: "700px",
        margin: "30px auto",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)"
      }}
    >

      <h1
        style={{
          textAllign: "center"
        }}

      >
        learner Registration

      </h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={Name}
        onChange={(e) =>
          setName  (e.target.value)

        }
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
      setEmail(e.target.value)
   }
      style={inputStyle}
  />
      <input
        type="text"
        placeholder="Enter Department"
        value={Department}
        onChange={(e) =>
          setName  (e.target.value)

        }
        style={inputStyle}
      />
      <input
        type="Number"
        placeholder="Enter Age"
        value={Age}
        onChange={(e) =>
          setName  (e.target.value)

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
      <table 
      border="1"
      cellPadding="10"
      style={{

        width:"100%",

        borderCollapse:
        "collapse"
      }}
      
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>

          {
             students.map(
              (student,index)=>(
                <tr key={index}>
                  <td>
                    {students.name}
                  </td>
                  <td>
                    {students.email}
                  </td>
                  <td>
                    {
                      students.department
                    }
                  </td>
                  <td>
                    {student.age}
                  </td>
                  <td>
                    <button
                    onclick={()=>
                      handleEdit(index)
                    }
                    >
                      Edit
                    </button>
                    <button
                    onclick={()=>
                      handleDelete(index)
                    }
                    style={{
                      marginLeft:
                      "10px"
                    
                    }}>
                      Delete
                    </button>
                  </td>
                  
                  
                </tr>
              )
             )
          }
        </tbody>
      </table>
    </div>
  );
}

const inputStyle={
  width:"100%",
  padding:"10px",
  marginBottom:"15px",
  borderRadius:"5px",
  border:"1px solid #ccc",
  boxSizing:"border-box"
};
const buttonStyle={
  width:"100%",
  padding:"12px",
  border:"none",
  borderRadius:"5px",
  cursor:"pointer"
};
export default App;
  
