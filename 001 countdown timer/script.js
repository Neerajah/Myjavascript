const days=document.querySelector("#days");
// document.getElementById('hours')
// document.getElementsByClassName('newyear')
// document.querySelector('#hours');
// document.querySelectorAll('div');

const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
// const mseconds=document.querySelector("#mseconds");

const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`); 

function UpdateTime(){
  const currentDate=new Date();
  const diff=newYear-currentDate;
  const d=Math.floor(diff/1000/60/60/24);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
  const ms=Math.floor(diff%1000);

  days.innerHTML=d<10?"0"+d:d;
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;
  // mseconds.innerHTML=ms<10?"0"+ms:ms;
}
setInterval(UpdateTime,1000);
/* // primitive datatype (number, boolean, string, null, undefined), complex datatype (eg. object)
var xyx = 90;// try to avoid
let y; // undefined
let x = 5;
x = 5 * 5; //25
x = x + 1; //26
x = x - 6; //20

const z = 10;

z = 15; // throw error
let b = z - 5; */
