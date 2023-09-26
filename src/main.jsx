import React from 'react';
import ReactDOM from 'react-dom/client';
 
import './index.css';
import { HooksApp } from './HooksApp';
  
import {CounterWithCustomHook } from "./CounterWithCustomHook"
import {SimpleForm} from "./02-useEfect/SimpleForm"
import {FormWithCustomHook} from "./02-useEfect/FormWithCustomHook"

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FormWithCustomHook />
    
 // </React.StrictMode>,
)
