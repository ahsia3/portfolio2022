let webDevElement = document.getElementById("webDev");
let gameDevElement = document.getElementById("gameDev");

let devNumber = 0;
let indexWebDevNumber = 0;
let indexGameDevNumber = 0;

let left_index = 0;

webDevElement.addEventListener('click', function() {
    webDevElement.style.backgroundColor = "#3b8caf";

    gameDevElement.style.backgroundColor = "#F3FFBD";
    
    devNumber = 1;
});

gameDevElement.addEventListener('click', function() {
    gameDevElement.style.backgroundColor = "#3b8caf";

    webDevElement.style.backgroundColor = "#F3FFBD";

    devNumber = 2;
});

let homeElement = document.querySelectorAll("#home");

homeElement.forEach(element => {
    element.addEventListener('click', function() {
        get_Home();
        indexWebDevNumber = 0;
        indexGameDevNumber = 0;
        left_index = 0;
    });
});

document.getElementById("left-container").addEventListener('click', function() {
    if(left_index>= 2){
        left_index = 0;
    }else{
        left_index++;
    }
    Left_Pictures(left_index);
});

function Left_Pictures(left_index){
    if(screen.width >= 1440){
        const element = document.getElementById("left-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY(-"+80*left_index+ "vh)";
    }else{
        const element = document.getElementById("left-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY(-"+40*left_index+ "vh)";
    }
}

document.getElementById("right-container").addEventListener('click', function() {
    Determine_DevNumber();
});

function Determine_DevNumber(){
    switch(devNumber){
        case 0:
        case 1:
            if(indexWebDevNumber>= 7){
                indexWebDevNumber = 0;
            }else{
                indexWebDevNumber++;
            }
            get_Next_WebDev(indexWebDevNumber);
            break;
        case 2:
            if(indexGameDevNumber!=0){
                if(indexGameDevNumber>= 7){
                    indexGameDevNumber = 0;
                }else{
                    indexGameDevNumber++;
                }
            }else{
                indexGameDevNumber+=2;
            }
            get_Next_WebDev(indexGameDevNumber);
            break;
    }
}

function get_Next_WebDev(indexWebDevNumber){
    /*const element = document.querySelectorAll("#right-slide-inside");
    console.log(element);


    element[indexWebDevNumber].style.transition = "transform 1.5s ease-out 0.1s";
    element[indexWebDevNumber].style.transform = "translateY(-"+45*indexWebDevNumber+ "vh)";*/

    

    if(screen.width >= 1440){
        const element = document.getElementById("right-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY(-"+80*indexWebDevNumber+ "vh)";
    }else{
        const element = document.getElementById("right-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY(-"+40*indexWebDevNumber+ "vh)";
    }
}

function get_Home(){
    if(screen.width >= 1440){
        const element = document.getElementById("right-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY("+0*indexWebDevNumber+ "vh)";
    }else{
        const element = document.getElementById("right-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY("+0*indexWebDevNumber+ "vh)";
    }

    if(screen.width >= 1440){
        const element = document.getElementById("left-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY(-"+0*left_index+ "vh)";
    }else{
        const element = document.getElementById("left-slide");
        element.style.transition = "transform 1.5s ease-out 0.1s";
        element.style.transform = "translateY(-"+0*left_index+ "vh)";
    }
}