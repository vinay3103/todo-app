import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';

function App() {
  // Load tasks directly from localStorage on initialization
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [showConfetti, setShowConfetti] = useState(false);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    try {
      console.log("Saving tasks to localStorage:", tasks); // Debug log
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    toast.success("🎉 Task Added!");
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (!task.completed) {
          toast("✨ Task Completed! Great Job!", { type: "info" });
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.warning("🗑 Task Removed!");
  };

  return (
    <Container maxWidth="sm" style={{ padding: '1.5rem', marginTop: '2rem' }}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#1976d2' }}
      >
        📝 My To-Do List
      </Typography>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TodoForm addTask={addTask} />
        </Grid>
        <Grid item>
          <TodoList
            tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
          />
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
}

export default App;
