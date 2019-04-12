new Vue({
    el:'#app',
    data: {
      firstName: '',
      lastName: ''
    },
    computed: {
      fullName: function() {
        return this.firstName + ' ' + this.lastName
      }
    }
  })