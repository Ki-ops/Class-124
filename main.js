function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}

function modelLoaded(){
    console.log("poseNet had been initialized");
}

function getPoses(results){
 if(results.length>0){
    console.log(results)
 }
}
function draw() {
    background("black")
}