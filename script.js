// 'use strict';


const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    resName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};

/* 


//Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Rakibul Hasan Redoy'.split(' '));

 const [firstName, lastName]='Rakibul Hasan'.split(' ')

const newName = ['Mr.',firstName, lastName.toUpperCase()].join(' ');
console.log(newName);


const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for(const n of names){
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('rakibul hasan redoy')

*/

/* 
const airline ='TAP Air Portugal';
const plane ='A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[0]);

console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));


console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ')+1));


console.log(airline.slice(-8));
console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){

        //B and E are Middle Seats
        const s = seat.slice(-1);

        if(s === 'B' || s==='E')
        console.log('You got the middle seat');
        else
        console.log('You got lucky');



}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

/* 
const airline ='TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Rakibul Hasan Redoy'.toUpperCase());

// const passenger = prompt('Enter your name:');
const passenger = 'meheDi';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


//replacing

const priceGB = '288,97£';
const priceUS =priceGB.replace('£','$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door','gate'));


// Booleans

const plane = 'A320neo';

console.log(plane.startsWith('A320'));
console.log(plane.endsWith('neo'));

const checkBaggage = function(items){
    
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are not allowed on board');
    }
    else
    console.log('Welcome Aboard!');
};

checkBaggage('I have some foods and knife');
checkBaggage('I have a camera and a laptop');


 */
/* 
const question = new Map([
['question', 'What is the best programming language in the world?'],
[1, 'C'],
[2, 'Java'],
[3, 'JavaScript'],
['correct',3],
[true,'Correct🎗'],
[false,'Try again!'],
]);

console.log(question);
 
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz App
console.log(question.get('question'));

for (const [key, value] of question){
    if(typeof key === 'number')
    console.log(`Option ${key}: ${value}`);
}

const option = Number(prompt('Enter your Answer: '));
console.log(option);

console.log(question.get(question.get('correct') === option));
 */


/* 

const ordersSet = new Set([
    'Pizza',
    'Pasta',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);

console.log(ordersSet);

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Rice'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

ordersSet.delete('Risotto');
console.log(ordersSet);


// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const note = ['One', 'Two', 'Five', 'One', 'Ten', 'Five', 'Two'];

console.log(note);

const noteUnique = [...new Set(note)];
console.log(noteUnique);


console.log(new Set('rakibulhasanredoy').size);

const rest = new Map();
rest.set('nam','Rakibul').set(1,'IRSCB').set(2,'Cambrian College');

console.log(rest);

console.log(rest.size);
rest.delete(1);
console.log(rest);

console.log(rest.get(2)); */







/* 
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    // console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'Closed';
    console.log(`On ${day}, we open at ${open}`);
}

//Method
console.log(restaurant.order?.(1,2) ?? "Method doesn't exit");

console.log(restaurant.orderRisotto?.(1,2) ?? "Method doesn't exit");

//Arrays

 for(const day of Object.keys(openingHours))
 console.log(day);
*/

/* 

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2021',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};




/* 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


//Previous Way
// let a = "";
// for (let i = 0; i < menu.length; i++) {
//     a = menu[i];
//     console.log(`${i+1} = ${a}`);
// }


//The for of Loop
for (const item of menu)
    console.log(item);


for (const item of menu.entries()) {
    console.log(`${item[0]+1}: ${item[1]}`);
};

for (const [i, el] of menu.entries()) {
    console.log(`${i+1}: ${el}`);
};

*/
// console.log(...menu.entries());

/* 
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);


const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
 */
/* 
const players1 = game.players[0];
console.log(players1);

const players2 = game.players[1];
console.log(players2);

const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);

const [gk2, ...fieldPlayers2] = game.players[1];
console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
 */



/* 
//Logical OR assignment 
//The logical OR assignment (x ||= y) operator only assigns if x is falsy.

const a = { duration: 50, title: 'Hello' };

a.duration || 10;
console.log(a.duration);
// expected output: 50

a.title || 'title is empty.';
console.log(a.title);
// expected output: "title is empty"

 */

/* 
const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 02) Functions
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);

}

add(2, 3);
add(5, 3, 7, 2);

const y = [55, 68, 75, 22, 10];
add(...y)


 */







/* 

//DESTRUCTING
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherfoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherfoods);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//FUNCTIONS
const add = function(...numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++)
            sum += numbers[i];
        console.log(sum);
    };

    add(2, 3);
    add(5, 3, 7, 2);
    add(8, 2, 5, 3, 2, 1, 4);

    const x = [10, 50, 40];
    add(...x);

    restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');


    */

