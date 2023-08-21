import React, { useContext } from 'react'
import AllproductComp from '../component/AllproductComp'
import { SidebarWithSearch } from '../component/Sidebar'

const Products = () => {

    
  return (
    <div className="grid grid-cols-6">
        <div className="col-span-1">
        <SidebarWithSearch />
        </div>
        <div className="col-span-5">
        <AllproductComp />
        </div>
    </div>
  )
}

export default Products