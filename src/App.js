import React from "react";
import Main from "./Components/Main/main";
import styled from "styled-components";

const GlobalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  
`

function App() {
  return(
    <GlobalContainer>
      <Main />
    </GlobalContainer>
  )
}
export default App;
