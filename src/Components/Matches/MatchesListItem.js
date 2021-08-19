import React from "react";
import { ListItemContainer, PhotoPerfil } from "./styles"

function MatchesListItem(props) {
  const profile = props.profile
  return(
    <ListItemContainer>
      <PhotoPerfil src={profile.photo} />
      <p>{profile.name}</p>
    </ListItemContainer>
  )
}
export default MatchesListItem;
