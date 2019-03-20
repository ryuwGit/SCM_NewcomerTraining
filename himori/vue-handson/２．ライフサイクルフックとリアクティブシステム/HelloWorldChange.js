
 var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  watch: {
    message (val, oldVal) {
      console.log(`message: ${val}, ${oldVal}`)
    }
  },
  mounted: function () {
    setTimeout(() => {
             this.message = 'こんにちは、世界！'
           }, 2000)
 } 

})