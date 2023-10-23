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
    	
    } else if (false) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    wooweeewooweee = 0
})
input.onButtonPressed(Button.B, function () {
    wooweeewooweee = 1
})
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
        } else if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 0) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, stor_fart)
            bitbot.move(BBMotor.Right, BBDirection.Forward, liten_fart)
        } else if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 1) {
        	
        }
    } else if (wooweeewooweee == 1) {
    	
    }
})
