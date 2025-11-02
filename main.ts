/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program lights up single LED 
*/

// Define RGB LED pins
let red = DigitalPin.P13
let green = DigitalPin.P14
let blue = DigitalPin.P15

input.onButtonPressed(Button.A, function () {
    // Red
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 0)
    basic.pause(1000)

    // Green
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 0)
    basic.pause(1000)

    // Blue
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // Yellow (Red + Green)
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 0)
    basic.pause(1000)

    // Cyan (Green + Blue)
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // Magenta (Red + Blue)
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // White (All on)
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // Turn all off
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 0)
})
