import { useEffect, useRef, useState } from "react"
import axios from 'axios'


function ListTodo(){
    
    const[todos, setTodos] = useState([]);
    var isFirstRender = useRef(true);

    const getTodos = async() => {
        try{
            const response = await axios.get("http://localhost:3000/todos");
            const jsonData = await response.data;
            // console.log(jsonData[0].description);
            // console.log(jsonData);
            setTodos(jsonData);
        }
        catch(err){
            console.log(err.message);
        }
    }

    



    useEffect(() => {
        if(isFirstRender){
            getTodos();
            isFirstRender = false;
        }
    }, []);



    

 
    return (
        <>  
         <h1 className="text-center">List Todo</h1>
         <table className="table">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
             
            {todos.map((container, index) => (
    <tr key={index}>
        <td>{container.description}</td>
        <td>Edit</td>
        <td>Delete</td>
        {/* Add Edit and Delete buttons here */}
    </tr>
))}
                
            </tbody>
        </table>

       
        </>
    )
}

export default ListTodo