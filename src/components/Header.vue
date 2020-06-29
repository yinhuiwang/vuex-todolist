<template>
    <div>
        <input v-model="value" @keydown.enter="todoAdd(value)"/>
    </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
    data(){
        return {
            value: ''
        }
    },
    methods: {
        todoAdd(){
            // 添加内容
            this.$store.dispatch('todoAdd', {'title': this.value, 'flag': false})
            // 清空输入框
            this.value = '';
        }
    }
}
</script>

<style scoped>

</style>