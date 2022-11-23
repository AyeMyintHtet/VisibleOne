import React from 'react'
import { HeaderCom ,FooterCom,NavMobileBar} from 'components'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './router'

type AppLayoutProps = {}
const AppLayout: React.FC<AppLayoutProps> = props => {
  return (
    <BrowserRouter>
    <HeaderCom/>
    <NavMobileBar/>
    <AppRoute />
    <FooterCom/>
    </BrowserRouter>
  )
}

export default AppLayout
