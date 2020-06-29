<template>
    <div>
        <ul>
            <ItemLi  v-for="(value, index) in todos" :key="todosKeys[index]" :todo="value" :index="index" />
        </ul>    
    </div>
</template>

<script>
import ItemLi from './ItemLi'
import { mapGetters } from 'vuex'
import shortId from 'shortid'

export default {
    components: {
        ItemLi
    },
    computed: {
        ...mapGetters(['todos'])
    },
    data() {
        return {
            todosKeys: []  
        }
    },
    mounted() {
        this.todosKeys = this.todos.map( () => {
            return shortId.generate();
        } )
    }
}
</script>

<style scoped>

</style>