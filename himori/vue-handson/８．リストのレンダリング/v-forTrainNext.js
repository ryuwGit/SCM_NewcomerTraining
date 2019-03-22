const vm = new Vue({
    el: '#app',
    data: {
      newTask: '',
      todoList: []
    },
    methods: {
      add () {
        if (!this.newTask) { return }
        this.todoList.push({
          name: this.newTask, 
          done: false
        })
        this.newTask = ''
      },
      deleteTask (i) {
        this.todoList.splice(i, 1)
      }
    }
  })