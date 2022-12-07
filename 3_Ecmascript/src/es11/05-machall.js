const regex = /\b(apple)+\b/g;

const fruit = 'apple, bannana kiwi, apple, orange, ect,etc';

for(const match of fruit.matchAll(regex)) {
    console.log(match);
}

//repasasr  --------

// const regex = /\b(Apple)+\b/g

// const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

// // Tranformación del iterable retornado a array
// const array = [...fruit.matchAll(regex)]
// console.log(array)