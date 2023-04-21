import React,{useContext} from 'react'
import { userContext } from './context/userContext'; 
const Subchild = () => {
  const data = useContext(userContext)
  console.log(data)
  const {name,age} = data
  return (
    <>
      <div>Subchild</div>
      <h1>name:{name}</h1>
      <h1>age:{age }</h1>
    </>
  );
}

export default Subchild