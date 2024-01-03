
var ech5 = document.querySelector("h6");
var freind = document.querySelector("#add");
var tick = 0

freind.addEventListener("click",function(){
if (tick==0){
ech5.innerHTML = 'Friends🙂'
ech5.style.color= 'green'
freind.innerHTML='Remove'
freind.style.background='red'
tick =1}
else{
    ech5.innerHTML='Strangers😒';
    ech5.style.color='red'
    freind.innerHTML= 'Add Friend';
    freind.style.background=' cadetblue'

    tick = 0
}
})



