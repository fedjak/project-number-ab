def on_button_pressed_a():
    global NumberA
    NumberA += 1
    basic.show_number(NumberA)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global NumberB
    NumberB += 1
    basic.show_number(NumberB)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_logo_down():
    basic.show_string("NumberA: " + str(NumberA))
    basic.pause(2000)
    basic.show_string("NumberB: " + str(NumberB))
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

NumberB = 0
NumberA = 0
basic.show_number(0)