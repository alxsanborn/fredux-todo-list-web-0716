function todosReducer (state=[], action){
    switch ( action.type ) {
      case 'Add_TODO':
        return [...state, action.payload];
      case 'DELETE':
        var newState = [...state]
        newState.splice(action.payload.id, 1)
        return newState
      default: return state;
    }
}

module.exports = todosReducer
//let action = {type: 'ADD_TODO, payload: {title:'Buy Milk'}'}
//somewhere else... this.props.store.dispatch()
