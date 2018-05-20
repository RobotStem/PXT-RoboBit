﻿//% weight=50 color="#ff6600" weight=10 icon="\uf11e"

namespace MyRobotBit {
	/************************************************************************************************************************************************
	* Robot<>Stem<>Project<>micro:bit 
	************************************************************************************************************************************************/
    export enum Motors {
        //% blockId=Motor_motor_A
        //% block="motor A"
        MotorA,
        //% blockId=Motor_motor_B
        //% block="motor B"
        MotorB,
        //% blockId=Motor_motor_AB
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

    export enum Rotated {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    export enum RotatedmS {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    export enum Turn {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

   export enum Servo {
	//% block="P0"
	Servo0,
	//% block="P1"
	Servo1,
	//% block="P2"
	Servo2,
	//% block="P3"
	Servo3,
	//% block="P4"
	Servo4,
	//% block="P10"
	Servo10,
	//% block="P5"
	Servo5,
	//% block="P6"
	Servo6,
	//% block="P7"
	Servo7,
	//% block="P8"
	Servo8,
	//% block="P9"
	Servo9,
	//% block="P11"
	Servo11,
	//% block="P12"
	Servo12
    }

   export enum Servo360 {
	//% block="P0"
	Servo0,
	//% block="P1"
	Servo1,
	//% block="P2"
	Servo2,
	//% block="P3"
	Servo3,
	//% block="P4"
	Servo4,
	//% block="P10"
	Servo10
    }

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
