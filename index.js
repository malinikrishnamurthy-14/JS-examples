function bingo(input) {
    if(!input){
        return;
    }
    var result = [];
    calcdigits(input, result);
    var value = "";
    if(result.length === 9){
        console.log(0);
    }else{
        for (var j = 1; j < 50; j++){
            if(result.length === 9){
                break;
            }
            value = input * j;
            calcdigits(value, result);
        }
        console.log(j);
    }
    console.log(result);
}

function calcdigits(input, result) {
    input = input.toString();
    for (var i = 0; i < input.length; i++) {
        if(input[i] === "0"){
            continue;
        }
        if(result.indexOf(input[i]) === -1){
            result.push(input[i]);
        }
    }
}
