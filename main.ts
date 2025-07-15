input.onButtonPressed(Button.A, function () {
    NumberA += 1
    basic.showNumber(NumberA)
})
input.onButtonPressed(Button.B, function () {
    NumberB += 1
    basic.showNumber(NumberB)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("NumberA is " + ("" + NumberA))
    basic.pause(1000)
    basic.showString("NumberB is " + ("" + NumberB))
})
let NumberB = 0
let NumberA = 0
basic.showNumber(0)
