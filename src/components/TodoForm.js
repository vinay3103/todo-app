import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TodoForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      alert("Task cannot be empty!");
      return;
    }
    addTask(task);
    setTask('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      <TextField
        label="Add a Task"
        placeholder="E.g., Buy groceries"
        variant="outlined"
        size="small"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{
          flex: 1,
          borderRadius: '8px',
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          padding: '0.5rem 1.5rem',
          backgroundColor: '#1976d2',
          '&:hover': { backgroundColor: '#005bb5' },
          borderRadius: '8px',
        }}
      >
        Add
      </Button>
    </Box>
  );
}

export default TodoForm;
