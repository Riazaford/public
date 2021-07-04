/*
// DOM Elements
const door_container = document.getElementById("door_container")
//let door = document.getElementById("door");
let door_cont;
let light;
*/ 

const light_animation = {
    id : "light_animation",
    attributeName : "d",
    values : 'M392 627.5C404.5 636 417 636 217.5 636C37.5 636 10 642.5 37.5 627.5L37.5 621.5L392 619V627.5Z; M392 627.5C381 637.5 414.5 627.5 215 627.5C35 627.5 37.5 642 37.5 627.5L37.5 621.5L392 619V627.5Z; M392 627.5C404.5 636 417 636 217.5 636C37.5 636 10 642.5 37.5 627.5L37.5 621.5L392 619V627.5Z',
    dur : "1000ms",
    fill : "freeze",
    repeatCount : "indefinite",
    begin : "click"
}
const handle_animation = {
    id : "handle_animation",
    attributeName : "transform",
    type : "rotate",
    values : '0 352 417;40 352 417;0 352 417;-5 352 417;0 352 417',
    dur : "1000ms",
    fill : "freeze",
    repeatCount : "1",
    begin : "click"
}
const door_opening = {
    id : "door_opening",
    attributeName : "d",
    from : 'M407 37L36 36V625L407 625V37Z',
    to : 'M34 378L36 36V625L34 480.5V378Z',
    dur : "1000ms",
    fill : "freeze",
    repeatCount : "1",
    begin : "click"
}
const door_opening1 = {
    id : "door_opening1",
    attributeName : "d",
    from : 'M65.5 379.5V68.5L352.5 68.5V379.5H65.5Z',
    to : 'M11 380V69L26 368V380H11Z',
    dur : door_opening.dur,
    fill : "freeze",
    repeatCount : "1",
    begin : "click"
}
const door_opening2 = {
    id : "door_opening2",
    attributeName : "d",
    from : 'M65 608V454H352V608L65 608Z',
    to : 'M11 608V454H26V465L11 608Z',
    dur : door_opening.dur,
    fill : "freeze",
    repeatCount : "1",
    begin : "click"
}
const door_opening_handle = {
    id : "door_opening_handle",
    attributeName : "d",
    from : 'M368.5 417C368.5 422.981 366.736 428.375 363.909 432.262C361.082 436.15 357.219 438.5 353 438.5C348.781 438.5 344.918 436.15 342.091 432.262C339.264 428.375 337.5 422.981 337.5 417C337.5 411.019 339.264 405.625 342.091 401.738C344.918 397.85 348.781 395.5 353 395.5C357.219 395.5 361.082 397.85 363.909 401.738C366.736 405.625 368.5 411.019 368.5 417Z',
    to : 'M25 416C25 418.943 24.1316 421.588 22.7525 423.484C21.373 425.381 19.5098 426.5 17.5 426.5C15.4902 426.5 13.627 425.381 12.2475 423.484C10.8684 421.588 10 418.943 10 416C10 413.057 10.8684 410.412 12.2475 408.516C13.627 406.619 15.4902 405.5 17.5 405.5C19.5098 405.5 21.373 406.619 22.7525 408.516C24.1316 410.412 25 413.057 25 416Z',
    dur : door_opening.dur,
    fill : "freeze",
    repeatCount : "1",
    begin : "click"
}
const door_entering = {
    id : "door_entering",
    attributeName : "transform",
    type : "scale",
    from : '1 1',
    to : '10 10',
    dur : door_opening.dur,
    fill : "freeze",
    repeatCount : "1",
    begin : "click"
}

//Document load
window.addEventListener("load", function(){

    injectAnimate("path","light",light_animation);
    startAnimation(light_animation.id);
    
    startLoading();

});


function injectAnimate(query,id,anim){
    document.querySelectorAll(query).forEach(elem => {
        if (elem.id == id) {

            let nAnim = document.createElementNS("http://www.w3.org/2000/svg", 'animate');
            nAnim.setAttribute("attributeType","XML");
            nAnim.setAttribute("id",anim.id);
            nAnim.setAttribute("attributeName",anim.attributeName);
            nAnim.setAttribute("dur",anim.dur);
            nAnim.setAttribute("fill",anim.fill);
            nAnim.setAttribute("repeatCount",anim.repeatCount);
            nAnim.setAttribute("begin",anim.begin);

            if(anim.values){
                nAnim.setAttribute("values",anim.values);
            }
            if(anim.from && anim.to){
                nAnim.setAttribute("from",anim.from);
                nAnim.setAttribute("to",anim.to);
            }

            elem.appendChild(nAnim);

        }
    })
}
function injectAnimateTransform(query,id,anim){
    document.querySelectorAll(query).forEach(elem => {
        if (elem.id == id) {

            let nAnim = document.createElementNS("http://www.w3.org/2000/svg", 'animateTransform');
            nAnim.setAttribute("attributeType","XML");
            nAnim.setAttribute("id",anim.id);
            nAnim.setAttribute("attributeName",anim.attributeName);
            nAnim.setAttribute("type",anim.type);
            nAnim.setAttribute("dur",anim.dur);
            nAnim.setAttribute("fill",anim.fill);
            nAnim.setAttribute("repeatCount",anim.repeatCount);
            nAnim.setAttribute("begin",anim.begin);

            if(anim.values){
                nAnim.setAttribute("values",anim.values);
            }
            if(anim.from && anim.to){
                nAnim.setAttribute("from",anim.from);
                nAnim.setAttribute("to",anim.to);
            }

            elem.appendChild(nAnim);

        }
    })
}
function deleteAnimate(parentId, animId){
    document.querySelectorAll("path").forEach(elem => {
        if (elem.id == parentId) {
            elem.querySelectorAll("animate").forEach(anim => {
                if (anim.id == animId){
                    elem.removeChild(anim);
                }
            });
        }
    });
}

function startAnimation(id){
    document.querySelectorAll("animate").forEach(anim => {
        if (anim.id == id) {
            anim.beginElement();
        }
    });
    document.querySelectorAll("animateTransform").forEach(anim => {
        if (anim.id == id) {
            anim.beginElement();
        }
    });
}

function startLoading(){

    let timerone = setTimeout(() => {
        
        injectAnimateTransform("path","handle",handle_animation);

        startAnimation(handle_animation.id);

    }, light_animation.dur.split("ms")[0] * 2 );

    let timerone1 = setTimeout(() => {
        
        injectAnimate("path","door",door_opening);
        injectAnimate("path","rect1",door_opening1);
        injectAnimate("path","rect2",door_opening2);
        injectAnimate("path","handle",door_opening_handle);

        startAnimation(door_opening.id);
        startAnimation(door_opening1.id);
        startAnimation(door_opening2.id);
        startAnimation(door_opening_handle.id);

        document.getElementById("door_image").classList.add("door_opening");

        deleteAnimate("light",light_animation.id);

    }, light_animation.dur.split("ms")[0] * 3 );


}



/*
//Document load
door_container.addEventListener("load",()=>{
    door_cont = document.getElementById("door").contentDocument;
    light = door_cont.getElementById("light");


    document_ready();
});

function document_ready(){
    event_assign();
   
}

//Event listener inizialization
function event_assign(){
    
}
*/