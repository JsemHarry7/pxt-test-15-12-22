let score = 0
let kostka = 0
basic.forever(function(){
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
        score + 1
        music.ringTone(Note.C)
    }
    else if (kostka == 2){
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        score + 1
        music.ringTone(Note.C)
    }
    else if (kostka == 3){
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        score + 1
        music.ringTone(Note.C)
    }
    })
    
})