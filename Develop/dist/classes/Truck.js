// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Truck extends Vehicle {
    constructor(vin = "", color = "", make = "", model = "", year = 0, weight = 0, topSpeed = 0, wheels, towingCapacity = 0) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    tow(vehicle) {
        if ("make" in vehicle && "model" in vehicle) {
            console.log(`Car to Tow: ${vehicle.make} ${vehicle.model}`);
        }
        else {
            console.log("Vehicle details are not available.");
        }
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`The ${vehicle.make} ${vehicle.model} will be towed.`);
        }
        else {
            console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to too.`);
        }
    }
    printDetails() {
        super.printDetails();
        console.log(`Truck make: ${this.make}`);
        console.log(`Truck model: ${this.model}`);
        console.log(`Truck towing capacity: ${this.towingCapacity}`);
        console.log(`Truck VIN: ${this.vin}`);
        console.log(`Truck Color: ${this.color}`);
        console.log(`Truck Year: ${this.year}`);
        console.log(`Truck Weight: ${this.weight}`);
        console.log(`Truck Top Speed: ${this.topSpeed}`);
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
    }
}
export default Truck;
