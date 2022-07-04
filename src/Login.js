import React from 'react'
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer"
import { getAuth, signInWithPopup } from "firebase/auth";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in
        signInWithPopup(auth, provider)
        .then((result) =>  {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result);

        })
        .catch((error) => alert(error.message));
    };

  return (

    <div className="login">
        <div className="login__logo">
            <img 
            src="https://media-private.canva.com/MFW8E/MAE9wtMFW8E/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220419T193425Z&X-Amz-Expires=61757&X-Amz-Signature=c0718bb2db245ffc42cf16a323e75d9ed3615e39f75b893a5fe65a5045369e5e&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2020%20Apr%202022%2012%3A43%3A42%20GMT"
            alt=""
            />
            
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>


    
  );
}

export default Login;