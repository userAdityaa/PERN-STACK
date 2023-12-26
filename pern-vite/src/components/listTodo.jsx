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

    const deleteTodos = async(id) => {
        try{    
            const response = await axios.delete(`http://localhost:3000/todos/${id}`);

            console.log(response.data);
            setTodos(todos.filter(todo => todo.todo_id !== id));

        }catch(err){
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
         <h1 className="text-center mt-5">List Todo</h1>
         <div className=" d-flex justify-content-center">
         <table className="table w-50 mt-5">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
             
            {todos.map((container) => (
    <tr key={container.todo_id}>
        <td>{container.description}</td>
        <td><button className="btn btn-primary">Edit</button></td>
        <td><button className="btn btn-danger" onClick={() => deleteTodos(container.todo_id)}>Delete</button></td>
        {/* Add Edit and Delete buttons here */}
    </tr>
))}
                
            </tbody>
        </table>
        </div>

       
        </>
    )
}

export default ListTodo