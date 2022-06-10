function convertSelection(source, valueNum){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let distInput1 = document.getElementById("measureValue1");
    let distInput2 = document.getElementById("measureValue2");
    valueNum = parseFloat(value);
    let convertScale = 1;
    let mi;
    let ft;
    let m;
    let km;

    if (source=='input1'){
        input2.value = (valueNum/convertScale).toFixed(2)

    }
    if (source=='input2'){
        input1.value = (valueNum/convertScale).toFixed(2)
    }

}