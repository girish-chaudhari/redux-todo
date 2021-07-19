export const AddTodo =(data)=>{
    return {
        type: "ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const DeleteTodo =(id)=>{
    return {
        type: "Delete_TODO",
        id
    }
}
export const RemoveTodo =()=>{
    return {
        type: "REMOVE_ALL_TODO"
    }
}
