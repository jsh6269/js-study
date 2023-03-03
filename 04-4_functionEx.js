
function startHello(interTime){
    let cnt = 0;    
    setInterval(function(){
        cnt++;
        console.log(cnt + ": Hello");
    }, interTime);
}
startHello(1000);
