//% weight=50 color="#ff6600" weight=10 icon="\uf11e"

namespace RoboBit {
	/************************************************************************************************************************************************
	* Robot<>Stem<>Project<>micro:bit 
	************************************************************************************************************************************************/
export enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

export enum Ultrasonic {
	//% block="1"
        Ultrasonic1,
	//% block="2"
	Ultrasonic2,
	//% block="3"
	Ultrasonic3

    }
	
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param sonar tigger pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=sonar_ping block="Ultrasonic %sonar|unit %unit"
    export function ping(sonar: Ultrasonic, unit: PingUnit, maxCmDistance = 500): number {
      switch (sonar) {
	      case Ultrasonic.Ultrasonic1:
			pins.setPull(P7, PinPullMode.PullNone);
        		pins.digitalWritePin(P7, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(P7, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(P7, 0);
       			 // read pulse
        		const d = pins.pulseIn(P6, PulseValue.High, maxCmDistance * 58);
			    switch (unit) {
            			case PingUnit.Centimeters: return d / 58;
            			case PingUnit.Inches: return d / 148;
            			default: return d ;
        		    }
	      case Ultrasonic.Ultrasonic2:
			pins.setPull(P9, PinPullMode.PullNone);
        		pins.digitalWritePin(P9, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(P9, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(P9, 0);
       			 // read pulse
        		const d = pins.pulseIn(P8, PulseValue.High, maxCmDistance * 58);
			    switch (unit) {
            			case PingUnit.Centimeters: return d / 58;
            			case PingUnit.Inches: return d / 148;
            			default: return d ;
        		    }
		
	      case Ultrasonic.Ultrasonic3:
			pins.setPull(P12, PinPullMode.PullNone);
        		pins.digitalWritePin(P12, 0);
        		control.waitMicros(2);
        		pins.digitalWritePin(P12, 1);
        		control.waitMicros(10);
        		pins.digitalWritePin(P12, 0);
       			 // read pulse
        		const d = pins.pulseIn(P11, PulseValue.High, maxCmDistance * 58);
			    switch (unit) {
            			case PingUnit.Centimeters: return d / 58;
            			case PingUnit.Inches: return d / 148;
            			default: return d ;
        		    }    
             }
 
        }
}