/* 
console.log(3 || 'Hridoy');
console.log('' || 'Hridoy');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hi' || 25 || null);

restaurant.numGuests = 40;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 23;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

 */


/* 
const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);
 */


/* 
//Objects
const newRestaurant = {
    foundedIn: 1998,
    ...restaurant,
    Founder: 'Rakibul Hasan'
};
console.log(newRestaurant);

const restaurantCopy = {...restaurant };
restaurantCopy.resName = 'Focus Restaurant';
console.log(restaurantCopy.resName);
console.log(restaurant.resName);
 */
/* 
const arr = [7, 8, 9];

const badNewArr = [1, 5, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const NewArr = [1, 2, ...arr];
console.log(NewArr);
console.log(...NewArr);
console.log(...arr);

const newMenu = [...restaurant.mainMenu, 'Biriyani'];
console.log(newMenu);
 */

//copying array
/*
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const arrayJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(arrayJoin);
 */


/* restaurant.orderDelivery({
    time: '22:30',
    address: 'Brahmanbaria,3045',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Brahmanbaria,3045',
    starterIndex: 1,
});

//Object destructuring

const { resName, categories, openingHours } = restaurant;
console.log(resName, categories, openingHours);

const { resName: restaurantName, categories: tags, openingHours: hours } = restaurant;
console.log(restaurantName, tags, hours);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 'Apples';
let b = 'Balls';
const obj = { a: 150, b: 50 };
({ a, b } = obj);
console.log(a, b);

const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);

 */








/* const hridoy = {
    fullName: 'Rakibul Hasan',
    birthYear: 1997,
    isVerified: true,
};

// const { fullName, birthYear, isVerified } = hridoy;
const { fullName, ...others } = hridoy;
console.log(others);

const m = { p: 50, f: false };
const { p: park, f: field } = m;
console.log(park, field);

const userHridoy = {
    id: 9578,
    displayName: 'hridoyh69',
    fullName: {
        firstName: 'Hridoy',
        lastName: 'Hasan'
    },
};

function userId({ fullName, id }) {
    return `You name is ${fullName.firstName} ${fullName.lastName} and id is ${id}`;
};

console.log(userId(userHridoy));

const whois = function({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`
}

console.log(whois(userHridoy));

const people = [{
        fullName: 'Hridoy Hasan',
        family: {
            mother: 'Rabeya Khatun',
            father: 'Farid Hossain',
            brother: 'Riyad Hasan',
            girlFriend: null,
        }


    },

    {
        fullName: 'Sarah Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
    },
];

for (const { fullName: n, family: { father: f, mother: m } }
    of people) {
    console.log('fullName: ' + n + ', Father: ' + f + ', Mother: ' + m);
}; */

/*
//Destructing_array
const arr = [2, 4, 6];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;
console.log(x, z, y);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


//Swap variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);


console.log(restaurant.order(2, 0));

//receive two value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


//Nested Destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


let a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest);

({ a, b } = { a: 'neckles', b: 'diamond' });
console.log(a, b);


({ a, b, ...rest } = { a: 'glod', b: 'cooper', c: 30, d: 40 });
console.log(a, b, rest);

//swapping two values
const arry = [2, 4, 6];
[arry[0], arry[2]] = [arry[2], arry[0]];
console.log(arry);

function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log(parsedURL);
    // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
    // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));

<<<<<<< Updated upstream
*/



//Object destructuring

/* const hridoy = {
    fullName: 'Rakibul Hasan',
    birthYear: 1997,
    isVerified: true,
};
 */
// const { fullName, birthYear, isVerified } = hridoy;
/* const { fullName, ...others } = hridoy;
console.log(others);

const m = { p: 50, f: false };
const { p: park, f: field } = m;
console.log(park, field);

const userHridoy = {
    id: 9578,
    displayName: 'hridoyh69',
    fullName: {
        firstName: 'Hridoy',
        lastName: 'Hasan'
    },
};

function userId({ fullName, id }) {
    return `You name is ${fullName.firstName} ${fullName.lastName} and id is ${id}`;
};

console.log(userId(userHridoy));

const whois = function({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`
}

console.log(whois(userHridoy));

const people = [{
        fullName: 'Hridoy Hasan',
        family: {
            mother: 'Rabeya Khatun',
            father: 'Farid Hossain',
            brother: 'Riyad Hasan',
            girlFriend: null,
        }


    },

    {
        fullName: 'Sarah Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
    },
];

for (const { fullName: n, family: { father: f, mother: m } }
    of people) {
    console.log('fullName: ' + n + ', Father: ' + f + ', Mother: ' + m);
};  */