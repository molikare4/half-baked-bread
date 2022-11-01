bitbot.go(BBDirection.FORWARD, 60)

def on_forever():
    bitbot.select_model(BBModel.XL)
    if bitbot.sonar(BBPingUnit.CENTIMETERS) < 30:
        bitbot.stop(BBStopMode.COAST)
        bitbot.set_led_color(0xFF0000)
        bitbot.led_clear()
        bitbot.set_led_color(0xFF0000)
        bitbot.led_clear()
basic.forever(on_forever)
