import { signInWithGooglePopup } from "../../utils/firebase/firebase.utlls";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
