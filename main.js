nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(650,150);
    video=createCapture(VIDEO);
    video.size(500,400);
    video.position(20,150);
    poseNet=ml5.poseNet(video,modalloded);
    poseNet.on("pose",gotposes)
    
}


function draw(){
    background("grey")
    fill("#a6baf2");
    textSize(difference)
     text("Mahi",50,200)
    
     document.getElementById("size").innerHTML="The side of the square is " + difference;
}

function modalloded(){
    console.log("modal is loaded")
}

function gotposes(result){
    if(result.length > 0){
    console.log(result);
    nosex =result[0].pose.nose.x;
    nosey =result[0].pose.nose.y;
    leftwristx =result[0].pose.leftWrist.x;
    rightwristx =result[0].pose.rightWrist.x;
    difference =floor(leftwristx - rightwristx);

    }
}

