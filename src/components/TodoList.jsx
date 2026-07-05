import { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import "../styles/Todocard.css";

export default function TodoList() {

    const { todos, search } = useSelector(
        state => state.todo
    );

    const filteredTodos = useMemo(() => {
        return todos.filter(todo =>
            (todo.title ?? "")
                .toLowerCase()
                .includes((search ?? "").toLowerCase())
        );
    }, [todos, search]);

    return (
        <div className="todoList">
            {filteredTodos.map(todo => (
                <TodoCard
                    key={todo.id}
                    {...todo}
                />
            ))}
        </div>
    );
}