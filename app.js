// containerが膨らんだり縮んだりを取得.一致する最初の要素を返す。
const container = document.querySelector(".container")
const text = document.getElementById("text");

let totalTime = 7500;
let breatheTime = (totalTime/5)*2;
let holdtime = totalTime/5;

function meditateAnimation(){
        text.innerHTML ="inhale";
        // classを追加
        container.className = "container big";
    // breatheTime分の時間が経過したらsetTimeoutを実行する。
    setTimeout(() => {
        text.innerHTML = "Hold";

        setTimeout(() =>{
            text.innerHTML = "exhale";
            container.className = "container small";
        }, holdtime);
    }, breatheTime);
}
meditateAnimation();

setInterval(meditateAnimation,totalTime);