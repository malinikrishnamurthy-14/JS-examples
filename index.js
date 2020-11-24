//bubble sort

function bubbleSort(input1) {
    var input1 = [5, 4, 1, 3, 9, 7];
    var input2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   

    input1 = input2;
    var iLength = input1.length;
    var temp;

    for (var j = 0; j <iLength-1; j++){
        for (var i = 0; i < iLength -1 - j; i++) {
            if (input1[i] > input1[i + 1]) {
                temp = input1[i + 1];
                input1[i + 1] = input1[i];
                input1[i] = temp;
            }
        }
    }

    console.log(input1);
}