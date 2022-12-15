let kostka = 0
let score = 0
// basic.showNumber(3)
// basic.pause(200)
// basic.showNumber(2)
// basic.pause(200)
// basic.showNumber(1)
// basic.pause(200)
    input.onShake(function(){
        let kostka = randint(1,6)   
    if (kostka == 1){
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        score += 1
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    else if (kostka == 2){
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        score += 1
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    else if (kostka == 3){
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        score += 1
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    else if (kostka == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        score += 1
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    else if (kostka == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        score += 1
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
        music.playTone(Note.A, music.beat(BeatFraction.Whole))
        whaleysans.showNumber(score)
        basic.pause(2500)
        score = 0
    }
    })