app = new Vue({
    el:'#showCondition'
    ,data:{
        message:'Hello World'
        ,checked:''
        ,showCheck:''  
    }
    ,created () {
        checked = false
    }
    ,computed: {
        changeCondition: function() {
            this.showCheck = this.checked
        }
    }
});

app2 = new Vue({
    el:'#vshowType'
    ,data:{
        message:'Hello World2'
        ,checked2:''
        ,showCheck2:''  
    }
    ,created () {
        checked2 = false
    }
    ,computed: {
        changeCondition: function() {
            this.showCheck2 = this.checked2
        }
    }
})