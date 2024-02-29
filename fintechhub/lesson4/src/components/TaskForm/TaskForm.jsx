import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    margin: auto;
    padding: 30px;
    width: 400px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Input = styled.input`
    padding: 8px 16px;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 4px;
    outline: none;
`;

const Button = styled.button`
    padding: 8px 16px;
    width: 100%;
    border: 1px solid black;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
`;

function TaskForm({ addTask }) 
{
    const [task, setTask] = useState({title: "", type: "", date: new Date()});

    const handleChange = (event) => setTask({...task, [event.target.name] : event.target.value});

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(task);
        event.target.reset();
    }

	return (
        <Form onSubmit = {handleSubmit}>
            <Input onChange={handleChange} name="title" type="text" placeholder="Task Title"/>
            <Input onChange={handleChange} name="type" type="text" placeholder="Task Type"/>
            <Button>Add</Button>
        </Form>
    );
}

export default TaskForm;
