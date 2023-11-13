let student = 0
let collaborator = 0
let professor = 0
input.onButtonPressed(Button.A, function () {
    student = 25
    if (student) {
        basic.showArrow(ArrowNames.North)
        basic.showString("what is the problem?")
    }
})
input.onButtonPressed(Button.AB, function () {
    collaborator = 75
    if (collaborator) {
        basic.showArrow(ArrowNames.East)
    }
})
input.onButtonPressed(Button.B, function () {
    professor = 50
    if (professor) {
        basic.showArrow(ArrowNames.South)
    }
})
