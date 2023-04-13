

function clipeffect(){
    
document.querySelectorAll(".slides").forEach(function(slide){
    slide.addEventListener("mousemove",function(dets){
       
        var dim = slide.getBoundingClientRect();
         this.children[1].style.clipPath = `circle(20% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
    })
    slide.addEventListener("mouseleave",function(dets){
       
        var dim = slide.getBoundingClientRect();
         this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
    })
})
}




function skeweffect(){

    var dimen = document.querySelector(".slides").getBoundingClientRect();
    var prev = dimen.left;
    document.querySelector("#block").addEventListener("scroll",function(){
        var dimen2 = document.querySelector(".slides").getBoundingClientRect();
        var diff = prev - dimen2.left;
        prev = dimen2.left;
        document.querySelectorAll(".slides").forEach(function(slide){
           
           slide.style.transform =  `skew(${diff*0.1}deg)`;
        })
    })
    
    
}



skeweffect();



















clipeffect();