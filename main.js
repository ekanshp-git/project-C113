function preload() { 
}

function setup() {
    canvas = createCanvas(1500, 1000);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}

function draw() {
    image(video, 500, 250, 640, 480);
    tint(tint_color);
    circle(170, 150, 150,);
    rect(230, 100, 1050, 100);
    circle(1300, 150, 150);
    rect(1250, 200, 100, 650);
    circle(1300, 900, 150);
    rect(200, 850, 1050, 100);
    circle(170, 900, 150);
    rect(120, 200, 100, 650);  
    fill(0, 128, 0) 
}

function take_snapshot(){
    save('student_name.png');
}
