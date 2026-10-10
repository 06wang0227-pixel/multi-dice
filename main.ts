input.onButtonPressed(Button.B, function () {
    music.ringTone(587)
    basic.showIcon(IconNames.Pitchfork)
})
basic.pause(5000)
basic.forever(function () {
    music.play(music.stringPlayable("A B A G A B A G ", 120), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
})
