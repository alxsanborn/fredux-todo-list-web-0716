import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component {
  onAdd(event){

    if(event.keyCode == 13){

    let action = { type: 'Add_TODO', payload: event.target.value};
    this.props.store.dispatch(action)
    }
  }

  deleteTask(event){
    //var taskIndex = parseInt(event.target.id);
    let action = { type: 'DELETE', payload: event.target.id }
    this.props.store.dispatch(action)
  }


  render(){
    return (
      <div>

      <input type="text" onKeyDown={this.onAdd.bind(this)}/>
      {this.props.store.getState().map((task, index) => <li key={index}> {task}
      <button id={index} onClick={this.deleteTask.bind(this)}>X</button></li>
      )}
      </div>



    )
  }
}



module.exports = ToDo;
