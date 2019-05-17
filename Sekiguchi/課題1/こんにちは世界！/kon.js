var app = new Vue({
    el: '#kon',
    data:{
        message: 'Hello World'
    },
    mounted: function(){
        setTimeout('changeMessage()', 2000);
    },
    watch: {
        message: function(){
            console.log(message)
        }
    }
});

function changeMessage (){
    app.message = 'こんにちは　世界!'
};