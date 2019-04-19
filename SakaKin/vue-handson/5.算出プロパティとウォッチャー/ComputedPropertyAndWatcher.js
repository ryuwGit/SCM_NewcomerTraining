new Vue({
    el:'#app',
    data: {
      firstName: '',
      lastName: ''
    },
    // methods: {
    //   fullName: function() {
    //     return this.firstName + ' ' + this.lastName
    //   }
    // },
    // computed: {
    //   fullName: function() {
    //     return this.firstName + ' ' + this.lastName
    //   }
    // },
    watch: {
      firstName: function(val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function(val) {
        this.fullName = val + ' ' + this.firstName
      }
    }
  })
