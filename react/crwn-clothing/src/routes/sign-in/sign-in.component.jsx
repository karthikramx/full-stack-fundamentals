import { signInWithGooglePopup } from "../../utils/firebase/firebase.utlls";
import { signInWithGoogleRedirect } from "../../utils/firebase/firebase.utlls";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlls";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const signInWithGoogleRedirectHandler = async () => {
    // this is not working - figure out why!
    const { user } = await signInWithGoogleRedirect();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirectHandler}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
