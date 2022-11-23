import styled from 'styled-components'

export const HomeCom = styled.div`
position: relative;
padding-top:90px;
overflow-x: hidden;
.container-fluid{
    margin-top:85px;
}
.card-container{
    row-gap: 10px;
}
.banner{
    position: relative;
}
.graylayer{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(18 16 16 / 49%);
}
.middle-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
}
.border-left{
    border-right: 2px solid white;
}
.desc{
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
    @media(max-width:610px){
        margin-bottom: 0px;
    }
}
.sample-text{
    @media (max-width:576px){
        p{
            font-size: 14px;
        }
        img{
            width: 25px !important;
            height: 25px !important;
        }
    }
}

.laptop{
    display: flex;
    margin: auto;
}
.about{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    gap: 25px;
}
.box{
    position: absolute;
    z-index: -1;
    width: 100%;
    top: -7px;
    animation: circle 16s linear infinite;
}
@keyframes circle {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.borderBottom{
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(0.42turn,rgb(82 121 211),rgb(255 0 128 / 0%),rgba(56,2,155,0));
    border-image-slice: 1;
}
.buttonCom{
    width: fit-content;
    border-radius: 50px;
    padding-inline: 30px;
    background: linear-gradient(271deg, #3ae7ab, #2dc4ea);
    color: white;
    border: none;
    padding-block: 12px;
    transition: all 1s ease;
    &:hover{
        transition: all 2s ease;
        /* background: linear-gradient(27deg, #3fe7ab, #2dc4ea); */
        animation: myhero 1s linear infinite;
    }
    @keyframes myhero {
        0%{background: linear-gradient(27deg, #3fe7ab, #2dc4ea);};
        20%{background: linear-gradient(100deg, #3fe7ab, #2dc4ea);};
        30%{background: linear-gradient(180deg, #3fe7ab, #2dc4ea);};
        50%{background: linear-gradient(230deg, #3fe7ab, #2dc4ea);};
        80%{background: linear-gradient(290deg, #3fe7ab, #2dc4ea);};
        100%{background: linear-gradient(360deg, #3de7ab, #2dc5ea);box-shadow:1px 1px 1px gray;}

    }
}
.buttonCom2{
    width: fit-content;
    border-radius: 50px;
    padding-inline: 40px;
    background: linear-gradient(271deg, #3ae7ab, #2dc4ea);
    color: white;
    border: none;
    padding-block: 8px;
    transition: all 1s ease;
    &:hover{
        transition: all 2s ease;
        /* background: linear-gradient(27deg, #3fe7ab, #2dc4ea); */
        animation: myhero 1s linear infinite;
    }
    @keyframes myhero {
        0%{background: linear-gradient(27deg, #3fe7ab, #2dc4ea);};
        20%{background: linear-gradient(100deg, #3fe7ab, #2dc4ea);};
        30%{background: linear-gradient(180deg, #3fe7ab, #2dc4ea);};
        50%{background: linear-gradient(230deg, #3fe7ab, #2dc4ea);};
        80%{background: linear-gradient(290deg, #3fe7ab, #2dc4ea);};
        100%{background: linear-gradient(360deg, #3de7ab, #2dc5ea);box-shadow:1px 1px 1px gray;}

    }
}
.circle{
    width:25px;
    height: 25px;
    border:1px solid white;
    border-radius: 50%;
    background: white;
}
.anim{
transition: all 0.4s ease;
}
.hide{
    height: 0;
    overflow: hidden;
}
.maindesc{
    @media(max-width:800px){
        font-size: 14px;
    }
}
.mainhead{
    @media(max-width:800px){
        font-size: 25px;
    }
}
.challenges{
    .card{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 10px;
    border: none;
    margin-bottom: 20px;
    box-shadow: 0px 3px 10px #0000004d;
    p{
        color: black;
    }
    &.active{
        background: linear-gradient(90deg,#2DC4EA,#3AE7AB);
        p{
            color: white;
        }
    }
    }
}
.sec-section{
    position: relative;
    margin-top: calc(100% - 120%);
    border-radius: 10px;
    border: 14px solid black;
    @media(max-width:991px){
        margin-top: calc(100% - 110%);
    }
}
.laptopunder{
    display: flex;
    justify-content: center;
    margin-top: -5px;
}
.deskmob-slider{
    background: linear-gradient(to right,#f3f3f3 31%,#2DC4EA 50%,#2DC4EA 70%);
    @media(max-width:991px){
        background: linear-gradient(to bottom,#f3f3f3 31%,#2DC4EA 50%,#2DC4EA 70%);;
    }
}
@media(max-width:518px){
    .mainhead{
        font-size: 18px;
    }
    .maindesc{
        font-size: 11px;
    }
    .sample-text{
        p{
            font-size: 9px;
        }
    }
    .sec-section{
        margin-top: -10px;
    }
}
`