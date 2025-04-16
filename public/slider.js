const slider = document.getElementById("slider-change");
const bLeft =document.getElementById("B-left");
const bRight =document.getElementById("B-right");
const div1 =document.getElementById("div1");
const div2 =document.getElementById("div2");
const div3 =document.getElementById("div3");
const links =[
    "../public/images/ph2.jpg",
    "../public/images/ph1.jpg",
    "../public/images/ph3.jpg",
];
let index =0;

bRight.addEventListener("click",()=>{
    slider.style.backgroundImage =`url(${links[index]})`;
    index =(index +1) % links.length;
});

bLeft.addEventListener("click",()=>{
    slider.style.backgroundImage =`url(${links[index]})`;
    index =(index +1) % links.length;
});




setInterval(()=>{
slider.style.backgroundImage =`url(${links[index]})`;
index =(index +1) % links.length;

},3000);