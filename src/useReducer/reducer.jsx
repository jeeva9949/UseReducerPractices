

import React, { useEffect, useReducer } from "react"
const URL = "https://jsonplaceholder.typicode.com/users";

const reducer = (state, action) => {
  if (action.type === "USERDATA_ADD") {
    return {
      ...state,
      userdata: action.payload,
    };
    }
    if (action.type === "ISLODING") {
        return (
            {
                ...state,isloading:action.payload
            }
        )
    }
    if (action.type === "ISERROR") {
      return {
        ...state,
        iserror: action.payload,
      };
    }
return state;
};

const Reducer = () => {
  const initaila_data = {
      userdata: [],
      isloading: false,
      iserror:{status:false,mesg:""}
  };

    const Fetchingdata = async (URL) => {
      dispatch({type:"ISLODING",payload:true})
        dispatch({ type: "ISERROR", payload: false})
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
          dispatch({ type: "USERDATA_ADD", payload: data });
          dispatch({ type: "ISLODING", payload: false });
          dispatch({ type: "ISERROR", payload: false });
      } catch (error) {
           dispatch({ type: "ISLODING", payload: false });
           dispatch({ type: "ISERROR", payload: {status:true,mesg:error.message} });
   }
  };

  const [state, dispatch] = useReducer(reducer, initaila_data);

  useEffect(() => {
    Fetchingdata(URL);
  }, []);
  
    
    if (state.isloading) {
        return <img src="./bannerimgjeeva.png" alt="" />
    }
    if (state.iserror) {
        return <h2>{state.iserror.payload }</h2>
    }

  return (
    <div>
      <h1>user information</h1>
      {state.userdata.map((eachobj) => {
        const { name, email, id } = eachobj;
        return (
          <div className="items" key={id}>
                <p>{name }</p>
                <p>{email }</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reducer;
