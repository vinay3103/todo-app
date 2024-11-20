import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ task, toggleTaskCompletion, removeTask }) {
  const fadeStyle = useSpring({
    opacity: task.completed ? 0.5 : 1,
    transform: task.completed ? 'scale(0.95)' : 'scale(1)',
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div style={fadeStyle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderBottom: '1px solid #ddd',
        }}
      >
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <Typography
          variant="body1"
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            flexGrow: 1,
          }}
        >
          {task.text}
        </Typography>
        <IconButton
          color="secondary"
          onClick={() => removeTask(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </animated.div>
  );
}

export default TodoItem;
