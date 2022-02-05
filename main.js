status_quo="";
objects=[];

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("input").value;
    objectDetector.detect(video,gotResult);
}

function modelLoaded(){
    console.log('Model Loaded!');
    status_quo=true;
}

function draw(){
    image(video,0,0,480,380);
    if(status_quo !=""){
        objectDetector.detect(video,gotResult);

        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML="Number of Objects Detected : "+objects.length;

            fill("FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

if(objects[i].label==video){
    video.stop();
    objectDetector.detect(gotResult);
    document.getElementById("status").innerHTML="Object mentioned found";
    utterThis=new SpeechSynthesisUtterance("Object mentioned found");
    synth.speak(utterThis);
}
else{
    document.getElementById("status").innerHTML="Object mentioned not found";
    utterThis=new SpeechSynthesisUtterance("Object mentioned not found");
    synth.speak(utterThis);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    {
        console.log(results);
        objects=results;
        
    }
}