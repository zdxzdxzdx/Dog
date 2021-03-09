
const stylecss= `
#html {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffe600;
}
.main{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


.dog{
    width: 20.5vmax;
    height: 8.25vmax;
    position: absolute;
    border-top-right-radius: 3vmax;
    border-top-left-radius: 3vmax;
    border-bottom-left-radius: 5vmax;
    background: #ff702e;


}
.dog::before{
    content: '';
    position: absolute;
    right: -0.8vmax;
    bottom: -1.3vmax;
    width: 100%;
    height: 1.5vmax;
    border-radius: 50%;
    background: rgba(28,49,48,0.1);
    animation: shadow 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
    z-index: -5;
}

@keyframes shadow {
    0%, 10%, 20%, 26%, 28%, 30%, 84%, 100% {
        width: 99%; }
    5%, 15%, 22%, 24% {
        width: 101%; }
    34%, 81% {
        width: 96%; } }

.paws {
    width: 20vmax;
    height: 6vmax;
    display: flex;
    position:relative ;
    justify-content: space-between;
    left: 9.8vmax;
    top: 6.5vmax;

}

.back_leg{
    position: relative;
    z-index: 2;
}
.back_paw{
    width: 2.625vmax;
    height: 4.5vmax;
    transform: rotate(75deg);
    border-radius: 1.6vmax;
    position: absolute;
    right: 0;
    top: -1.1vmax;
    background: #ff8b56;


}
.back_top {
    width: 3.75vmax;
    height: 4.6vmax;
    position: absolute;
    right: 1.5vmax;
    top: 0.6vmax;
    background: #d7dbd2;

}
.top1{
    border-radius: 100px 100px 0 0;
    height: 2.3vmax;
}
.aside_leg{
    position: relative;
    z-index: -1;
}
.aside_top{
    width: 3.75vmax;
    height: 4.6vmax;
    position: absolute;
    background: #d7dbd2;
    right: 24vmax;
    z-index: -1;

}


.front_leg{
    position: relative;
    z-index: 2;
}
.front_paw{

    width: 2.625vmax;
    height: 4.5vmax;
    transform: rotate(75deg);
    border-radius: 1.6vmax;
    position: absolute;
    right: 0;
    top: -1.1vmax;
    background: #ff8b56;
    overflow: hidden;
}
.front_top {
    width: 3.75vmax;
    height: 4.6vmax;
    position: absolute;
    right: 1.5vmax;
    top: 0.6vmax;
    background: #d7dbd2;
}
.top2{
    border-radius: 100px 100px 0 0;
    height: 2.3vmax;
}

.all_head{
    position: absolute;
    animation: head 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
}
.head{
    width: 9.9vmax;
    height:8.75vmax ;
    border-radius: 4.05vmax 4.05vmax 3.3vmax 3.3vmax;
    position: relative;
    left: -3vmax;
    background:#ff8147 ;
    z-index: 100;

}
@keyframes head {

    0%,10%,20%,26%,28%,90%,100%{
        height: 8.25vmax;
        bottom: 0;
        transform-origin: bottom right;
        transform: rotateZ(0);
    }
    5%,15%,22%,24%,30%{
        height: 8.1vmax;
    }
    32%,50%{
        height: 8.25vmax;
    }
    55%,60%{
        bottom: 0.75vmax;
        transform-origin: bottom right;
        transform: rotateZ(0);
    }
    70%,80% {
        bottom: 0.75vmax;
        transform-origin: bottom right;
        transform: rotateZ(10deg);
    }
}
.snout{

    width: 7.5vmax;
    height: 3.75vmax;
    border-radius: 0 3vmax  3vmax 5vmax;
    position: relative;
    top: 4.9vmax;
    right: 2vmax;
    background: #d7dbd2;

}
.snout::before{
        content: '';
        position: absolute;
        width: 1.875vmax;
        height: 1.125vmax;
        border-radius: 3vmax  3vmax 4.5vmax;
        background: #1c3130;
         top: -0.1vmax;
    animation: snout 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;

}

@keyframes snout {
    0%, 10%, 20%, 26%, 28%, 98%, 100% {
        width: 1.875vmax;
    }
    5%, 15%, 22%, 24% {
        width: 1.8vmax; }
    34%, 98% {
        width: 1.275vmax; }
}

.nose {

    width: 0.75vmax;
    height: 2.4vmax;
    border-radius: 3vmax;
    position: absolute;
    left: 3.5vmax;
    top: -2vmax;
    background: #d7dbd2;
}

.eyes{
    position: relative;
}
.left_eye {
    width:0.675vmax ;
    height:0.375vmax ;
    position: absolute;
    top: -1.4vmax;
    left: 2.4vmax;
    background: #1c3130;
    animation: eye 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;
}
.right_eye{
    width:0.675vmax ;
    height:0.375vmax ;
    position: absolute;
    top: -1.4vmax;
    left: 5vmax;
    background: #1c3130;
    animation: eye 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;

}

@keyframes eye  {
    0%, 30% {
        width: 0.675vmax;
        height: 0.3vmax; }

    32%, 59%, 90%, 100% {
        width: 0.525vmax;
        height: 0.525vmax;
        transform: translateY(0); }
    60%, 75% {
        transform: translateY(-0.3vmax); }
    80%, 85% {
        transform: translateY(0.15vmax); }
}


.head-ear {
    position: absolute;

}

.right_ear{
    width: 10.5vmax;
    height: 3.375vmax;
    border-bottom-left-radius: 3vmax;
    border-bottom-right-radius:3vmax ;
    transform: rotate(-60deg);
    position: absolute;
    top: -10vmax;
    left: 0;
    background: #e26538;
    animation: right_ear 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;

}
@keyframes right_ear {
    0%, 10%, 20%, 26%, 28% {
        transform: rotateZ(-60deg); }
    5%, 15%, 22%, 24% {
        transform: rotateZ(-58deg); }
    30%, 31% {
        transform: rotateZ(-50deg); }
    32% {
        transform: rotateZ(-65deg);
    }
    /*70%,80% {*/
    /*    transform: rotateZ(-80deg);*/
    /*}*/
}



.left_ear{
    width: 10.5vmax;
    height: 3.375vmax;
    border-bottom-left-radius: 3vmax;
    border-bottom-right-radius:3vmax ;
    transform: rotate(40deg);
    position: absolute;
    top: -9vmax;
    left:-5vmax;

    background: #e26538;
    animation:  left_ear 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite ;
}



@keyframes left_ear {

    0%, 10%, 20%, 26%, 28%, 82%, 100% {
        transform: rotateZ(40deg); }
    5%, 15%, 22%, 24% {
        transform: rotateZ(38deg); }
    30%, 31% {
        transform: rotateZ(30deg); }
    32%, 80% {
        transform: rotateZ(50deg); }
}

.dog_body{
    position: relative;

}
.tail{
    width: 4.5vmax;
    height: 1.5vmax;
    position: absolute;
    border-radius: 3vmax ;
    z-index: 1;
    left: 20vmax;
    top: 0.8vmax;
    background: #e96839;
}

`

export  default stylecss;
