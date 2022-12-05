import React from 'react'
import * as Style from './style'

const ParentComponent = ({children}) => {
  return (
    <Style.StyledParentComponent>
        {children}
    </Style.StyledParentComponent>
  )
}

export default ParentComponent