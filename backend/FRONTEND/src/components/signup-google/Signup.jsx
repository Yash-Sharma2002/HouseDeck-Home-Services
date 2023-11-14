import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { MyContext } from "../../context/Context";
import { auth, googleProvider } from "../../constants/firebase";


export function SignupGoogle() {
	const { formData, setFormData, setLoading } = React.useContext(MyContext);

	async function handleGoogleSignUp() {
		const email = await signInWithPopup(auth, googleProvider)
			.then(async (result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				const user = result.user;

				// signing up the user
				setLoading(true);
				let dataToSend = {
					uid: user.uid,
					name: user.displayName,
					email: user.email,
					phone: "",
					pCode: "",
					emailVerified: user.emailVerified,
					photoURL: user.photoURL,
					type: "google",
					address: "",
					country: "",
					state: "",
				};

				const { data } = await axios.post("/api/user/signup", dataToSend);
				if (data.response === "error") {
					setLoading(false);
					alert("Invalid email or password");
					return;
				}
				if (data.response) {
					setFormData(data.response);
					localStorage.setItem("user", JSON.stringify(data.response));
					setLoading(false);
					// window.history.back()
					// window.location.reload()
					window.location.href = "/my-account#profile-details";
				}

				return user.email;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const credential = GoogleAuthProvider.credentialFromError(error);
				// alert("please try again");
				console.log(error);
			});
	}
	return (
		<div
			onClick={handleGoogleSignUp}
			className="border-[rgba(117, 117, 117, 0.25)] my-4 mx-auto flex w-10/12 cursor-pointer items-center justify-center rounded-full border-[1px] border-solid bg-white py-4"
		>
			<FcGoogle className="mr-4 text-[24px] text-[#1B454D]" />
			<p className="text-[16px] font-[400] leading-[20px] text-[#777E90]">Sign up with Google</p>
		</div>
	);
}