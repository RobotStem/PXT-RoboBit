namespace MyRoboStem {
	/************************************************************************************************************************************************
	* Robot<>Stem<>Project<>micro:bit 
	************************************************************************************************************************************************/
    export enum Motors {
        //%blockId=RoboBit_motor_A
        //% block="motor A"
        MotorA,
         //%blockId=RoboBit_motor_B
        //% block="motor B"
        MotorB,
        //%blockId=RoboBit_motor_AB
        //% block="motor AB"
        MotorAB
    }

    export enum MotorDirection {
        //% block="forward"
        Forward,
        //% block="reverse"
        Reverse
    }

    export enum StopMode {
        //% block="brake"
        Brake,
        //% block="coast"
        Coast
    }

    export enum Flturn {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    export enum Rotated {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

     /**	
     * Turns on motor, forward, reverse at the requested speed 
     *
	 * @param motor which motor to turn on
	 * @param dir   which direction to go
	 * @param speed which slow/fast to spin the motor, eg:50
     */
    //% subcategory=RoboBit
    //% blockId=RoboBit_motor_on
    //% block="%motor|on, Direction %dir|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=90
    export function motorOn(Motor: Motors, dir: MotorDirection, speed: number): void {
        let motorspeed = pins.map(speed,0,100,0,1023)     
        switch (motor) {
            case Motors.MotorA: /*Motor A uses Pins 13 and 14*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P13, motorspeed);
                        pins.digitalWritePin(DigitalPin.P14, 0);
                        break
                    case MotorDirection.Reverse:
                        pins.analogWritePin(AnalogPin.P14, motorspeed);
                        pins.digitalWritePin(DigitalPin.P13, 0);
                        break
                }
                break;
            case Motors.MotorB: /*Motor B uses Pins 15 and 16*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P15, motorspeed);
                        pins.digitalWritePin(DigitalPin.P16, 0);
                        break
                    case MotorDirection.Reverse:
                        pins.analogWritePin(AnalogPin.P16, motorspeed);
                        pins.digitalWritePin(DigitalPin.P15, 0);
                        break
                }
                break;
	    case Motors.MotorAB: /*Motor AB uses Pins 13, 14, 15 and 16*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P13, motorspeed);
                        pins.digitalWritePin(DigitalPin.P14, 0);
			pins.analogWritePin(AnalogPin.P15, motorspeed);
                        pins.digitalWritePin(DigitalPin.P16, 0);
                        break
                    case MotorDirection.Reverse:
                        pins.analogWritePin(AnalogPin.P14, motorspeed);
                        pins.digitalWritePin(DigitalPin.P13, 0);
                        pins.analogWritePin(AnalogPin.P16, motorspeed);
                        pins.digitalWritePin(DigitalPin.P15, 0);
                        break
                }
                break;
        }
    }
    /**
     * Turns off the motor
     * @param motor :which motor to turn off
     */
    //% subcategory=RoboBit
    //% blockId=RoboBit_motor_off
    //% block="%motor|Stop %StopMode|mode"
    export function motorOff(Motor: Motors, Stop: StopMode): void {
        switch (motor) {
            case Motors.MotorAB:
                switch (Stop) {
                    case StopMode.Brake:
			pins.digitalWritePin(DigitalPin.P13, 1);
		        pins.digitalWritePin(DigitalPin.P14, 1);
			pins.digitalWritePin(DigitalPin.P15, 1);
		        pins.digitalWritePin(DigitalPin.P16, 1);
			break
                    case StopMode.Coast:
			pins.digitalWritePin(DigitalPin.P13, 0);
		        pins.digitalWritePin(DigitalPin.P14, 0);
			pins.digitalWritePin(DigitalPin.P15, 0);
		        pins.digitalWritePin(DigitalPin.P16, 0);
			break
                }
                break;
            case Motors.MotorA:
                switch (Stop) {
                    case StopMode.Brake:
			pins.digitalWritePin(DigitalPin.P13, 1);
		        pins.digitalWritePin(DigitalPin.P14, 1);
                        break
                    case StopMode.Coast:
			pins.digitalWritePin(DigitalPin.P13, 0);
		        pins.digitalWritePin(DigitalPin.P14, 0);
                        break
                }
                break;
            case Motors.MotorB:
                switch (Stop) {
                    case StopMode.Brake:
			pins.digitalWritePin(DigitalPin.P15, 1);
		        pins.digitalWritePin(DigitalPin.P16, 1);
                        break
                    case StopMode.Coast:
			pins.digitalWritePin(DigitalPin.P15, 0);
		        pins.digitalWritePin(DigitalPin.P16, 0);
                        break
                }
                break;
	}
    }

     /**Follow line turn Block, TurnLeft or TurnRight and speed motor.
      * @param turn	for turn Left or Right
      * @param speed	percent of maximum speed, eg: 50
      */
    //% subcategory=RoboBit
    //% blockId="RoboBit_followlineTURN"
    //% block="FollowlineTurn %turn|Speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=90
    export function followlineTURN(turn: FLturn, speed: number): void {       
      let motorspeed = pins.map(speed,0,100,0,1023)      
	switch (turn) {
            case Flturn.Left:
		pins.digitalWritePin(DigitalPin.P13, 0)
		pins.digitalWritePin(DigitalPin.P14, 0)
		pins.analogWritePin(AnalogPin.P15, motorspeed)
		pins.digitalWritePin(DigitalPin.P16, 0)
		break
            case Flturn.Right:
		pins.analogWritePin(AnalogPin.P13, motorspeed)
		pins.digitalWritePin(DigitalPin.P14, 0)
		pins.digitalWritePin(DigitalPin.P15, 0)
		pins.digitalWritePin(DigitalPin.P16, 0)
		break
        }
	break;
    }

	/**
	 * Execute single motors with delay
	 * @param index Motor Index; eg: M1A, M1B, M2A, M2B
	 * @param speed speed of motor; eg: 50
	 * @param delay seconde delay to stop; eg: 1
	*/
    //% subcategory=RoboBit
    //% blockId=RoboBit_rotate block="rotate|%index|speed %speed|delay %delay|s"
    //% weight=81
    //% speed.min=0 speed.max=100
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RotateDelay(index: Rotated, speed: number, delay: number): void {
      let motorspeed = pins.map(speed,0,100,0,1023)      
	switch (index) {
            case Rotated.Left:
		pins.analogWritePin(AnalogPin.P14, motorspeed)
		pins.digitalWritePin(DigitalPin.P10, 0)
		pins.analogWritePin(AnalogPin.P15, motorspeed)
		pins.digitalWritePin(DigitalPin.P16, 0)
		break
            case Rotated.Right:
		pins.analogWritePin(AnalogPin.P13, motorspeed)
		pins.digitalWritePin(DigitalPin.P14, 0)
		pins.analogWritePin(AnalogPin.P16, motorspeed)
		pins.digitalWritePin(DigitalPin.P15, 0)
		break
        }
	break;


    }


}

