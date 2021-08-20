import React from 'react'
// import orange from '../../images/orange.jpg'
import placeholder from '../../stories/assets/images/image-placeholder.svg'
import styled from 'styled-components'

const Media = styled.div`
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  margin: 0px 0px;
  background-image: url(${placeholder});
  /* width: 294px; */
  height: 190px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px 10px 0 0;
`;

export default function CardMedia() {
    return (
        <Media />
    )
}
