songp = "";
songh = "";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleftwrist=0;
scorerightwrist=0;


function preload(){
    songh= loadSound("music.mp3");
    songp= loadSound("music2.mp3");
    }
    function setup(){
        canvas = createCanvas(600,500);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();}
        
        function draw(){
            image(video,0,0,600,500);
            fill("#FF0000");
            stroke("#FF0000");
            if(scorerightwrist > 0.2)
            {
                circle(rightwristx,rightwristy,20);
                songp.stop();
                if(songh_status == false){
                    songh.play()
                    document.getElementById("song").innerHTML = "Playing - Harry potter theme song"
                }
            }
            if(scorerightwrist > 0.2)
            {
                circle(leftwrist,leftwristy,20);
                songh.stop();
                if(songp_status == false){
                    songp.play()
                    document.getElementById("song").innerHTML = "Playing - Peter Pan theme song"
                }
            }
        }
        function play(){
            song.play();
            song.setVolume(1);
            song.rate(1);
        }
        function modeloaded(){
             console.log('posenet is initialied')
        }
        function gotposes(results){
            if(results.length > 0){
                console.log(results);
                scoreleftwrist = results[0].pose.keypoints[9].score;
                leftwristx = results[0].pose.leftWrist.x;
                leftwristy = results[0].pose.leftWrist.y;
                console.log("leftwristx =" + leftwristx + "leftwristy ="+ leftwristy);
                rightwristx = results[0].pose.rightWrist.x;
                rightwristy = results[0].pose.rightWrist.y;
                console.log("rightwristx =" + rightwristx + "rightwristy ="+ rightwristy);
        