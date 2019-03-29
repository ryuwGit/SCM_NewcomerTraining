new Vue({
    el: '#app',
    data: {
      newTask: '',
      todoList: []
    },
    methods: {
      add () {
        if (!this.newTask) { return }
        this.todoList.push(this.newTask)
        this.newTask = ''
      },
      deleteTask (index) {
        this.todoList.splice(index, 1)
      }
    }
  })