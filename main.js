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
    posenet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 700, 525)
    image(mustache, noseX - 50, noseY + 20, 150, 90)
}

function modelLoaded() {

}

function gotPoses(result) {
    if (result.length > 0) {
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y
    }
}

function saveit() {
    save("MustacheImage.png")
}