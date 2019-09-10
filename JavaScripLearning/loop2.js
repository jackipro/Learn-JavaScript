process.stdin.once('data' , (input) => {
        var num = input.toString();
        var text = "";
        for (var i = 1; i <= num; i++) {
            text = text + i+ " ";       
        }
        console.log(text);

        process.exit();
});