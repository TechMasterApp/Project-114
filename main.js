noseX = 0
noseY = 0

function preload() {
    mustache = loadImage("https://i.postimg.cc/c473KMYg/moustache.png")
}

function setup() {
    canvas = createCanvas(700, 525)
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    
}

function draw() {
    image(video, 0, 0, 700, 525)
}

function modelLoaded() {

}

function gotPoses() {
    if (result.length > 0) {
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y
    }
}

function saveit() {
    save("MustacheImage.png")
}