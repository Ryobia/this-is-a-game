let handi = $('#handi');
let baddie = $('#baddie');
let field = $('#field');
let speed = 10;
let baddieSpeed = 10;
let handiX = handi.offset();

let baddieX = baddie.offset();


let init = function() {


};

init();


let hitbox = function (handi, baddie) {

    let handiOffset = handi.offset();
    let handiHeight = handi.outerHeight(true);
    let handiWidth = handi.outerWidth(true);
    let handiTop = handiOffset.top + handiHeight;
    let handiLeft = handiOffset.left + handiWidth;

    let baddieOffset = baddie.offset();
    let baddieHeight = baddie.outerHeight(true);
    let baddieWidth = baddie.outerWidth(true);
    let baddieTop = baddieOffset.top + baddieHeight;
    let baddieLeft = baddieOffset.left + baddieWidth;

    return !(handiTop < baddieOffset.top || handiOffset.top > baddieTop || handiLeft < baddieOffset.left || handiOffset.left > baddieLeft);
};

let outOfBounds = function(handi, field) {

    let handiOffset = handi.offset();
    let handiHeight = handi.outerHeight(true);
    let handiWidth = handi.outerWidth(true);
    let handiTop = handiOffset.top + handiHeight;
    let handiLeft = handiOffset.left + handiWidth;

    let fieldOffset = field.offset();
    let fieldHeight = field.outerHeight(true);
    let fieldWidth = field.outerWidth(true);
    let fieldTop = fieldOffset.top + fieldHeight;
    let fieldLeft = fieldOffset.left + fieldWidth;

    return !(handiTop < fieldOffset.top || handiOffset.top > fieldTop || handiLeft < fieldOffset.left || handiOffset.left > fieldLeft);

}


let backgroundJunk = setInterval(function() {
    handiX = handi.offset();
    baddieX = baddie.offset();
    baddieGo(handiX, baddieX);
    
    if (outOfBounds(handi, field)) {
        console.log("in");
    } else if (!outOfBounds(handi, field)) {
        console.log("out")
    }

    if (hitbox(handi, baddie)) {
        alert("He got you");
        clearInterval(backgroundJunk);
    }

  
    


}, 100);

let baddieGo = function(handiX, baddieX) {


   
    if (baddieX.left < handiX.left) {
        $(baddie).animate({left: '+=' + baddieSpeed + 'px'}, 10);

    }
    if (baddieX.left > handiX.left) {
        $(baddie).animate({left: '-=' + baddieSpeed + 'px'}, 10);

    }
    if (baddieX.top < handiX.top) {
        $(baddie).animate({bottom: '-=' + baddieSpeed + 'px'}, 10);
        
    }
    if (baddieX.top > handiX.top) {
        $(baddie).animate({bottom: '+=' + baddieSpeed + 'px'}, 10);
    }



};



document.addEventListener("keydown", function(e) {
    if(e.key === 'w') {
        
            $(handi).animate({bottom: '+=' + speed + 'px'}, 10);
            // handi.style.bottom = `${parseInt(handi.style.bottom) + 5}px`;
       

    }
});

document.addEventListener("keydown", function(e) {
    if(e.key === 'a') {
        $(handi).animate({left: '-=' + speed + 'px'}, 10);
        handiX = handi.offset();
        console.log(handiX);
        // handi.style.left = `${parseInt(handi.style.left) - 5}px`;


    }
});

document.addEventListener("keydown", function(e) {
    if(e.key === 's') {
        $(handi).animate({bottom: '-=' + speed + 'px'}, 10);
        // handi.style.bottom = `${parseInt(handi.style.bottom) - 5}px`;


    }
});

document.addEventListener("keydown", function(e) {
    if(e.key === 'd') {
            $(handi).animate({left: '+=' + speed + 'px'}, 10);
            // handi.style.left = `${parseInt(handi.style.left) + 5}px`;
            
        

    }
});

