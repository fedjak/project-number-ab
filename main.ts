input.onButtonPressed(Button.A, function () {
    NumberA += 1
    basic.showNumber(NumberA)
})
input.onButtonPressed(Button.B, function () {
    NumberB += 1
    basic.showNumber(NumberB)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("NumberA: " + ("" + NumberA))
    basic.pause(2000)
    basic.showString("NumberB: " + ("" + NumberB))
})
let NumberB = 0
let NumberA = 0
basic.showNumber(0)
