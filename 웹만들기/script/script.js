function clickBtn(){
        document.body.style.backgroundColor = "yellow";
}
var cnt =0;
function counter(){
    cnt++;
    if(cnt == 3){
alert("3번 누르셨습니다!");
cnt =0;
    }
}