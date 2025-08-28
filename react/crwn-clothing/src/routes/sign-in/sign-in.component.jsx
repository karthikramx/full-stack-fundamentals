import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utlls";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
