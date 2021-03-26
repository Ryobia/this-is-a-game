let player = $('#player');
let baddie = $('#baddie');
let field = $('#field');
let start = $('#startMenu');
let speed = 10;
let baddieSpeed = 10;
let playerX = player.offset();

let baddieX = baddie.offset();


let startMenu = function() {
    $('#startMenu').show();

};

startMenu();


let hitbox = function (player, baddie) {

    let playerOffset = player.offset();
    let playerHeight = player.outerHeight(true);
    let playerWidth = player.outerWidth(true);
    let playerTop = playerOffset.top + playerHeight;
    let playerLeft = playerOffset.left + playerWidth;

    let baddieOffset = baddie.offset();
    let baddieHeight = baddie.outerHeight(true);
    let baddieWidth = baddie.outerWidth(true);
    let baddieTop = baddieOffset.top + baddieHeight;
    let baddieLeft = baddieOffset.left + baddieWidth;

    return !(playerTop < baddieOffset.top || 
        playerOffset.top > baddieTop || 
        playerLeft < baddieOffset.left || 
        playerOffset.left > baddieLeft);
};

let outOfBounds = function(player, field, direction) {

    let playerOffset = player.offset();
    let playerHeight = player.outerHeight(true);
    let playerWidth = player.outerWidth(true);
    let playerTop = playerOffset.top + playerHeight;
    let playerLeft = playerOffset.left + playerWidth;

    let fieldOffset = field.offset();
    let fieldHeight = field.outerHeight(true);
    let fieldWidth = field.outerWidth(true);
    let fieldTop = fieldOffset.top + fieldHeight;
    let fieldLeft = fieldOffset.left + fieldWidth;
    console.log(fieldOffset.left, fieldOffset.top);

    switch (direction) {
        case 'w':
            return !(playerOffset.top - speed < fieldOffset.top);
            break;

        case 'a': 
            return !(playerOffset.left - speed < fieldOffset.left);
            break;
        
        case 's':
            return !(playerTop + speed > fieldTop);
            break;
        
        case 'd':
            return !(playerLeft + speed > fieldLeft);
            break;
    };
     

};


let backgroundJunk = setInterval(function() {
    playerX = player.offset();
    baddieX = baddie.offset();
    baddieGo(playerX, baddieX);
    
    // if (outOfBounds(player, field)) {
    //     console.log("in");
    // } else if (!outOfBounds(player, field)) {
    //     console.log("out")
    // }

    if (hitbox(player, baddie)) {
        alert("He got you");
        clearInterval(backgroundJunk);
    }

  
    


}, 100);

let baddieGo = function(playerX, baddieX) {


   
    if (baddieX.left < playerX.left) {
        $(baddie).animate({left: '+=' + baddieSpeed + 'px'}, 10);

    }
    if (baddieX.left > playerX.left) {
        $(baddie).animate({left: '-=' + baddieSpeed + 'px'}, 10);

    }
    if (baddieX.top < playerX.top) {
        $(baddie).animate({bottom: '-=' + baddieSpeed + 'px'}, 10);
        
    }
    if (baddieX.top > playerX.top) {
        $(baddie).animate({bottom: '+=' + baddieSpeed + 'px'}, 10);
    }



};



document.addEventListener("keydown", function(e) {
    if(e.key === 'w') {
        
        if (outOfBounds(player, field, e.key)) {

            $(player).animate({bottom: '+=' + speed + 'px'}, 10);
            // player.style.bottom = `${parseInt(player.style.bottom) + 5}px`;
       
        }    
    }
});

document.addEventListener("keydown", function(e) {
    if(e.key === 'a') {
        

        if (outOfBounds(player, field, e.key)) {

            
            $(player).animate({left: '-=' + speed + 'px'}, 10);
            console.log("out")

        }
      
        // player.style.left = `${parseInt(player.style.left) - 5}px`;


    }
});

document.addEventListener("keydown", function(e) {
    if(e.key === 's') {

        if (outOfBounds(player, field, e.key)) {

            $(player).animate({bottom: '-=' + speed + 'px'}, 10);
            // player.style.bottom = `${parseInt(player.style.bottom) - 5}px`;

        }
    }
});

document.addEventListener("keydown", function(e) {
    if(e.key === 'd') {

        if (outOfBounds(player, field, e.key)) {

            $(player).animate({left: '+=' + speed + 'px'}, 10);
            // player.style.left = `${parseInt(player.style.left) + 5}px`;
            
        }

    }
});

