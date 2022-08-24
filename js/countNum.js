
const time = 1000;

function countNum(num, elem, step){
    let l = document.querySelector('#' + elem);
    let  n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() =>{
        n = n + step;
        if (n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;
    },t)
}

countNum(200, 'students-all', 5);
countNum(190, 'students-done', 5);
countNum(400000, 'students-earned', 5000);
countNum(1000000, 'main-1__million', 10000);