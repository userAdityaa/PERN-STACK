import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function EditTodo({todo}) {
  const [modalOpen, setModalOpen] = useState(false);

  const[description, setDescription] = useState(todo.description);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const changeDescription = async(e) => {
    e.preventDefault();
    try{
        const body = {description};
        console.log(body);
        const response = await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
            method: "PUT", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
       
        window.location = "/";
        console.log(response);
    }catch(err){
        console.log(err.message);
    }
  } 

  return (
    <>
      <button type="button" className="btn btn-info btn-lg" onClick={openModal}>
        Edit Todo
      </button>

      {modalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close btn btn-danger" onClick={closeModal}>
                  &times;
                </button>
                <h4 className="modal-title">Edit Todo</h4>
              </div>
              <div className="modal-body">
                <input type='text' value={description} className='form-control' onChange={(e) => setDescription(e.target.value)}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default btn-warning" onClick={changeDescription}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTodo;

