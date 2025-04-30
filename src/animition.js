const counters =document.querySelectorAll(".mb-3");
function countup(el,target){
    let current =0;
    const increment = target /100;
    
    const updatecount=()=>{
        current+=increment;
        if(current<target){
            el.textcontent =Math.ceil(current);
            requestAnimationFrame(updatecount);
        }
        else{
            el.textCnpontent =target;
        }
    };
}