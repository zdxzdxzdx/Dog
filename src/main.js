
import stylecss from "./stylecss";
const player={
    id:undefined,
    time:100,
    ui:{
        demo:document.querySelector('#demo'),
        demo2:document.querySelector('#demo2')
    },
    n:1,

    init:()=>{
        player.ui.demo.innerText=stylecss.substr(0,player.n)
        player.ui.demo2.innerHTML=stylecss.substr(0,player.n)
        player.bindEvens()
        player.play()
    },
    evens:{
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    bindEvens:()=>{
        for(let key in player.evens) {
            if (player.evens.hasOwnProperty(key)) {
                const value = player.evens[key]
                //pause /play /slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run:()=>{
        player.n+=1
        if (player.n>stylecss.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText=stylecss.substr(0,player.n)
        player.ui.demo2.innerHTML=stylecss.substr(0,player.n )
        player.ui.demo.scrollTop=player.ui.demo.scrollHeight

    },
    play:()=>{
        player.id=setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time=300
        player.play()
    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play()
    },
    fast:()=>{
        player.pause()
        player.time=0
        player.play()
    }

}

player.init()
