var app = new Vue({
    el:'#nameInputMethods',
    data:{
        firstName: ''
        ,lastName: ''
        ,fullName: ''
    },
    methods: {
        name () {
            this.fullName = this.firstName + ' ' + this.lastName
        }
    }
});

var app2 = new Vue ({
    el:'#nameInputComputed',
    data: {
        firstName2: ''
        ,lastName2: ''
    },
    computed: {
        makeFullName: function(){
            return this.firstName2 + ' ' + this.lastName2
        }
    }
});

var app3 = new Vue ({
    el: '#nameInputWatch',
    data: {
        firstName3: ''
        ,lastName3: ''
        ,fullName3: ''
    },
    watch: {
        firstName3: function (val) {
            this.fullName3 = val + ' ' + this.lastName3
        } ,
        lastName3: function (val) {
            this.fullName3 = this.firstName3 + ' ' + val
        }
    }
});

var app4 = new Vue ({
    el: '#nameInputWatchAPI',
    data: {
        firstName4: ''
        ,lastName4: ''
        ,fullName4: ''
    },
    created() {
        this.$watch(
            () => [this.firstName4, this.lastName4],
            (value,oldvalue) =>{
                this.fullName4 = this.firstName4 + '  ' + this.lastName4
            }
        )
    },
})