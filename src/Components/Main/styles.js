import styled from "styled-components";

export const MainContainer = styled.div`
  border: 5px outset purple;
  border-radius: 10px;
  /* border-style: outset; */
  width: 400px;
  height: 600px;
  margin: 50px;
  display: flex;
  flex-direction: column;
`  
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ClearButton = styled.button`
  border-radius: 5px;
  width: 80%;
  background-color: #D121ED;
  font-size: 1.1rem;
  color: #fff;
`