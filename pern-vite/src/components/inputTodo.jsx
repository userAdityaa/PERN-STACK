import { useState } from "react";


function InputTodo(){

    const [description, setDescription] = useState('');

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{    
            const body = {description};
            const response = await fetch("http://localhost:3000/todos",{
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });

            console.log(response);
        }catch(err){
            console.log(err.messages);
        }
    }


    return(
        <>
            <h1 className="text-center mt-5">PERN TODO LIST</h1>
            <form className="d-flex mt-5 align-items-center justify-content-center" onSubmit={onSubmitForm}>
                <label htmlFor="task"></label>
                <input type="text" className="form-control w-25" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </>

    )
}

export default InputTodo