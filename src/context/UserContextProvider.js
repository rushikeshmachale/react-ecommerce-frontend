import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [users,setUsers] = useState(null)
    const [userid,setUserid]=useState([])
    const [orderCustomerId,setOrderCustomerId]=useState([])
    const [ordersId,setOrdersId]=useState([])

    const [cartQuantity,setCartQuantity]=useState(0)
  return (
    <UserContext.Provider value={{users,setUsers,userid,setUserid,cartQuantity,setCartQuantity,orderCustomerId,setOrderCustomerId,ordersId,setOrdersId}}>
     {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider