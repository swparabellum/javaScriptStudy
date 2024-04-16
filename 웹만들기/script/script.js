function clickBtn(getColor){
    if(getColor =='yellow'){
        document.body.style.backgroundColor = "yellow";
    }else if(getColor == 'white'){
        document.body.style.backgroundColor = "white";
    }
}
var cnt =0;
function counter(){
    cnt++;
    if(cnt == 3){
alert("3번 누르셨습니다!");
cnt =0;
    }
}
function counter2(type){
    const myCounter = document.getElementById('getCount');
    let number = myCounter.innerText;

    if(type == 'plus'){
        number = parseInt(number) +1;
    }
    myCounter.innerText=number;
}