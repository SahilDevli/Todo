import "../styles/TodoCard.css";
import { FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleLike, toggleComplete } from "../features/todo/todoSlice";

export default function TodoCard({
    id,
    title,
    completed,
    liked,
    updatedAt,
    onLike,
    onComplete,
}) {

    const dispatch = useDispatch();

    const handleLike = (id)=>{
        dispatch(toggleLike(id));

    };
    const handleComplete = (id)=>{
        dispatch(toggleComplete(id));
    }

    return (
        <section className="todoCard">

            <div className="info">

                <h3>{title}</h3>

                <p className="date">
                    Updated : {updatedAt}
                </p>

            </div>

            <div className="fun">

                <button
                    className={`toggle ${completed ? "active" : ""}`}
                    onClick={ ()=> handleComplete(id)}
                >
                    <span className="slider"></span>

                    <span className="status">
                        {completed ? "Completed" : "Incomplete"}
                    </span>

                </button>

                <button
                    className={`like ${liked ? "active" : ""}`}
                    onClick={()=> handleLike(id)}
                >
                    <FiHeart />
                </button>

            </div>

        </section>
    );
}