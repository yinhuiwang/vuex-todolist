import { TODO_ADD, IS_CHECKED_ALL_TODO, CLEAR_CHECKED_TODO } from './mutations-type'
export default {
    todoAdd: ({commit}, todo) => {
        commit(TODO_ADD, todo);
    },
    isCheckedAllTodo: ({ commit }, is) => {
        commit(IS_CHECKED_ALL_TODO, is);
    },
    clearCheckedTodo: ({ commit }) => {
        commit(CLEAR_CHECKED_TODO);
    }
}