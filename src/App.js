//All the modules needed for the app

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";

//Bootstrap module for appearance and responsiveness
import "bootstrap/dist/css/bootstrap.min.css";

// 1. Create a new React component called "TodoList" that renders a list of to-do items.
//    Each to-do item should consist of a checkbox, a label displaying the text of the to-do, and a delete button.

// 2. Create a new React component called "TodoForm" that renders a form for adding new to-do items.
//    The form should consist of a text input for entering the text of the new to-do item and a button
//    for adding the item to the list.

// 3. In The "App" component render the TodoList and TodoForm components.

// 4. Add functionality to the TodoList component that allows the user to toggle the completion status of a to-do item
//    by clicking on its checkbox. Completed to-do items should be displayed with a strikethrough.

// 5. Add functionality to the TodoList component that allows the user to delete a to-do item by clicking on its delete button.

// 6. Add functionality to the TodoForm component that allows the user to add a new to-do item to the list when the form is submitted.

// 7. Add some basic styling to the app to make it visually appealing.

// You may also want to consider additional features such as filtering the to-do list by
// completion status or due date, editing existing to-do items, or persisting the to-do list
// data using local storage. However, these are not required for the basic test.

// Good luck with the test!

//This is the todo list component
function TodoList({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

//Form for todos
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button id="todo" class="addToDo" variant="mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

//MAIN
function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].isDone === true) {
      newTodos[index].isDone = false;
    } else {
      newTodos[index].isDone = true;
      window.alert("Task : " + newTodos[index].text + " is completed");
    }
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //Display the form and the list dynamically
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Add a task to complete</h1>
        <TodoForm addTodo={addTodo} />
        <div>
          <h3>To do list</h3>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <TodoList
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
