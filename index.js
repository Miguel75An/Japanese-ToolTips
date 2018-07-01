import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './App1';
//import App from './App2';
//import App from './AllUpCase.'
//import FlavorForm from './Select'
//import Toggle from './Toggle'
//import App from './Search';
//import App from './Search1';
//import BottleCounterDisplay from './EverySecond';
//import ToDoList from './ToDoList';
import Language from './Language'
// import DropDownLists from './DropDownLists'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FlavorForm />, document.getElementById('root'));
//ReactDOM.render(<Toggle />, document.getElementById('root'));
//ReactDOM.render(<BottleCounterDisplay />, document.getElementById('root'));
//ReactDOM.render(<ToDoList />, document.getElementById('root'));
// ReactDOM.render(<DropDownLists />, document.getElementById('root'));
ReactDOM.render(<Language />, document.getElementById('root'));

registerServiceWorker();
