Vue.component('todo-item',{
    props: ['todos'],
    methods:{
        changeStatus(index) {
            app.changeStatus(index);
        },
        deleteTodo(index) {
            app.deleteTodo(index);
        }
    },
    template:'<li><p><input id="todos.id" type="checkbox" v-on:click="changeStatus(todos.id)" v-bind:disabled="todos.status"><input type="button" value="削除" @click="deleteTodo(todos.id)">{{ todos.name }}</p></li>'
})

app = new Vue({
    el:'#todo',
    props: ['todos'],
    data:{
        contents:'',
        items:[]
    },
    methods:{
        addContents() {
            this.items.push({id: this.items.length + 1, name: this.contents, status: false});
            this.contents = '';
        },
        changeStatus(index) {
            this.items[(index - 1)].name = this.items[(index- 1)].name + "(完了)";
            this.items[(index - 1)].status = true;
        },
        deleteTodo(index) {
            this.items.splice((index - 1), 1);
        }
    }    
})