import { useEffect } from "react";
import { useDispatch } from "react-redux";

import api from "./api/axios";
import useApi from "./hooks/useApi";

import { setTodos } from "./features/todo/todoSlice";

import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";

function App() {

  const dispatch = useDispatch();

  const { loading, error, request } = useApi();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await request(() =>
          api.get()
      );
      if (response) {
          dispatch(setTodos(response.data));
      }
    };
    fetchTodos();
  }, [dispatch, request]);

  if (loading) return <h2>Loading...</h2>;
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <Navigation />
      <TodoList />
    </>
  );
}

export default App;