song1="";
song2="";
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("Harry Potter Theme Song.mp3");
}
function setup(){
canvas=createCanvas(500,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();

}
function draw(){
image(video,0,0,600,500);
}
function play1(){
    song1.play();
}
function play2(){
    song2.play()
}