import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button ,FormControl,InputLabel,Input, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
function LiveStation() {
  
  const [todos,setTodos] = useState([]); 
  const [input,setInput] = useState("");
  const [data1,setData]  = useState([])

  const addTodo = (event) =>{

      event.preventDefault(); //will stop refresh
      setData([...data1,input]);
      console.log("input",data1)
      const url=`https://indianrailapi.com/api/v2/LiveStation/apikey/089b399c02622174626b2b7064f21e7a/StationCode/${input}/hours/4/`;
      console.log("url",url)
      const data=axios.get(url,{ crossdomain: true }).then(response=>response.data);
      console.log('i m working')
      setTodos([data])
      console.log(todos)
      console.log("data",data)
      setInput('')// clearing inputs
  }

  return (
    <div className="App">
      <h1> Hello World </h1>
      <form>
      		<FormControl>
				  <InputLabel htmlFor="my-input">Station Code</InputLabel>
				  <Input value={input} onChange={event => setInput(event.target.value)} />
			</FormControl>
          <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
              Add To-Do
          </Button>
      </form>

    {/*
        multiline comment reactjs -> html
        <!--//input field-->
      // <input value={input} onChange={event => setInput(event.target.value)}/> 
     // <button onClick={addTodo}> Add Todo </button> -->
    */}
      { <ul> 
        {todos.map(todo => (
        
          <List className='todo_list'>
            <ListItem>
              <ListItemAvatar>
              </ListItemAvatar>
              {todo}
              <ListItemText primary={todo.PromiseValue} secondary='test data'/>
            </ListItem>
            
          </List>

          ))}
      </ul> }

    </div>
  );
}
export default LiveStation;
