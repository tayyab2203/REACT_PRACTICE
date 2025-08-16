import React from "react";

const TodoListMapPractice = () => {
  const todos = [
    {
      task: "Code Daily",
      done: true,
    },
    {
      task: "Drink 8 glass of water",
      done: true,
    },
    {
      task: "Go to gym",
      done: false,
    },
  ];
  return (
    <>
      <div>TodoListMapPractice</div>
      <h4 className="bg-rose-600 m-2 p-4 rounded transition duration-300 ease-in-out hover:bg-rose-400 hover:text-black ">Below is the TODO list that shows by using Map()</h4>
      <ul>
        {todos.map((tasks, index) => (
          <li key={index}>
            {tasks.task}--{tasks.done ? "🆗" : "❌"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoListMapPractice;
