import { signInWithGooglePopup } from "../../utils/firebase";

export default function SignIn() {
  async function logGoogleUser() {
    const response = await signInWithGooglePopup();

    console.log(response);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign iN</button>
    </div>
  );
}
