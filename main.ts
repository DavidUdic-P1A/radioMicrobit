radio.setGroup(213)
radio.setFrequencyBand(7)

radio.onReceivedNumber(function (receivedNumber) {
    console.log(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(78)
})
radio.onReceivedValue(function (name, value) {
	
})
radio.onReceivedValue(function(name: string, value: number) {
    console.log(name)
    console.log(value)
})