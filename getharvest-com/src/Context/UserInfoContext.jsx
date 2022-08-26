import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const UserInfoContext=createContext();

const init={
    features:[],
    user:{
        f_name:'',
        l_name:'',
        email:'',
        password:'',
        comp_name:'',
        size:'',
        client_Name:'',
        project_Name:'',
        budget:0,
        billable_rate:0
    }
}
const UserInfoContextProvider = ({children}) => {
    const [userInfo,setUserInfo]=useState(init);
    const userHandler=(e)=>{
        const {value,checked,name}=e.target
        if(checked){
            setUserInfo({
              features:[...userInfo.features,value],
              user:{
                  ...userInfo.user
              }
          })
        }
        else{
            setUserInfo({
              features:userInfo.features.filter(e=>e!==value),
              user:{
                  ...userInfo.user,
                  [name]:value
              }
          })
        }
    }
    return (
        <UserInfoContext.Provider  value={{userInfo,userHandler}}>
            {children}
        </UserInfoContext.Provider>
    );
};

export default UserInfoContextProvider;