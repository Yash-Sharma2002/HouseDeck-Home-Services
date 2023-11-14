import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../../constants/firebase";
import { LoginContext } from "../../context/Context";
import { authenticateSignup } from "../../Api/signup";


export default function SignupGoogle() {
	const { setMessage, setMessageType, setShow, encrypt } = React.useContext(LoginContext)


	async function handleGoogleSignUp() {
		const email = await signInWithPopup(auth, googleProvider)
			.then(async (result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// const token = credential.accessToken;

				const user = result.user;

				// signing up the user locally

				// need to send to database #TODO
				const signup = {
					Number: ``,
					Username: user.displayName,
					Email: user.email
				}
				let response = await authenticateSignup(signup)
				if (!response) return;

				localStorage.setItem('START_DATA', JSON.stringify({
					USERDATA_AS_NUMBER: '',
					USERDATA_AS_USERNAME: encrypt(user.displayName),
					USERDATA_AS_EMAIL: encrypt(user.email),
				}));
				localStorage.setItem('INIT_DATA', JSON.stringify(true));
				localStorage.setItem('EMAIL_VERIFIED', true)

				return user.email;
			})
			.catch((error) => {
				// const errorCode = error.code;
				const errorMessage = error.message;
				// const credential = GoogleAuthProvider.credentialFromError(error);
				setMessage(errorMessage)
				setMessageType('error')
				setShow(true)
			});
		if (email) window.location.reload()
	}
	return (
		<div
			onClick={handleGoogleSignUp}
			style={{
				border: '1px solid black',
				margin: '4px auto',
				borderRadius: '30px',
				backgroundColor: 'white',
				padding: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				width: '55%',
			}}
		>
			{/* <FcGoogle className="mr-4 text-[24px] text-[#1B454D]" /> */}
			<p style={{
				fontSize: '16px',
				fontWeight: '400',
				lineHeight: '20px',
				color: 'black'
			}} >Sign up with Google</p>
		</div>
	);
}