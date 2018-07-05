var b = require('bonescript');

// Setting the freq to 12kHz,  Duty is 0% to 100%
var PWM_PIN = 'P9_14';
var duty_min = 0;
var duty_max = 100;
var duty = 0;
var freq = 12000;
var increment = 10;

// Set up the mode for the PWM_PIN pin
b.pinMode(PWM_PIN, b.ANALOG_OUTPUT);
updateDuty();
console.log('Use keyboard Control-C to stop');

function updateDuty() {
	// This function calculates and adjusts the duty cycle based on a desired duty in range 0 to 100
	var duty_cycle = (duty*0.01) + duty_min;
	b.analogWrite(PWM_PIN, duty_cycle, freq, scheduleNextUpdate);
	// Print out the values of duty_cycle and duty variables for debugging
	console.log('duty cycle: ' + parseFloat(duty_cycle).toFixed(1) + ' duty: ' + duty + '%');
}

function scheduleNextUpdate() {
	// adjust duty by increment and decrement if it exceeds range of 0 to 100
	duty = duty + increment;
	if(duty < 0) {
		duty = 0;
		increment = -increment;
	}
	else if(duty > 100) {
		duty = 100;
		increment = -increment;
	}
// call updateDuty after 500ms
setTimeout(updateDuty, 500);
}
