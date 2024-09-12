import { useRef, useState } from "react";
import { Button, TextField, List, ListItem, IconButton, Typography, Box, Container, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function App() {
  // Set State For Todos
  const [todos, setTodos] = useState([]);

  // Set Ref For Getting Element From Jsx
  const inp = useRef();

  // Function For Add Todos
  const addTodos = () => {
    if (inp.current.value) {
      setTodos([...todos, inp.current.value]);
    } else {
      alert("Input field cannot be empty");
    }
    inp.current.value = "";
  };

  // Function For Delete Todos
  const deleteTodos = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  // Function For Edit Todos
  const editTodo = (index) => {
    const newValue = prompt("Enter New Value");
    if (newValue !== todos[index] && newValue) {
      todos.splice(index, 1, newValue);
      setTodos([...todos]);
    } else {
      alert("Please Enter a New Value");
    }
  };

  // Function For Delete All Todos
  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <Container maxWidth="sm" className="mt-5">
      <Paper elevation={5} className="p-4 todo-container">
        <Typography variant="h4" className="text-center title">
          Todo Application
        </Typography>

        <Box className="mb-4 mt-3">
          <TextField
            label="Add a new task"
            variant="outlined"
            fullWidth
            inputRef={inp}
            className="custom-input"
          />
        </Box>
        <Button
          variant="contained"
          onClick={addTodos}
          className="w-100 mb-4 custom-add-btn"
        >
          Add Task
        </Button>

        <List className="todo-list">
          {todos.map((item, index) => (
            <ListItem
              key={index}
              className="d-flex justify-content-between align-items-center todo-item"
            >
              <Typography variant="body1" className="todo-text">{item}</Typography>
              <div>
                <IconButton
                  color="secondary"
                  onClick={() => editTodo(index)}
                  className="icon-btn"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => deleteTodos(index)}
                  className="icon-btn"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </ListItem>
          ))}
        </List>

        {todos.length > 0 && (
          <Button
            variant="contained"
            color="error"
            onClick={deleteAll}
            className="w-100 custom-delete-all-btn"
          >
            Delete All Tasks
          </Button>
        )}
      </Paper>
    </Container>
  );
}

export default App;
