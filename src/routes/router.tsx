import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RouteConfig } from './config'

const RouteList =()=>{
    return(
        <Routes>
            {RouteConfig.map(({path,element}:any,key)=>{
                return(
                    <Route path={path} key={key} 
                    element={element}
                    />                    
                )
            })}
        </Routes>
    )
}
export default function AppRoute() {
  return (
    <>
    <Suspense fallback={null}>
        <RouteList/>
    </Suspense>
    </>
  )
}

