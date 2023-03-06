// FUNCTIONS //

// function checkDriverAge(age) {
//     if (Number(age) < 18) {
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18)
//         console.log("Congratulations on your first year of driving. Enjoy the ride!")
// }

// checkDriverAge(17);

// function checkDriverAge() {
//     var age = prompt("what is your age?");
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18)
//         alert("Congratulations on your first year of driving. Enjoy the ride!")
// }

// checkDriverAge();




// EXERCISE BUILD FACEBOOK PT.1 // 

var database = [
    {
        username: "Kevin",
        password: "Password"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is prettyyy cool!"
    }
];

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        console.log("Incorrect username or password");
    }
}

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(usernamePrompt, passwordPrompt);




// LOOPS //

// var todos = [
//     'clean room',
//     'brush teeth',
//     'exercise',
//     'study javascript',
//     'eat healthy'
// ];

// var todosImportant = [
//     'clean room!',
//     'brush teeth!',
//     'exercise!',
//     'study javascript!',
//     'eat healthy!'
// ];

// FOR LOOP //
// This means you start at index of 0 and loop through each index until you get past i < todos.length //
// var todosLength = todos.length;
// for (var i = 0; i < todos.length; i++) {
//     console.log(todos[i], i);
// }


// FOR EACH LOOP (BEST ONE) //
// todos.forEach(function (todo, i) {
//     console.log(todo, i);
// })

// function logTodos(todo, i) {
//     console.log(todo, i);
// }

// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);


// // WHILE LOOP //
// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }


// // DO WHILE LOOP // 
// var counterTwo = 0;
// do {
//     console.log(counterTwo);
//     counterTwo++;
// } while (counterTwo < 10);
