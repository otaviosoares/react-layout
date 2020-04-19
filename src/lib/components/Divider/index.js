import React from 'react'
import { Box } from '../Box'

const StyledBox = styled(Box)`
  height: 1px;

  background: ${props =>
    props.defaultWeight === 'regular' ? 'regular' : 'transparent'};
`

const defaultWeight = 'regular'
export const Divider = ({ weight = defaultWeight }) => {
  return (
    <Box position="relative">
      <StyledBox position="absolute" width="full" defaultWeight={weight} />
    </Box>
  )
}
