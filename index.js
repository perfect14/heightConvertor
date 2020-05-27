let button = document.querySelector('.button')
button.onclick=function convert(e){
    let feet = document.querySelector('.feet')
    let inches = document.querySelector('.inches')
    let result = document.querySelector('.result')
    e.preventDefault();
    feet=parseInt(feet.value);
    inches = parseInt(inches.value);
    if(isNaN(feet) || isNaN(inches)){
        result.textContent = 0
    }else{
        let convertfeet = feet * 12;
        const centimeterValue = convertfeet + inches;
        result.textContent = centimeterValue + " cm";
    }
   
   
};