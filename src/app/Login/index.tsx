import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Gradient as Button } from '@/components/Button';
import Input from '@/components/Input';
import Page from '@/components/Page';

import { AUTHENTICATE_USER } from '@/lib/graphql/mutations';

import Styles from './login.module.sass';
import { useMutation } from '@apollo/client';


const Component = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [success, setSuccess] = useState<boolean | null>(null);
	const [token, setToken] = useState<string | null>(null);

	const [authenticate] = useMutation(AUTHENTICATE_USER, {
		variables: {
			user: username,
			pwd: password
		},
		onCompleted(data) {
			let payload = data.authenticate.authenticationPayload;
			let success = payload.successful;

			setSuccess(success);

			if (!success)
			{
				// Handle login error.
				return;
			}

			setToken(payload.token);
		},
		onError(error) {
			console.log(error);
		}
	});

	useEffect(() => {
		if (window && !!token && token.length > 0)
			window.sessionStorage.setItem('reality-token', token!);
	}, [token]);

  	return success || (sessionStorage.getItem('reality-token'))
	? (
		<Navigate to="/dashboard" />
	)
	: (
    	<Page>
			<section className={Styles.content}>
				<form className={Styles.form}>
					<h1 className={Styles.title}>Welcome!</h1>
					<Input
						className={Styles.username}
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e: any) => setUsername(e.target.value)}
					/>
					<Input
						className={Styles.password}
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e: any) => setPassword(e.target.value)}
					/>
					<Button
						text="Login"
						type="submit"
						background="linear-gradient(to right, #56ccf2, #2f80ed)"
						onClick={authenticate}
					/>
				</form>
			</section>
    	</Page>
  	)
}

export default Component;