import './App.css';
import React, {useState} from 'react';

function App() {
  const[count, setCount] = useState(0)
  const[name, setName] = useState("")
  const [inputs, setInputs] = useState({})
  const submitform = function(event){
    event.preventDefault()
    alert(`Welcome to React State ${inputs.username}. Your lucky number is ${inputs.luckynumber} \nComments = $[textcomment]`)
  }
  const handle_changes = function(event){
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]:value}))
  }
  const[textcomment, setTextcomment] = useState("")
  const submitted_comments = function(event){
    setTextcomment(event.target.value)
  }
  return (
    <>
      <h1>Lab 14, React state</h1>
      <p>Count = {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment Button</button>
      <button onClick={()=>setCount(0)}>Reset Button</button>

      <h1>Form Application</h1>
      <form onSubmit={submitform}>
        <fieldset>
          <legend>Forms in ReactJS</legend>
          <section>
            <label for="username">Enter Name: </label>
            <input 
              type='text' 
              id='username'
              value={inputs.username}
              onChange={handle_changes}
            />
          </section>
          <section>
            <label for="luckynumber">Enter a lucky number: </label>
            <input 
              type='number' 
              id='luckynumber'
              value={inputs.luckynumber}
              onChange={handle_changes}
            />
          </section>
          <section>
            <label for="comments">Any Suggestions?</label>
            <textarea
              id='comments'
              value={submitted_comments}
              onChange={submitted_comments}
            />
          </section>
          <input type='submit'/>
        </fieldset>
      </form>
      <p>Name = {inputs.username}</p>
      <p>Lucky Number = {inputs.luckynumber}</p>
    </>
  );
}

export default App;
