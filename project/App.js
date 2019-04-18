// Import objects here
import Calculator from './Calculator'

// Global variables
let calc;

// The starting point for the application
export default class App {
    constructor (config) {
        console.log ('App is starting! Config:', config)

        calc = new Calculator (config);

        console.log ('Running complex equation');
        console.log (calc.planck (500, 5800))
    }
}
