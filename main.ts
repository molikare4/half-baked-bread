input.onButtonPressed(Button.A, function () {
    wooweeewooweee = 0
})
input.onButtonPressed(Button.B, function () {
    wooweeewooweee = 1
})
let wooweeewooweee = 0
bitbot.select_model(BBModel.XL)
let weeewooweeewoo = 40
basic.forever(function () {
    if (wooweeewooweee == 0) {
        if (bitbot.readLight(BBLightSensor.Left) + bitbot.readLight(BBLightSensor.Right) > weeewooweeewoo) {
            if (bitbot.readLight(BBLightSensor.Left) > bitbot.readLight(BBLightSensor.Right)) {
                bitbot.rotate(BBRobotDirection.Left, 60)
            } else if (bitbot.readLight(BBLightSensor.Left) < bitbot.readLight(BBLightSensor.Right)) {
                bitbot.rotate(BBRobotDirection.Right, 60)
            }
        } else {
            bitbot.go(BBDirection.Forward, 60)
        }
    } else if (wooweeewooweee == 1) {
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 10)
            bitbot.move(BBMotor.Right, BBDirection.Forward, 20)
        } else if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 0) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 20)
            bitbot.move(BBMotor.Right, BBDirection.Forward, 10)
        } else if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 1) {
            bitbot.stop(BBStopMode.Coast)
        }
    }
})
