import React from 'react';
import { List } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTaskCompletion, removeTask }) {
  const listVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <List
      sx={{
        borderRadius: '8px',
        backgroundColor: '#f7f7f7',
        padding: '1rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        maxHeight: '400px',
        overflowY: 'auto',
      }}
    >
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            variants={listVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
          >
            <TodoItem
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              removeTask={removeTask}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </List>
  );
}

export default TodoList;
