import React, { FC, useState } from "react";
import { Input, TodoItem, TodoList, TodoPageContainer } from "./TodoPage.style";
import DeleteButton from "../../ui/Buttons/DeleteButton";

interface ListItem {
  value: string;
  id: string;
}

const TodoPage: FC = () => {
  const [value, setValue] = useState<string>("");

  const localStorageList = window.localStorage.getItem("todo");
  const todoList = localStorageList ? JSON.parse(localStorageList) : [];
  const [list, setList] = useState<ListItem[]>(todoList);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value === "") return;
    const id = Date.now().toString();
    const newList = [...list, { value, id }];
    setList(newList);
    window.localStorage.setItem("todo", JSON.stringify(newList));
    setValue("");
  };

  const handleDelete = (id: string) => {
    const updatedList = list.filter((d) => d.id !== id);
    setList(updatedList);

    window.localStorage.setItem("todo", JSON.stringify(updatedList));
  };

  return (
    <TodoPageContainer>
      <form onSubmit={(value) => handleSubmit(value)}>
        <Input
          autoFocus={true}
          type="text"
          placeholder="Type here"
          name="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <TodoList>
        {list.map(({ id, value }) => (
          <TodoItem key={id}>
            {value}
            <DeleteButton onClick={() => handleDelete(id)} />
          </TodoItem>
        ))}
      </TodoList>
    </TodoPageContainer>
  );
};

export default TodoPage;
