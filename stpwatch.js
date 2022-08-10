// document.querySelector("#start").disabled = true;
document.querySelector("#split").disabled = true;
document.querySelector("#reset").disabled = true;
startButton();

var splitbtn = document.getElementById("split");
var resetbtn = document.getElementById("reset");

var timer = false;
function split(){
    var hour1;
    var min1;
    var sec1;
    var mili1;
    if(hours < 10){
        hour1 = "0" +hours;
    }else{
        hour1=hours;
    }

    if(minutes < 10){
        min1 = "0" + minutes;
    }else{
        min1=minutes;
    }
    if(seconds < 10){
        sec1 = "0" + seconds;

    }else{
        sec1=seconds;
    }
    if(miliseconds < 10){
        mili1 =  "0" +miliseconds;
    }else{
        mili1=miliseconds;
    }
    var a =document.createTextNode(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0${hour1}:${min1}:${sec1}:${mili1}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Split`);  
    var li = document.createElement("li");
    li.appendChild(a);
    li.className = "a";
    document.querySelector("#list").appendChild(li);
    document.querySelector("#text").innerHTML =`<p>${hour1}:${min1}:${sec1}:${mili1}</p>`;

}
function startButton(){
    document.querySelector("#start").addEventListener("click",start);
}
function start(){
    document.querySelector("#start").style.backgroundColor = "#fb657f";
    document.querySelector("#start").innerText = "Pause";
    timer = true;
    stopwatch();
    document.querySelector("#split").disabled = false;
    splitbtn.classList.add("split");
    document.querySelector("#start").addEventListener("click",pause);
}
function pause(){
    document.querySelector("#split").disabled = true;
    document.querySelector("#reset").disabled = false;
    splitbtn.classList.remove("split");
    document.querySelector("#start").style.backgroundColor = "#18a69d";
    resetbtn.classList.add("reset");
    timer = false;
    document.querySelector("#start").innerText = "Start";
    remove();
    var hour1;
    var min1;
    var sec1;
    var mili1;
    if(hours < 10){
        hour1 = "0" +hours;
    }else{
        hour1=hours;
    }

    if(minutes < 10){
        min1 = "0" + minutes;
    }else{
        min1=minutes;
    }
    if(seconds < 10){
        sec1 = "0" + seconds;

    }else{
        sec1=seconds;
    }
    if(miliseconds < 10){
        mili1 =  "0" +miliseconds;
    }else{
        mili1=miliseconds;
    }
    var a =document.createTextNode(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0${hour1}:${min1}:${sec1}:${mili1}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Pause`);  
    var li = document.createElement("li");
    li.appendChild(a);
    li.className = "b";
    document.querySelector("#list").appendChild(li); 
}
function remove(){
    document.querySelector("#start").removeEventListener("click",pause);
    startButton();
}


function reset() {

    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    document.getElementById("hours").innerHTML = '00';
    document.getElementById("minutes").innerHTML = '00';
    document.getElementById("seconds").innerHTML = '00';
    document.getElementById("miliseconds").innerHTML = '00';
    document.querySelector("#list").innerText = "";
    document.querySelector("#text").innerHTML ="<p>00:00:00:00</p>";
    
}






var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var nano = 0;
var mili = 0;
var sec = 0;


function stopwatch() {
    if (timer == true) {
        // nano = nano + 1;
        miliseconds = miliseconds + 1;
        // if(nano >100){
        //  nano = nano.slice(0,1);
        // }
        // if (nano == 1000) {  
        //      nano=0;
        // }
        if (miliseconds == 100) {
            seconds = seconds+1;
            miliseconds=0;

        }
        if(seconds == 60){
            minutes = minutes+1;
            seconds = 0;

        }

        if(minutes == 60){
            hours = hours + 1;
            minutes = 0; 
            seconds = 0;  
        }
        var hrString = hours;
        var minString = minutes;
        var secString = seconds;
        var milisecString = miliseconds;

        if(hours < 10){
            hrString = "0" + hrString;

        }

        if(minutes < 10){
            minString = "0" + minString;

        }

        if(seconds < 10){
            secString = "0" + secString;

        }

        if(miliseconds < 10){
            milisecString =  "0" +milisecString;

        }
        document.querySelector("#hours").innerText = hrString;
        document.querySelector("#minutes").innerText = minString;
        document.querySelector("#seconds").innerText = secString;
        document.querySelector("#miliseconds").innerText = milisecString;
        // document.querySelector("#nano").innerText = nano;
        setTimeout("stopwatch()",10);  
    }
}
