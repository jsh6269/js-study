/*
function outerFunc(){
    let varA;
    function innerFunc(){
        // manipulate varA;
    }
}
outerFunc가 종류되어도 varA가 사라지지 않음.
*/

function createCounter(){
    let cnt = 0;
    function addCount(){
        cnt++;
        console.log("cnt: " + cnt);
    }
    return addCount;
}

let counter = createCounter();
for(let i=0; i<5; i++){
    counter();
}
