function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function modelLoaded(){
    console.log("Model Loaded!!!");
}
function gotPose(result){
if(result.length>0){
console.log(result);
console.log("Nose x="+result[0].pose.nose.x);
console.log("Nose y="+result[0].pose.nose.y);
}
}

function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
save("myclownSelfie.png");
}

