kisi_ki_muskurahoton_pe_ho_nisar = "";
Tujshe_Naraaz_Nahin_Zindagi = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(500, 200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

