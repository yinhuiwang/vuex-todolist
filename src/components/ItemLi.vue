<template>
    <li @mousemove="showDelBtn(true)" @mouseout="showDelBtn(false)" :style="{'background-color': bgColor}">
        <input type="checkbox" v-model="todo.flag"/>
        <label>{{ todo.title }}</label>
        <button type="button" @click="todoDel(index)" v-show="isShow">删除</button>
    </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data(){
        return {
            bgColor: '#fff',
            isShow: false
        }
    },
    props: {
        todo: Object,
        index: Number
    },
    methods: {
        ...mapMutations(['todoDel']),
        showDelBtn(is){
            this.isShow = is;
            this.bgColor = is ? 'red' : '#fff';
        }
    }
}
</script>

<style scoped>

</style>