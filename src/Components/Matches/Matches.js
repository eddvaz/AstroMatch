import React, { useEffect, useState } from "react";
import MatchesListItem from "./MatchesListItem";
import { ListContainer } from "./styles";
import axios from "axios"



function Matches() {
  const [matches, setMatches] = useState([])

  useEffect (()=> {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/edivaldo-vaz-munoz/matches")
    .then(response => {
      setMatches(response.data.matches)
    })
  })

  return(
    <>
      <ListContainer>
        {matches.map(profile => {
          return <MatchesListItem profile={profile} />
        })}
      </ListContainer>
    </>
  )
}
export default Matches;
