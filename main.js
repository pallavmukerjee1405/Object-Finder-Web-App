status_quo="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start(){
    detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("input").value;
}

function modelLoaded(){
    console.log('Model Loaded!');
    status_quo=true;
}

function draw(){
    image(video,0,0,480,380);
}