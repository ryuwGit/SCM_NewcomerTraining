var app = new Vue({
    el:'#app',
    data:{
        message: 'Hello World'
    }
});

var app2 = new Vue({
    el:'#app-2',
    data:{
        message: 'thanksmamamamamamam'
    }
});

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
});

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'りんご'},
            {text:'ばなな'},
            {text:'なし'}
        ]
    }
});

var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'こんにちは'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'Hello Hello'
    }
});

Vue.component('todo-items',{
    props: ['todo'],
    template:'<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList :[
            {id:0,text:'リンゴ'},
            {id:1,text:'なし'},
            {id:2,text:'ブドウ'}
        ]
    }
});

var app8 = new Vue({
    el:'#app-8',
    data:{
        message:'Hello World!'
    },
    mounted () {
        this.changeMessage = _.debounce(function(){
            message:'changed'
        },2000) 
    }
})
