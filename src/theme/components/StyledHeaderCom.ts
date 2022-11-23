import styled from "styled-components";

export const StyledHeader = styled.div`

position: fixed;
    width: 100%;
    background: white;
    z-index: 99;
    box-shadow: 6px 3px 13px 0px grey;
    background: #e4e4e4f8;

.header{
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-inline:20px;
    padding-block: 10px;
    .logo{
        position: absolute;
        top: 10px;
        left: calc(100% - 90%);
        cursor: pointer;
    }
    .greenBox{
        background: rgb(78, 197, 78);
        border-radius: 5px;
        padding-inline:5px ;
        padding-block:7px;
        p{
            
            color: white !important;
        }
    }
}
.second-header{
    background: white;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 25px;
    padding: 5px 15px 5px 5px;
}
.languages{
border:1px solid #26a9e0;
border-radius: 5px;
padding-inline:5px;
p{
    color: #26a9e0 !important;
}
}
.hoverEff{
transition: all 0.9s ease;
cursor: pointer;
    &:hover{
        p{
            color:  #26a9e0 !important;
        }
        svg{
            fill :  #26a9e0 !important;
        }
    }
}
@media(max-width:991px) {
    .header{
        height: 80px;
    }
    .mobile-view{
    display: block !important;
    }
    .desktop{
        display: none !important;
    }
}
`
export const StyledNavMobile = styled.div`
position: fixed;
top:0;
right: 0;
width: 0%;
height: 100%;
z-index: 99;
background: #e4e4e4f8;
transition: all 0.3s ease;
&.active{
    width: 70%;
    @media(max-width:400px){
        width: 90%;
    }
}

.input{
    background: transparent;
    border: 1px solid #2dc4ea;
    border-radius: 50px;
    padding: 7px;
    margin-right: 9px;
}
.search{
    border: 1px solid #2dc4ea;
    border-radius: 50px;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    cursor: pointer;
    &:hover{
        background-color: #2dc4ea;
        svg{
            fill: white;
        }
    }
}
.hoverEff{
transition: all 0.9s ease;
cursor: pointer;
    &:hover{
        p{
            color:  #26a9e0 !important;
        }
        svg{
            fill :  #26a9e0 !important;
        }
    }
}
`