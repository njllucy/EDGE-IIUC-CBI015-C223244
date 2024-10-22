// const darkmode=document.getElementById("dark");
// let mainelem=document.getElementById("main");
// darkmode.addEventListener("click",()=>{
//     mainelem.classList.toggle("dark");
// })
let button=document.getElementById("btn");
let list=document.getElementById("list");
button.addEventListener("click",()=>{
    list.classList.toggle("hidden");
})