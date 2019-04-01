const vm = new Vue({
    el : '#app',
    data : {
        message : 'Hello World'
    },
    watch : {
        message : function(newVal, oldVal){
                console.log(`メッセージ:${newVal},${oldVal}`);
            }
    },
    mounted(){
        setTimeout(() => {
                this.message = 'こんにちは　世界'
            },2000)
    }
})

// vm.$watch('message', function(newVal, oldVal){
//     console.log(this.message);
// })