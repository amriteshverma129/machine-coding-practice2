import { useState } from "react";

const Task = ({ id, task, updateTaskComplete, removeTask }) => {
  return (
    <div
      key={id}
      style={{ width: "100%", margin: "10px auto", background: "grey" }}
    >
      <span
        style={{
          padding: "5px",
          marginRight: "10px",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          display: "block",
          background: task.status ? "green" : "lightGreen",
          cursor: "pointer",
        }}
        onClick={() => updateTaskComplete(id)}
      >
        &#10003;
      </span>
      <span style={{}}>{task.task}</span>
      <span
        style={{ padding: "5px", marginLeft: "10px", display: "block" }}
        onClick={() => removeTask(id)}
      >
        &#x2716;
      </span>
    </div>
  );
};

export const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [textValue, setTextValue] = useState("");

  const updateTaskComplete = (id) => {
    console.log(id);
    setTaskList((taskList) =>
      taskList.map((item) => {
        console.log("hhhhhhh", item);
        if (item.id === id) {
          return { ...item, status: true };
        } else return item;
      })
    );
  };
  const removeTask = (id) => {
    setTaskList((taskList) => taskList.filter((item) => item.id !== id));
  };

  function generateShortID() {
    return Math.random().toString(36).substring(2, 9); // Remove "0." prefix
  }

  return (
    <div
      style={{
        width: "400px",
        background: "lightgrey",
        minHeight: "300px",
        padding: "10px",
      }}
    >
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (!textValue?.trim()) return;
            setTaskList((taskList) => [
              ...taskList,
              { id: generateShortID(), task: textValue, status: false },
            ]);
            setTextValue("");
          }
        }}
        placeholder="Write your task..."
        style={{
          width: "90%",
          height: "30px",
          padding: "10px",
          borderRadius: "5px",
          border: "0px",
          outline: "0px",
          color: "grey",
        }}
      />
      {taskList &&
        taskList?.map((task) => {
          return (
            <Task
              id={task.id}
              task={task}
              updateTaskComplete={updateTaskComplete}
              removeTask={removeTask}
            />
          );
        })}
    </div>
  );
};
