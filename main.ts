radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wooweeewooweee = 0
    } else if (receivedNumber == 2) {
        bitbot.stop(BBStopMode.Coast)
    } else if (receivedNumber == 3) {
        stor_fart = 30
        liten_fart = 15
    } else if (receivedNumber == 4) {
        stor_fart = 10
        liten_fart = 5
    } else if (receivedNumber == 5) {
        if (ny_variabel == 1) {
            ny_variabel = 0
        } else {
            ny_variabel = 1
        }
    } else if (receivedNumber == 6) {
        wooweeewooweee = 0
    }
})
input.onButtonPressed(Button.A, function () {
    wooweeewooweee = 0
})
input.onButtonPressed(Button.B, function () {
    wooweeewooweee = 1
})
let fart = 0
let ny_variabel = 0
let liten_fart = 0
let stor_fart = 0
let wooweeewooweee = 0
bitbot.select_model(BBModel.XL)
let weeewooweeewoo = 40
basic.forever(function () {
    if (wooweeewooweee == 0) {
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, liten_fart)
            bitbot.move(BBMotor.Right, BBDirection.Forward, stor_fart)
            bitbot.ledClear()
        } else if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 0) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, stor_fart)
            bitbot.move(BBMotor.Right, BBDirection.Forward, liten_fart)
            bitbot.ledClear()
        } else if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 1) {
            if (ny_variabel == 0) {
                bitbot.stop(BBStopMode.Coast)
                music.play(music.stringPlayable("C C C C - - - - ", 120), music.PlaybackMode.UntilDone)
                bitbot.goms(BBDirection.Forward, 60, 400)
                bitbot.setLedColor(0xFF0000)
            }
        }
    } else if (wooweeewooweee == 1) {
        bitbot.goms(BBDirection.Forward, 60, 400)
        bitbot.rotatems(BBRobotDirection.Right, 60, 255)
        for (let index = 0; index < 4; index++) {
            fart += 50
            for (let index = 0; index < 4; index++) {
                bitbot.goms(BBDirection.Forward, 60, fart)
                bitbot.rotatems(BBRobotDirection.Left, 60, 230)
            }
        }
    }
})
