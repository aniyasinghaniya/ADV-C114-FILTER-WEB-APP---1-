nose_x=0;
nose_y=0;
function preload(){
   img = loadImage("https://i.postimg.cc/3R9xnt91/sunglasses-vector-graphics-image-png-favpng-htg-Tzf-Tdg-NYV57-Edez-YK6b-MQs.jpg")     
}
function setup(){
canvas=createCanvas(400,300)
canvas.center()
camera=createCapture(VIDEO)
camera.hide()

poseNet=ml5.poseNet(camera, modelLoaded);
poseNet.on("pose",gotPoses);

}
function draw(){
image(camera,0,0,400,300)
}

function modelLoaded(){
    console.log("posenet is loaded succesfully")
}

