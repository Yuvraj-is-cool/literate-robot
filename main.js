function preload(){
}
function setup(){
    canvas=createCanvas(730,510);
    canvas.position(100,20);
    video=createCapture(VIDEO);
    video.hide();
  
    
}
function draw(){
    circle(30, 30, 40);
    circle(30, 510, 40);
    circle(730, 30, 40);
    circle(730, 510, 40);
    rect(30, 20, 680, 500);
    image(video,30,20,680,500);
}
 
