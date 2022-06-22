import { Box } from '@mui/material'
import React from 'react'
import { StyledBoxMid, StyledBoxMidIn } from './boxMid.styled'

const BoxMid = () => {
  return (
    <StyledBoxMid>
      <StyledBoxMidIn>
        <p>1</p>
      </StyledBoxMidIn>
      <StyledBoxMidIn>
        <p>2</p>
      </StyledBoxMidIn>
    </StyledBoxMid>
  )
}

export default BoxMid