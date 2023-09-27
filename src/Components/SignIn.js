import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
const SignIn =()=> {
    const auth = firebase.auth();
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <div>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    )
  
  }

  export default SignIn