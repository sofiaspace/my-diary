import React, { FC, useState } from "react";
import { TodoItem, TodoList, TodoPageContainer } from "./TodoPage.style";

const TodoPage: FC = () => {
  const [value, setValue] = useState<string>("");

  const localStorageList = window.localStorage.getItem("todo");
  const todoList = localStorageList ? JSON.parse(localStorageList) : [];
  const [list, setList] = useState<Array<string> | []>(todoList);

  const src = "circle-with-cross.svg";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value === "") return;
    const newItem = [...list, value];
    setList(newItem);
    window.localStorage.setItem("todo", JSON.stringify(newItem));
    setValue("");
  };

  const handleDelete = (item: string) => {
    const updatedList = list.filter((d) => d !== item);
    setList(updatedList);

    window.localStorage.setItem("todo", JSON.stringify(updatedList));
  };

  return (
    <TodoPageContainer>
      <form onSubmit={(value) => handleSubmit(value)}>
        <input
          type="text"
          placeholder="Type here:"
          name="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <TodoList>
        {list.map((item) => (
          <TodoItem key={item}>
            {item}
            <img
              src={src}
              alt="delete icon"
              onClick={() => handleDelete(item)}
            />
          </TodoItem>
        ))}
      </TodoList>
    </TodoPageContainer>
  );
};

export default TodoPage;
