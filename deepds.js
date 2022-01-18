'use strict';
/* //Array Destruction
const hridoyArr = ['Hridoy Hasan', 24, 'Freelancer'];

const [fullName, age, profession] = hridoyArr;
console.log(fullName);

//Object Destruction
const hridoyObj = {
    fullName2: 'Rakibul Hasan',
    age2: 24,
    profession2: 'Programmer'
};

const { fullName2, age2, profession2 } = hridoyObj;
console.log(fullName2);

*/



const restaurant2 = {
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
    orderDelivery: function({ starterIndex, mainIndex, time, address }) {
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

restaurant2.orderDelivery({
    time: '22: 30',
    address: 'Kawtoly, Brahmanbaria-3400',
    mainIndex: 2,
    starterIndex: 2,
});




/* 
let [main, , secondary] = restaurant2.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

const miahClan = {
    grandFather: ['Mohammad Hossain', 'Landlord', 'Tripura Agartala'],
    father: ['Farid Hossain', 'Business Man', 'Dubai'],
    me: ['Rakibul Hasan', 'Freelance Programmer', 'Brahmanbaria'],

    callMe: function(grand, grandSon) {
        return [this.grandFather[grand], this.me[grandSon]];
    },

};

const [dadaName, natiProfession] = miahClan.callMe(0, 1);
console.log(dadaName, natiProfession); */