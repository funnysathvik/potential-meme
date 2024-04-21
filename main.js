img = "";
status = "";
object = [];
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    identifier = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("sand").innerHTML = "status dectection object";
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
    
    for(i=0; i < object.legnth; i++){
        fill("red");
        document.getElementById("sand").innerHTML = "status is detecting objects";
        percentage = floor(object[i].confidence*100);
        text(object[i].label+" "+percentage+"%",object[i].x,object[i].y);
        noFill();
        stroke("red");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}
function modelloaded(){
    console.log("model is loaded");
    status=true;
    identifier.detect(img,gotpose);
}
function gotpose(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
    object = results;

}