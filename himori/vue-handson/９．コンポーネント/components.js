Vue.component('todo-item', {
  template: `
    <label>
        <input type="checkbox" v-bind:value="done" v-on:change="lineOff"> 
        <del v-if="done">{{ text }}</del>
        <span v-else>{{ text }}</span>
        <button v-on:click="$emit('delete')">削除</button>
    </label>
    `,
 props: {
    text: {
      type: String
    },
    done: {
      type: Boolean,
      default: false
    }
  },
    model: {
      prop: 'done',
      event: 'change'
    },
    methods: {
        lineOff (e) {
        this.$emit('change', e.target.checked)
      },
    }
  
})
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