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

     
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     *
     * @param trig	tigger pin
     * @param echo	echo pin
     * @param unit	desired conversion unit
     * @param distance	maximum distance in centimeters, eg: 10
     */
    //% subcategory=Sensor
    //% blockId=Sensor_ping block="SR04 ping trig %trig|echo %echo|unit %unit"
    //% distance.min=0 distance.max=500
    export function SensorPING(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, distance: number): void {
	switch (unit) {
            case PingUnit.Centimeters:
		pins.digitalWritePin(trig, 0);
		control.waitMicros(2);
		pins.digitalWritePin(trig, 1);
		control.waitMicros(10);
		pins.digitalWritePin(trig, 0);
		const distance = pins.pulseIn(echo, PulseValue.High) / 58 ;
		break
            case PingUnit.Inches:
		pins.digitalWritePin(trig, 0);
		control.waitMicros(2);
		pins.digitalWritePin(trig, 1);
		control.waitMicros(10);
		pins.digitalWritePin(trig, 0);
		const distance = pins.pulseIn(echo, PulseValue.High) / 148 ;
		break
            case PingUnit.MicroSeconds:
		pins.digitalWritePin(trig, 0);
		control.waitMicros(2);
		pins.digitalWritePin(trig, 1);
		control.waitMicros(10);
		pins.digitalWritePin(trig, 0);
		const distance = pins.pulseIn(echo, PulseValue.High);
		break

        }
    }

}
