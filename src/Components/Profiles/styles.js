import styled from "styled-components";

// Styles da Página ProfileCard
export const CardContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
`

export const ProfileImg = styled.img`
  display: block;
  height: 400px;
  max-width: 100%;
  filter: drop-shadow(2px 4px 8px #585858);
  border-radius: 10px;
  z-index: 1;
`
export const ProfileInfo = styled.div`
	height: 400px;
	position: absolute;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	z-index: 2;
  width: 60%;
`
export const ProfileName = styled.h1`
  color: #d121ed;
`
export const ProfileBio = styled.h4`
  color: #d121ed;
  font-size: 16px;
  display: flex;
`
//---------------------------------------------------------

// Styles da Página ChooseButtons
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  padding: 20px;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: none ;
  border-radius: 50%;
  color: #ff0000;
  cursor: pointer;
    :hover{
        background-color: #ff0000;
        color: #ffffff;
        transform: scale(1.1);
        transition: all 0.7s;
    }
    :last-child{
        border: none;
        color: #34AAA9;
        :hover{
        background-color: #34AAA9;
        color: #ffffff;
      }
    }
`
//---------------------------------------------------------

export const CircularProgress = styled.div`
  padding: 50px;
`

