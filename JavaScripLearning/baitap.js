process.stdin.once('data', (input) => {
     var items = input.toString().trim().split(' ');
     var a = parseInt(items[0]);
     var b = parseInt(items[1]);
     console.log(a + b);
     process.exit();
});