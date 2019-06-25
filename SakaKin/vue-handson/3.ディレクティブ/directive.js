new Vue({
    el:'#app',
    data: {
      msg : 'Hello Vue!!'
    },
    methods: {
      giveValToMsg: function(event) {
        // このthisないと動かない、無いと新しく生まれたと思われちゃう？
        this.msg = event.target.value
      }
    }
  })