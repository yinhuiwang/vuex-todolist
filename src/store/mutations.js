import { TODO_ADD, TODO_DEL, IS_CHECKED_ALL_TODO, CLEAR_CHECKED_TODO } from './mutations-type'
export default {
    [TODO_ADD]: (state, todo) => {
        state.todos.unshift(todo);
    },
    [TODO_DEL]: (state, index) => {
        state.todos = state.todos.filter((value, i) => {
            return index !== i;
        })
    },
    [IS_CHECKED_ALL_TODO]: (state, is) => {
        state.todos.forEach((todo) => { todo.flag = is });
    },
    [CLEAR_CHECKED_TODO]: (state) => {
        state.todos = state.todos.filter((value) => {
            return !value.flag;
        }) 
    }
}