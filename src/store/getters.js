export default {
    todos: state => {
        return state.todos
    },
    isCheckedAll: (state, getters) => {
        return getters.successful === state.todos.length && state.todos.length > 0;
    },
    allTodosCount: state => {
        return state.todos.length;
    },
    successful: state => {
        return state.todos.filter(function (value) {
            return value.flag
        }).length;
    }
}