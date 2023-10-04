export const ADD = "Add_todo";
export const DELETE = "Delete_todo";

let id=1;

export const add_todo = (todo) => {
    return {
        type : ADD,
        todo :{
            id:id++,
            title:todo.title,
            isComplete : todo.isComplete,
        },
    };
};

export const delete_todo = (id) => {
    return {
        type :DELETE,
        id,
    };
};