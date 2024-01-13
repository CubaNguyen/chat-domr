import React, { useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import './Login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
	const { setIsAuthenticated } = useContext(AuthContext);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errMess, setErrMess] = useState('');

	const handleSubmit = async () => {
		// this.setState({
		//     errMess: ''
		// })
		// try {
		//     let res = await handleLoginApi(this.state.username, this.state.password)
		//     // console.log('data  ...', res.data)
		//     let token = res && res.data && res.data.data && res.data.data.token ? res.data.data.token : ''
		//     // console.log('...', JSON.stringify(token))
		//     if (res && res.data && res.data.success === true) {
		//         this.props.logInSuccess(token)
		//         luuTokenVaoLocalStorage(JSON.stringify(token))
		//         this.props.history.push('/');

		//     }

		// } catch (e) {
		//     this.setState({
		//         errMess: e.response.data.message
		//     })
		// }
	}

	return (
		<div>
			<div className='loginContainer'>
				<div className='logoLogin'>

				</div>
				<div className='text'>
					Connect with your favourite people
				</div>
				<div className='form'>



					<input type="text" className='user'
						onChange={(event) => setUsername(event.target.value)}
						placeholder='Email address or phone number' />

					<div className='passwordContainer'>
						<input type={showPassword === true ? 'text' : "password"} className='password'
							onChange={(event) => setPassword(event.target.value)}
							placeholder='Passwork' />
						<FontAwesomeIcon className='icon' icon={showPassword === true ? faEye : faEyeSlash}
							onClick={() => setShowPassword(!showPassword)}
						/>
					</div>


				</div>

				<div style={{ color: 'red', paddingBottom: '5px' }}> {errMess}</div>

				{/* <button className='btnLogin'
					onClick={handleSubmit}
					type="submit">Continue</button>
				<div className='footer'>

				</div> */}
			</div>
			<button onClick={() => setIsAuthenticated()}>Login</button>
		</div>
	);
};

export default Login;
