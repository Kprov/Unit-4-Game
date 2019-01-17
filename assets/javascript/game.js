$(document).ready(function(){
    //genertaing random number for the user score and adding to html
    var gameScore = Math.floor(Math.random() * 100+7)
    console.log(gameScore)

    $(".gameScoreText").text(gameScore);

    var crystals = {
        numOne: Math.floor(Math.random(10*3)),
        numTwo: Math.floor(Math.random(10*3)),
        numThree: Math.floor(Math.random(10*3)),
        numFour: Math.floor(Math.random(10*3)),
    }
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    console.log(wins,losses)
    
    function reset(){
        var gameScore = Math.floor(Math.random() * 100+7)
            console.log(gameScore)
        $(".gameScoreText").text(gameScore);
        crystals = Math.floor(Math.random(10*3));
        userTotal = 0;
        $("#userScoreText").text(userTotal);
    }   
        //============================================================================================================
    //     // Functions for scores 
    // function startGame() {
    
    //     gameScore = 
    //     for (var i=0; i<100; i++){
    //         $(gameScoreNumbers).push([i]);
    //         console.log(gameScoreNumbers)
    //     }
    // }
})


