import React, { useContext } from 'react'
import { SidebarWithSearch } from '../component/Sidebar'
import Dataall from '../component/Dataall'

const Products = () => {

    
  return (
    <div className="grid grid-cols-7">
        <div className="col-span-1">
        <SidebarWithSearch />
        </div>
        <div className="col-span-6">
        <Dataall />
        </div>
    </div>
  )
}

export default Products