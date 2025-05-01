import './App.css';
import {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(1)
  const messages = ["I think, therefore I am","I have a dream","The only thing we have to fear, is fear itself"]
  const [isopen, setIsopen] = useState(false)
  const readmore = function(){
    setIsopen(!isopen)
  }
  return (
    <>
      <h1 className='title'>Slice App by Eldon Wu</h1>
      <section className='slicewrapper'>
        <div className='numberWrapper'>
          <div className={counter==1? "active":""}><p>1</p></div>
          <div className={counter==2? "active":""}><p>2</p></div>
          <div className={counter==3? "active":""}><p>3</p></div>
        </div>
        <p className='msg'>Message {counter}: <em>{messages[counter-1]}</em></p>
        <div className='btngroup'>
          <button onClick={function(){if(counter>1){setCounter(counter-1)}}}>Prev</button>
          <button onClick={function(){if(counter<messages.length){setCounter(counter+1)}}}>Next</button>
        </div>
      </section>

      <h1 className='title'>Open and Close Buttons</h1>
      <div className='info'>
        <p><b>Cats</b>, is a musical.</p>
        <button className='readmore_btn' onClick={readmore}>{isopen?"Hide":"Learn More"}</button>
      </div>
      <section className='hiddentext'>
        {isopen &&
          (
            <p>Why?</p>
          )
        }
      </section>
    </>
  );
}

export default App;
