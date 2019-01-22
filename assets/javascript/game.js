$(document).ready(function(){

    var gameScore = Math.floor(Math.random() * 100+7)
    console.log(gameScore)
    var crystal1 = Math.floor(Math.random() * 10+3);
    var crystal2 = Math.floor(Math.random() * 8+3);
    var crystal3 = Math.floor(Math.random() * 14+3);
    var crystal4 = Math.floor(Math.random() * 9+5);
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
   
    $("#start").on("click",function(gameStart){
    
        
    $(".gameScoreText").text(gameScore);
    $(".userScoreText").text(userTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#start").hide();

    $("#crystal1").attr("value", crystal1);
    $("#crystal2").attr("value", crystal2);
    $("#crystal3").attr("value", crystal3);
    $("#crystal4").attr("value", crystal4);

    $("#crystal1").on("click", function(){
        console.log("clicked")
        var value1 = $(this).attr("value");
        value1 = parseInt(value1);
        userTotal += value1;
        console.log(userTotal)
        $(".userScoreText").text(userTotal);
    })
    $("#crystal2").on("click", function(){

        console.log("clicked")
        var value2 = $(this).attr("value");
        console.log(value2)
        value2 = parseInt(value2);
        userTotal += value2;
        console.log(userTotal)
        $(".userScoreText").text(userTotal);
    })
    $("#crystal3").on("click", function(){

        console.log("clicked")
        var value3 = $(this).attr("value");
        console.log(value3)
        value3 = parseInt(value3);
        userTotal += value3;
        console.log(userTotal)
        $(".userScoreText").text(userTotal);
    })
    $("#crystal4").on("click", function(){

        console.log("clicked")
        var value4 = $(this).attr("value");
        console.log(value4)
        value4 = parseInt(value4);
        userTotal += value4;
        console.log(userTotal)
        $(".userScoreText").text(userTotal);
    })

    })

    


    //genertaing random number for the user score and adding to html
    


    
    
        
     
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


