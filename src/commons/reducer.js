import { ADD,DELETE } from "./actions";

const init = {
    todos:[],
}

export const reducer = (state = init, action)=>{
    if(action.type === ADD){
        return {
            todos: [...state.todos, action.todo],
        };
        
    }else if(action.type === DELETE){
            return {
                todos: [...state.todos.filter((perv)=> perv.id!== action.id)],
            };
        }else{
            return state
        }
}