// Object Destructuring 1
    // ANSWER:
        // console.log(numPlanets);                 8
        // console.log(yearNeptuneDiscovered);      1846



// Object Destructuring 2
    // ANSWER: 
        // console.log(discoveryYears);             {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



// Object Destructuring 3
    // ANSWER:
        // getUserData({firstName: "Alejandro", favoriteColor: "purple"});      'Your name is Alejandro and you like purple'
        // getUserData({firstName: "Melissa"});                                 'Your name is Melissa and you like green' 
        // getUserData({});                                                     'Your name is undefined and you like green'




// Array Destructuring 1
    // ANSWER:
        // console.log(first);     "Maya"
        // console.log(second);    "Marisa"
        // console.log(third);     "Chi"





// Array Destructuring 2
    // ANSWER:
        // console.log(raindrops);                      Raindrops on roses
        // console.log(whiskers);                       whiskers on kittens
        // console.log(aFewOfMyFavoriteThings);         ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']




// Array Destructuring 3
    // ANSWER:
        // console.log(numbers);    [10, 30, 20]





// ES5 Assigning Variables to Object Properties
// REFACTORED:
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

let {a, b} = obj.numbers;





// ES5 Array Swap
// REFACTORED:
const arr = [1, 2];
[arr[1], arr[2]] = [arr[2], arr[1]];



// raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

