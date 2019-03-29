const vm = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: ''
  },
  computed: {
    fullName () {
      return this.firstName+ ' ' + this.lastName
    }
  }
})