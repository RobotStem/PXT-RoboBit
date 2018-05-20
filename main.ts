enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

enum Ultra {
	//% block="1"
        ultrasonic1,
	//% block="2"
	ultrasonic2,
	//% block="3"
	ultrasonic3
    }
/**
 * Sonar and ping utilities
 */
//% color="#2c3e50" weight=10
namespace Ultrasonic {
    /**
     * Ultrasonic SR04 Send and echo time in microseconds
     * @param sonar select sonar
     * @param unit  desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=sonar_ping block="Ultrasonic %sonar|unit %unit"
    export function ping(sonar: Ultra, unit: PingUnit, maxCmDistance = 500): number {
	switch (sonar) {
	      case Ultra.ultrasonic1:
	              // send pulse
        		pins.digitalWritePin(DigitalPin.P7, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(DigitalPin.P7, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(DigitalPin.P7, 0);
       			 // read pulse
		        const d = pins.pulseIn(DigitalPin.P6, PulseValue.High, maxCmDistance * 58);
		   switch (unit) {
			case PingUnit.Centimeters: return d / 58;
			case PingUnit.Inches: return d / 148;
			default: return d ;
			}
	      case Ultra.ultrasonic2:
	              // send pulse
        		pins.digitalWritePin(DigitalPin.P9, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(DigitalPin.P9, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(DigitalPin.P9, 0);
       			 // read pulse
		        const d = pins.pulseIn(DigitalPin.P8, PulseValue.High, maxCmDistance * 58);
		   switch (unit) {
			case PingUnit.Centimeters: return d / 58;
			case PingUnit.Inches: return d / 148;
			default: return d ;
			}
	      case Ultra.ultrasonic3:
	              // send pulse
        		pins.digitalWritePin(DigitalPin.P12, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(DigitalPin.P12, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(DigitalPin.P12, 0);
       			 // read pulse
		        const d = pins.pulseIn(DigitalPin.P11, PulseValue.High, maxCmDistance * 58);
		   switch (unit) {
			case PingUnit.Centimeters: return d / 58;
			case PingUnit.Inches: return d / 148;
			default: return d ;
			}
	brake;
	}
    }
}
