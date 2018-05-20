//% weight=50 color="#ff6600" weight=10 icon="\uf11e"

namespace RoboBit {
	/************************************************************************************************************************************************
	* Robot<>Stem<>Project<>micro:bit 
	************************************************************************************************************************************************/
export enum PingUnit {
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches,
    //% block="μs"
    MicroSeconds
}

export enum Ultrasonic {
	//% block="1"
        ultrasonic1,
	//% block="2"
	ultrasonic2,
	//% block="3"
	ultrasonic3
    }
	
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param sonar tigger pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=sonar_ping block="Ultrasonic %sonar|unit %unit"
    export function ping(sonar: Ultrasonic, unit: PingUnit, maxCmDistance = 500): void {
      switch (sonar) {
	      case Ultrasonic.ultrasonic1:
			pins.setPull(DigitalPin.P7, PinPullMode.PullNone);
        		pins.digitalWritePin(DigitalPin.P7, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(DigitalPin.P7, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(DigitalPin.P7, 0);
       			 // read pulse
        		const d = pins.pulseIn(DigitalPin.P6, PulseValue.High, maxCmDistance * 58);
			    switch (unit) {
            			case PingUnit.Centimeters:
				     return d / 58;
            			case PingUnit.Inches:
				     return d / 148;
            			default: return d ;
        		    }
			break;
	      case Ultrasonic.ultrasonic2:
			pins.setPull(DigitalPin.P9, PinPullMode.PullNone);
        		pins.digitalWritePin(DigitalPin.P9, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(DigitalPin.P9, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(DigitalPin.P9, 0);
       			 // read pulse
        		const d = pins.pulseIn(DigitalPin.P8, PulseValue.High, maxCmDistance * 58);
			    switch (unit) {
            			case PingUnit.Centimeters:
				     return d / 58;
            			case PingUnit.Inches:
				     return d / 148;
            			default: return d ;
        		    }
			break;
	      case Ultrasonic.ultrasonic3:
			pins.setPull(DigitalPin.P12, PinPullMode.PullNone);
        		pins.digitalWritePin(DigitalPin.P12, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(DigitalPin.P12, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(DigitalPin.P12, 0);
       			 // read pulse
        		const d = pins.pulseIn(DigitalPin.P11, PulseValue.High, maxCmDistance * 58);
			    switch (unit) {
            			case PingUnit.Centimeters:
				     return d / 58;
            			case PingUnit.Inches:
				     return d / 148;
            			default: return d ;
        		    }   
			break;
             }
        }
}
