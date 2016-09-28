import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './components/to_do.js';
import {createStore} from './store';
import todosReducer from './reducers/todos_reducer';

const store = createStore(todosReducer)

function render(){
ReactDOM.render(

  <ToDo store={store} />,


  document.getElementById('container')
)
}

render();
store.subscribe(render);
