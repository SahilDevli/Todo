import "../styles/Navigation.css";
import { useEffect, useState, useMemo  } from "react";
import { FiMoon, FiSun, FiHeart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../features/todo/todoSlice";

export default function Navigation() {
    const dispatch = useDispatch();

    // const {like} = useContext(TodoContext);
    const todos = useSelector(state => state.todo.todos);
    const likeCount = todos.filter(todo => todo.liked).length;
    
    // Dark theme by default
    const [darkTheme, setDarkTheme] = useState(true);
    useEffect(() => {
        document.body.classList.toggle("dark", darkTheme);
    }, [darkTheme]);
    const toggleTheme = () => {
        setDarkTheme((prev) => !prev);
    };



    return (
        <nav>
            <h2>ToDo</h2>

            <section>
                <input
                    type="search"
                    className="search-comp"
                    placeholder="Search"
                    onChange={(e) =>
                        dispatch(setSearch(e.target.value))
                    }
                />

                <div className="features">
                    <div className="liked">
                        <FiHeart />
                        <span>{likeCount}</span>
                    </div>

                    <button
                        className="theme"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {darkTheme ? <FiSun /> : <FiMoon />}
                    </button>
                </div>
            </section>
        </nav>
    );
}