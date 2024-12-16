import './App.css';
import React from 'react'
import { UseStateDemo } from './hooks/useStateDemo';
import { UseEffectDemo } from './hooks/useEffectDemo';
import {UseContextDemo} from './hooks/useContextDemo';
import { UseRefDemo } from './hooks/useRefDemo';
import { UseReducerDemo } from './hooks/useReducerDemo';
import { UseCallbackDemo } from './hooks/useCallbackDemo';
import { UseMemoDemo } from './hooks/useMemoDemo';
import {UseLayoutEffectDemo} from "./hooks/useLayoutEffectDemo"
import "./App.css"
function App() {
  return (
    <div className='App'>
      <UseStateDemo/>
      <UseEffectDemo/>
      <UseContextDemo/>
      <UseRefDemo/>
      <UseReducerDemo/>
      <UseCallbackDemo/>
      <UseMemoDemo/>
      <UseLayoutEffectDemo/>
    </div>
  );
}

export default App;
