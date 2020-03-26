const menu = {
  _courses: { 
   appetizers: [],
   mains: [],
  desserts: []
},
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set appetizer(item) {
    this._courses.appetizers.push(item);
  },
  set mains (item) {
    this._courses.mains.push(item);
  },
  set desserts (item) {
    this._courses.desserts.push(item);
  },
  get courses () {
    return  {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }; 
  },
addDishToCourse (courseName, dishName, dishPrice) {
   const dish = {
     name: dishName,
     price: dishPrice
   }
  this._courses[courseName].push(dish);
},
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
     const main = this.getRandomDishFromCourse('mains');
     const dessert = this.getRandomDishFromCourse('desserts');
  
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `You have selected ${appetizer.name}, ${main.name}, ${dessert.name} and total price is ${totalPrice}`;
}};

menu.addDishToCourse('mains', 'beef tenderloin', 35);
menu.addDishToCourse('appetizers', 'ceasar salad', 15);
menu.addDishToCourse('desserts', 'blueberry cheesecake', 10);

const meal = menu.generateRandomMeal();
console.log(meal);








