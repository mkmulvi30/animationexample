basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.pause(1000)
        basic.showString("...and away we go")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                . . . . .
                `)
        }
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showString("Kree8 2day")
    basic.showIcon(IconNames.Chessboard)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
