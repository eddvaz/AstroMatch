import axios from "axios";
import React, { useState } from "react";
import AppBar from "../AppBar/appBar";
import Matches from "../Matches/Matches";
import Profiles from "../Profiles/profiles";
import {MainContainer, ButtonContainer ,ClearButton} from "./styles"

function Main() {


  const [selectPage, setSelectPage] = useState("choose-profile")

  const renderPage = () => {
    switch (selectPage) {
      case "choose-profile":
        return <Profiles />
      case "match-list":
        return <Matches />
      default:
        return <Profiles />  
    }
  }

  const goToProfiles = () => {
    setSelectPage("choose-profile")
  }

  const goToMatches = () => {
    setSelectPage("match-list")
  }

  const limparMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/edivaldo-vaz-munoz/clear")
    .then(response => {
      alert("Seus Matches foram excluídos!!")
    })
  }

  return(
    <>
      <MainContainer>
        <AppBar 
          goToProfiles={goToProfiles} 
          goToMatches={goToMatches}/>
        {renderPage()}
      </MainContainer>
      <ButtonContainer>
        <ClearButton onClick={limparMatches}>Limpar Matches!</ClearButton>
      </ButtonContainer>
    </>
  )
}
export default Main;
