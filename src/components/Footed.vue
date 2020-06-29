<template>
    <div>
        <span >全选<input type="checkbox" v-model="isCheckedAll"/></span>
        <span >说明信息：{{successful}}/ {{allTodosCount}}</span>
        <button type="button" @click="clearCheckedTodo">清除已完成的任务</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['successful', 'allTodosCount']),
        isCheckedAll: {
            get(){
                return this.$store.getters.isCheckedAll
            },
            set(value){
                this.$store.dispatch('isCheckedAllTodo', value)
            }
        }
    },
    methods: {
        ...mapActions(['clearCheckedTodo'])
    }
}
</script>

<style scoped>

</style>