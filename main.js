kisi_ki_muskurahoton_pe_ho_nisar = "";
Tujshe_Naraaz_Nahin_Zindagi = "";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(500, 200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


function preload() {
    kisi_ki_muskurahoton_pe_ho_nisar = loadSound("Raj Kapoor.mp3");
    Tujshe_Naraaz_Nahin_Zindagi = loadSound("Tujshse Naraaz.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = " + leftWrist_x + " leftWrist_y = " + leftWrist_y);

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = " + rightWrist_x + " rightWrist_y = " + rightWrist_y);

    }
}
}