import styled from "styled-components";

export const StyledFooter = styled.div`
background-color:#000000b5;

.mainDiv{
    
    li{
        color: white;
    }
    ul{
        list-style: none;
        li{
            display: flex;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 6px;
        }
        .dot{
            width: 5px;
            height: 5px;
            margin-top: 10px;
            border-radius: 50%;
            background: white;
            border: none;
        }   
    }
}
.box{
    background: #2DC4EA;
    padding: 8px;
    border: none;
}
.input{
    background: transparent;
    border: 1px solid white;
    padding: 7px;
    margin-right: 9px;
}
.opacity0{
    opacity: 0;
}
.opacity1{
    opacity: 1;
}
.white{
    color: white;
}
`