// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Motorbike extends Vehicle {
    constructor(vin = "", color = "", make = "", model = "", year = 0, weight = 0, topSpeed = 0, wheels = []) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    printDetails() {
        super.printDetails();
        console.log(`Motorcycle make: ${this.make}`);
        console.log(`Motorcycle model: ${this.model}`);
        console.log(`Motorcycle VIN: ${this.vin}`);
        console.log(`Motorcycle Color: ${this.color}`);
        console.log(`Motorcycle Year: ${this.year}`);
        console.log(`Motorcycle Weight: ${this.weight}`);
        console.log(`Motorcylce Top Speed: ${this.topSpeed}`);
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
    }
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie`);
    }
}
export default Motorbike;
