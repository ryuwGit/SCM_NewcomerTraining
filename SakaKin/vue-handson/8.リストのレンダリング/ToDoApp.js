new Vue({
    el:'#app'
    ,data: {
        task : ''
        ,ToDos : []
    }
    ,methods : {
        AddToDo () {
            this.ToDos.push({name : this.task
                            ,done : false})
            this.task = ''
        }
        ,DeleteTask (i) {
            this.ToDos.splice(i, 1)
        }

    }
  })