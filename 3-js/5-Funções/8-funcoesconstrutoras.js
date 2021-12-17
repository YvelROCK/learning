/* 
    Function() contructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

let date = new Date("2000-12-02");

console.log(date);

function Person(name, age, height, weight, study){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.study = function() {
        if (study == "sim") {
            return this.name + " está estudando";    
        }else {
            return this.name + " não está estudando";    
        }
    }
}
const Levy = new Person("Levy", 24, 1.72, 82, "não");
const Isaac = new Person("Isaac", 20, 1.70, 130,"sim");

console.log(Levy.study());
console.log(Isaac.study());
