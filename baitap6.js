process.stdin.once('data', (input) => {
    var items = input.toString().trim().split(' ');
    var dd = parseFloat(items[0]);
    var mm = parseFloat(items[1]);
    var yyyy = parseFloat(items[2]);
    var d = new Date(yyyy,mm,dd);
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear();
    //d = (dd <= 31 ? '0' + dd:dd) +  '/' + (mm<= 12 ? '0' + mm:mm) + '/' + yyyy;  
    if(dd,mm <= 9 & dd <= 31 && mm <=12 ){
        d = '0' + dd + '/'+ '0' + mm + '/' + yyyy;  
        console.log(d);
    } else if(dd <= 31 && mm <= 12){
        d = dd + '/' + mm+ '/' + yyyy;
        console.log(d);
    }
    
    process.exit();
});