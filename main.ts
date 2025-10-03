/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago baker
 * Created on: oct 2020
 * This program ...
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A,function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.p16, 1)
    pins.digitalWritePin(DigitalPin.p16, 0)
    pause(1000)
