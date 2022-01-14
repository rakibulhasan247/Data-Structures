'use strict';


const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const restaurant = {
    resName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
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
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};
/* 
const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);
 */

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

*/