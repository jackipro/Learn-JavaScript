process.stdin.once('data' , (input) => {
    var Second = input.toString();
    function secondtoHms(i){
    var hours = Math.floor(i / 3600);
    var minutes = Math.floor(i % 3600 / 60);
    var seconds = Math.floor(i % 3600 % 60);
        return ('0' + hours).slice(-2)  + ':' + ('0' + minutes ).slice(-2) + ':' + ('0' + seconds ).slice(-2);
    }
    Second = secondtoHms(Second);    
    console.log(Second);
    process.exit();
})