function init() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();
// prompt("English or Spanish");

var crsr = document.querySelector("#cursor");
var main = document.querySelector(".main")
document.addEventListener("mousemove" ,function(dets) {
    crsr.style.left = dets.x+ 20 +"px";
    crsr.style.top = dets.y + 20 + "px";
})


gsap.from(".page1 h1" , {
    opacity:0,
    rotation:5,
    y:50,
    duration:1,
})
gsap.from(".page1 h2" , {
    opacity:0,
    y:50,
    rotation:5,
    delay:0,
    duration:1,
})
var tl =gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start :"top 27%",
        end: "top 0",
        scrub: 3,
    }
})

tl.to(".page1 h1" , {
    x: -130,
    duration: 1,
    
} ,"anim")

tl.to(".page1 h2" , {
    x: 130,
    
    duration: 1,
    
} ,"anim")


tl.to(".page1 video" , {
    width: "90%",
    

} , "anim")

var tl2 =gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start :"top -100%",
        end: "top 150%",
        scrub: 3,
    }
})
tl2.to(".main" , {
    backgroundColor:"#C5CAD5",
    duration:2,
})
// tl2.from(".page2-bg video" , {
//     opacity:0,
   
//     duration:1,
// })
tl2.from(".page2 h1" , {
    y:-60,
    duration:2,
    opacity:0,
})
// tl2.to(".page2 h1", {

//     borderBottom:"2px solid #00000079",
//     delay:2,
// })
tl2.from(".page2-left " , {
    x:60,
    opacity:0,
    duration:1.5,
    ease:"ease.out"

})
tl2.from(".page2-right" , {
    x:-60,
    opacity:0,
    stagger:2,  
})
gsap.from(".page3 h1" , {
    y:-100,
    opacity:0,
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start :"top -200%",
        end: "top 130%",
        scrub: 3,
    }
})

var tl3 =gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start :"top -320%",
        end: "top -340%",
        scrub: 3,
    }
})
tl3.to(".main" , {
    backgroundColor:"#0f0d0d",
})



let aboutbtn = document.querySelector(".page2-right button")
aboutbtn.addEventListener("click" , ()=>{
    window.location.assign("https://en.wikipedia.org/wiki/Duo");
})
var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})
var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem) {
    elem.addEventListener("mouseenter" , ()=>{
        purple.style.opacity="1";
        purple.style.display="block";
        gsap.from(".jcb img" , {
            
            x:100,
            opacity:0,
            duration:0.7,
            
        })
    })
    elem.addEventListener("mouseleave" , ()=>{
        purple.style.opacity="0";
        purple.style.display="none";
        gsap.to(".jcb img" , {
                       
        })
    })
})
let tween = gsap.to(".marquee_part" , {
    xPercent: -100,
    repeat: -1,
    duration: 1,
    ease: "linear",

}).totalProgress(0 , 5);
gsap.set(".marquee_inner" , { xPercent: -50});
let circle = document.querySelector("#circle");
circle.addEventListener("click" , ()=>{
    console.log("the circle was clicked!)")
})

