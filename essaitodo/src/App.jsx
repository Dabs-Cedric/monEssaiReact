import { useState } from "react";


function App() {
  const[todolist, setTodoList] = useState([]);

  return (
    <>
    <form action=""
    onSubmit={(event) => {
      event.preventDefault();
      console.log("coucou");
      const formData = new formData(event.target);
      const newTodo = formData.get("todo");
    }

    }></form>
    <h1>Todolist</h1>
    <p>Élément à ajouter</p>
    <label htmlFor="search">Votre nom</label>
    <input type="text" />
    <input type="submit" value="Submit" />
    </>
  )
}

export default App
