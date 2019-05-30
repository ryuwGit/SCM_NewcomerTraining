app = new Vue({
    el:'#todo'
    ,data:{
        contents:'',
        items:[]
    }
    ,methods: {
        addContents() {
            this.items.push({name:this.contents, status:false});
            this.contents = '';
        },
        changeStatus(index) {
            this.items[index].name = this.items[index].name + "(完了)";
            this.items[index].status = true;
                
        },
        deleteTodo(index) {
            this.items.splice(index, 1);
        }
    }
})