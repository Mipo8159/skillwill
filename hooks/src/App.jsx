import { useRef } from 'react';
import './App.css';
import useClickboard from './hooks/useClickboard';
import useLocalStorage from './hooks/useLocalStorage';
import usePageBottom from './hooks/usePageBottom';
import useDetectDevice from './hooks/useDetectDevice';

function App() {
  const inputRef = useRef()
  const [isOpen, toggle] = useLocalStorage('tab', true)
  const {copy, makeCopy} = useClickboard(6000)
  const device = useDetectDevice()

  
  return (
    <div>
      <button onClick={() => toggle((prevState) => !prevState)}>Toggle Visibility</button>
      {isOpen && <h1>Hello there</h1>}
    <br />
    <br />

      <div>
        <input ref={inputRef} type="text" />
        <button onClick={() => makeCopy(inputRef.current.value)}>Copy</button>
        {copy && <p>Copied to clickboard</p>}
      </div>

      {device && <h1>{device}</h1>}

      <div style={{height: '3000px'}}>helper div</div>
    </div>
  );
}

export default App;
