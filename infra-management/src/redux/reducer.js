import { ADD_TASK } from "./action";

const initialData = {
  tasksItems: []
}

const taskReducer = (state = initialData, action) => { 
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskItems: [...state.tasksItems, { text: action.payload, completed: false }]
      }
    default:
      return state;  
  }
}

export default taskReducer;