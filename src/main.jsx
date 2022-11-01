import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEfect/SimpleForm'
import { FormWithCustomHook } from './02-useEfect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemorizeHook'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'

//import './08-useReduce/intro-reducer'

import './index.css'
import { TodoApp } from './08-useReduce/TodoApp'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp/>
    {/* </React.StrictMode> */}
  </BrowserRouter>
)