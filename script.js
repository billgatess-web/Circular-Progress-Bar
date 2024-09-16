let number = document.getElementsByClassName("number")[0];
let counter = 0;

setInterval(() => {
    if(counter == 65){
        clearInterval();
    }
    else{
        counter += 1
        number.innerHTML = counter + "%";
    }
}, 30);