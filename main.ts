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
		
	      case Ultrasonic.Ultrasonic2:
		
	      case Ultrasonic.Ultrasonic3:
	
		      
      }
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return d / 58;
            case PingUnit.Inches: return d / 148;
            default: return d ;
        }
    }
}
