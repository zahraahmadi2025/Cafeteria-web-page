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
            el.textcontent=target;
        }
    };
    updatecount();
}

const observer = new IntersectionObserver(
    (entries)=>{
        console.log(entries);
        entries.forEach((entry)=>{
if(entry.isIntersecting){
    const el = entry.target;
    const target = +el.getAttribute("data-target");
    countup(el,target);
    observer.unobserve(el);
}
        });
    },
{
    threshold: 0.6,
}
);
counters.forEach((h1)=>observer.observe(h1));