import { useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <div>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            console.log("coucou");
            const formData = new FormData(event.target);
            const newTodo = formData.get("todo").trim();
            if (newTodo !== "" && !todoList.includes(newTodo)) {
              setTodoList([...todoList, newTodo]);
            }
            event.target.reset();
          }}
        >
          <label htmlFor="todo">Votre todo a ajouter</label>
          <input type="text" id="todo" name="todo" />
          <input type="submit" />
        </form>

        {todoList.map((oneTodo) => {
          return (
            <li key={oneTodo}>
              {oneTodo}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log(`supprimer l'élement : ${oneTodo}`);

                  const newTodoList = todoList.filter((currentTodoOfArray) => {
                    if (currentTodoOfArray !== oneTodo) {
                      return oneTodo;
                    }
                  });

                  setTodoList(newTodoList);
                }}
              >
                X
              </span>
            </li>
          );
        })}
      </div>
    </>
  );
}


export default App
