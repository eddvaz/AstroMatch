import styled from "styled-components";

//Style da Página Matches
export const ListContainer = styled.div`
padding: 8px;
`
//----------------------------------------------------------

//Style da Página MatchesListItem

export const ListItemContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  border-bottom: 1px solid gray;

  :hover {
    background-color: rgba(0,0,0,0.1);
  }
`

export const PhotoPerfil = styled.img`
  border-radius: 50%;
  padding: 8px;
  height: 40px;
  width: 40px;
`