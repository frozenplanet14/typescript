console.log('Hello TypeScript!');

// 1. Defining function inside an object
const pizza = {
  name: 'Pepperoni',
  size: 'medium',
  getName() {
    return this.name;
  }
}

console.log(1, pizza.getName());

// 2. Defining object with variable name as key
const combo = {
  pizza,
  topping: []
}

console.log(2, combo);

// 3. Defining Rest parameter with function arguments
function sumAll(message: string, ...args: number[]) {
  console.log(3, `message: ${message}!`);
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(3, sumAll('Hello World', 1, 2, 3, 4, 5));

// 4. Spread operator
const toppings = ['bacon', 'chilli'];
const newToppings = ['pepperoni'];

const allToppings = [...toppings, ...newToppings];

console.log(4, allToppings);

// 5. Spread object property
const order = {
  ...pizza,
  toppings
};

console.log(5, order);

// 6. destructuring array and object and renaming while doing so
const pizza6 = {
  name: 'Pepperoni',
  topping: ['pepperoni']
};

function orderPizza({name, topping: pizzaToppings}: typeof pizza6) {
  console.log(6, name, pizzaToppings);
  return {pizzaName: name, pizzaToppings};
}

// similar to import statement
const {pizzaName} = orderPizza(pizza6);

const toppings6 = ['pepperoni', 'bacon', 'mushroom' , 'chilli'];

const [first, , third] = toppings6;
// pepperoni mushroom
console.log(6, first, third);
