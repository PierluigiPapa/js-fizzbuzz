// Pongo le seguenti condizioni: 

// SE il numero è un multiplo di 3:
// vero: stampo "Fizz" anziché il numero
// falso: rimane il numero

// SE il numero è un multiplo di 5:
// vero: stampo "Buzz" anziché il numero
// falso: rimane il numero

// SE il numero è un multiplo di entrambi:
// vero: stampo "FizzBuzz" anziché il numero
// falso: rimane il numero


//costante per generare il numero
const tagUlList = document.querySelector('ul.numbers-created');

// - stampare in console i numeri da 1 a 100;
for(let numeroHTML = 1; numeroHTML <= 100; numeroHTML++) {
    const elementLi = document.createElement ('li');
    let valueString = numeroHTML;
    
    if (numeroHTML % 3 === 0 && numeroHTML % 5 === 0) {
        valueString = 'fizzbuzz';
        // console.log(valueString)
    } else if (numeroHTML % 3 === 0) {
        valueString = 'fizz';
        // console.log(valueString);
    } else if (numeroHTML % 5 === 0) {
        valueString = 'buzz';
        // console.log(valueString);
    }

    if (typeof valueString !== 'number'){
        elementLi.classList.add(valueString);
    }
    elementLi.append (valueString);
    tagUlList.appendChild(elementLi);
};