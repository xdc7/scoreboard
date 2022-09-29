function score(team,point){
    let score = document.getElementById('homeScore')
    if(team == "guest"){
        // console.log("Guests score!")
        score = document.getElementById('guestScore')
    }
    
    let scoreVal = parseInt(score.textContent)
    scoreVal += point
    score.textContent = scoreVal

    let homeScore = parseInt(document.getElementById('homeScore').textContent)
    let guestScore = parseInt(document.getElementById('guestScore').textContent)
    if(homeScore > guestScore){
        // console.log("HOME is leading!!")
        document.getElementById("guestScore").classList.remove('blink');
        document.getElementById("homeScore").classList.add('blink');
        
    }
    else if(guestScore > homeScore){
        // console.log("GUEST is leading!!")
        document.getElementById("homeScore").classList.remove('blink');
        document.getElementById("guestScore").classList.add('blink');
    }
    else{
        document.getElementById("homeScore").classList.remove('blink');
        document.getElementById("guestScore").classList.remove('blink');
    }
    // console.log("team: " + team + " point: " + point + " score: " +scoreVal)
}

function newGame(){
    let homeScore = document.getElementById('homeScore')
    let guestScore = document.getElementById('guestScore')
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeScore.classList.remove('blink');
    guestScore.classList.remove('blink');
}