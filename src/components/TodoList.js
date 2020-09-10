import React from "react";
import Todo from "./Todo";
import {List} from "@material-ui/core";

function TodoList({todos,removeTodo, toggleComplete}) {
    console.log(todos)
    return(
        <List>
            {
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}

                    />
                ))}
        </List>
    );

}

export default TodoList;