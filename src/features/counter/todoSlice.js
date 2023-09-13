import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos :['Apple','Mango','Banana']
}

export const todoSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{
        addtodo :(state,action)=>{
            state.todos.push(action.payload)
        },
        deletetodo :(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})

export const {addtodo, deletetodo}=todoSlice.actions

export default todoSlice.reducer