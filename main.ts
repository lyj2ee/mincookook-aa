info.startCountdown(3)
game.splash("Mincookook官方复读机")
game.splash("请不要更改作品")
game.splash(game.askForString("显示的文字"))
forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
