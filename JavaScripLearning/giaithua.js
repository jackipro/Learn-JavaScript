function giaiThua(n){
    var fact = 1;
        for(var i = 1; i <= n; i++){
             fact =  fact * i   ;                    
        }
        console.log(fact);  
        return i, n , fact;
    
}
process.stdin.once('data' , (input) => {
        var num = parseInt(input.toString());
        num = giaiThua(num);
        process.exit();
});