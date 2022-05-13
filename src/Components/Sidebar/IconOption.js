import React from 'react'
import {SidebarIcon} from './Styled'

export const IconOption = ({Text , Icon, Active, Primary}) => {
  return (
    <SidebarIcon  Active= { Active } Primary = { Primary } >
        <Icon />
        <h2 > { Text } </h2>
    </SidebarIcon>
  )
}
