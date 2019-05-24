app = new Vue({
    el:'#todo'
    ,data:{
        contents:'',
        items:[],
        firstflg:true
    }
    ,methods: {
        addContents() {
            this.items.push({name:this.contents, status:false});
            this.contents = '';
        },
        changeStatus(index) {
            alert(index + '  ' + this.items[index].name);
            this.items[index].status = true;

        }
    }
})