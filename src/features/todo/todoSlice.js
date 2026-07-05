import { createSlice } from "@reduxjs/toolkit";

// store that store data in form of: "ARRAY OF OBJECTS"
const initialState = {
    todos: [],
    search: ""
};

// Todo slice -> contain reducers or slice that use to manipulate data in store.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // Reducers
    reducers: {
        // Set Todo Reducer
        setTodos: (state, action) => {
            state.todos = action.payload.map(todo => ({
                id: todo.id,
                title: todo.title,
                completed: todo.completed,
                liked: todo.liked ?? false,
                updatedAt: todo.updatedAt ?? Date()
            }));
        
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(
                t => t.id === action.payload
            );
            if(todo){
                todo.completed = !todo.completed;
                todo.updatedAt = new Date().toLocaleString();
            }
        },
        toggleLike: (state, action) => {
            const todo = state.todos.find(
                t => t.id === action.payload
            );
            if(todo){
                todo.liked = !todo.liked;
                todo.updatedAt = new Date().toLocaleString();
            }
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    }
});

export const { setTodos, toggleComplete, toggleLike, setSearch} = todoSlice.actions;
export default todoSlice.reducer;