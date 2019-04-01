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
    /* メモ：公式docによると'mounted : 処理'と書かれていたからその通り書いたが動かず
    答えを見るとこの書き方で、実装したら動いた。
    これに関しては、謎 */
    mounted(){
        /* メモ：vueではmountedの処理内にアロー関数はだめと書かれていたので
        最初普通にfunction()で書いていたが動かず。調べてみると、settimeoutの内部の関数は呼び出し元が
        グローバルオブジェクトとなるらしく(Qiita調べなので信ぴょう性？？)「どのmessageや！？」となっていたらしい
        今回のアロー関数はmountedの中というよりsettimeout内の処理と扱われていたと考えると、
        アロー関数ではthisを親スコープから探した結果のmessageで固定できるのでうまくいき、
        function()だと実行時の呼び出し元であるグローバルを見るからダメでした、と納得 */
        setTimeout(() => {
                this.message = 'こんにちは　世界'
            },2000)
    }
})

// これでも普通に動いた、watchは
// vm.$watch('message', function(newVal, oldVal){
//     console.log(`メッセージ:${newVal},${oldVal}`);
// })