/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program lights up single LED
 * Created by: Tiago baker
 * Created on: oct 2020
 * This program ...
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//input.onButtonPressed(Button.A,function () {
    //pins.digitalWritePin(DigitalPin.P13,
//
// Define RGB LED pins
let red = DigitalPin.P13
let green = DigitalPin.P14
let blue = DigitalPin.P15

// Helper function to set color
function setColor(r: number, g: number, b: number) {
    pins.digitalWritePin(red, r)
    pins.digitalWritePin(green, g)
    pins.digitalWritePin(blue, b)
}

input.onButtonPressed(Button.A, function () {
    // Red
    setColor(1, 0, 0)
    basic.pause(1000)

    // Green
    setColor(0, 1, 0)
    basic.pause(1000)

    // Blue
    setColor(0, 0, 1)
    basic.pause(1000)

    // Yellow (Red + Green)
    setColor(1, 1, 0)
    basic.pause(1000)

    // Cyan (Green + Blue)
    setColor(0, 1, 1)
    basic.pause(1000)

    // Magenta (Red + Blue)
    setColor(1, 0, 1)
    basic.pause(1000)

    // White (Red + Green + Blue)
    setColor(1, 1, 1)
    basic.pause(1000)

    // Turn off LED
    setColor(0, 0, 0)
})
