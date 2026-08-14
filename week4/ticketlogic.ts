import { GST_RATE, CONVENIENCE_FEE } from "./constants.js";
import type { Passenger } from "./passenger.js";

export class Ticket {
    constructor(
        public passenger: Passenger,
        private baseFare: number,
        public trainNumber: number
    ) {}

    public calculateFinalFare(): number {
        const taxAmount = this.baseFare * GST_RATE;
        return this.baseFare + taxAmount + CONVENIENCE_FEE;
    }

    public printTicket(): void {
        console.log('--- E-Ticket Confirmed ---');
        console.log(`Passenger: ${this.passenger.name} (${this.passenger.age})`);
        console.log(`Train No: ${this.trainNumber}`);
        console.log(`Total Fare: ₹${this.calculateFinalFare()}`);
        console.log('--------------------------');
    }
}

const passenger: Passenger = {
    name: "Pranathi",
    age: 19
};

const ticket = new Ticket(
    passenger,
    1000,
    12345
);

ticket.printTicket();