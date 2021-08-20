import React from 'react'

import styled from 'styled-components'
import { shadow } from '../global/styles'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  max-width: 294px;
  border-radius: 10px;
  box-shadow: ${shadow.one};
`;



export default function Card({ isLoading, artPosition, children }) {
    return (
        <StyledCard isLoading={isLoading} artPosition={artPosition}>
          {children}
        </StyledCard>
    )
}
