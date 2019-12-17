import React from 'react'
import Footer from './Footer'
import AddTodo from "../contaniners/AddTodo";
import VisibileTodoList from "../contaniners/VisibileTodoList";
const APP =()=>(
    <div>
        <AddTodo/>
        <VisibileTodoList/>
        <Footer/>
    </div>
);

export default APP
