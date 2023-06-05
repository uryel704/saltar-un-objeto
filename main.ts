input.onButtonPressed(Button.A, function () {
    jugador_arriba.change(LedSpriteProperty.Y, -1)
    jugador_abajo.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    jugador_arriba.change(LedSpriteProperty.Y, 1)
    jugador_abajo.change(LedSpriteProperty.Y, 1)
})
let jugador_abajo: game.LedSprite = null
let jugador_arriba: game.LedSprite = null
jugador_arriba = game.createSprite(1, 3)
jugador_abajo = game.createSprite(1, 4)
let obstaculo = game.createSprite(4, 4)
basic.forever(function () {
    obstaculo.change(LedSpriteProperty.X, -1)
    basic.pause(750)
    if (obstaculo.get(LedSpriteProperty.X) == 0) {
        obstaculo.set(LedSpriteProperty.X, 4)
    }
    if (obstaculo.isTouching(jugador_abajo)) {
        game.gameOver()
    }
    if (obstaculo.isTouching(jugador_arriba)) {
        game.gameOver()
    }
})
