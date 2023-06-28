import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Gradient as Button } from '@/components/Button';
import Input from '@/components/Input';
import Page from '@/components/Page';
import { useMutation } from '@apollo/client';

import { useAuth } from '@/lib/auth';
import { AUTHENTICATE_USER } from '@/lib/graphql/mutations';

const Component = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [submitting, setSubmitting] = useState(false);

	const [success, setSuccess] = useState<boolean | null>(null);
	const [fetchedToken, setFetchedToken] = useState<string | null>(null);
	const [userJson, setUserJson] = useState<string | null>(null);

	const { token, isTokenValid, setToken, setTokenValidity } = useAuth();

	const [authenticate] = useMutation(AUTHENTICATE_USER, {
		variables: {
			user: username,
			pwd: password,
		},
		onCompleted(data) {
			let payload = data.authenticate.authenticationPayload;
			let success = payload.successful;

			setSuccess(success);

			if (!success) {
				// Handle login error.
				return;
			}

			setFetchedToken(payload.token);
			setUserJson(JSON.stringify(payload.user));
			setSubmitting(false);
		},
		onError(error) {
			console.log(error);
		},
	});

	useEffect(() => {
		if (window) {
			if (fetchedToken && fetchedToken.length > 0) {
				setToken(fetchedToken)
				setTokenValidity(true);
			};
		}
	}, [fetchedToken, userJson]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		authenticate();
		setSubmitting(true);
	};

	return success || (token && isTokenValid) ? (
		<Navigate to='/dashboard' />
	) : (
		<Page>
			<section className='flex h-screen w-screen place-items-center justify-center px-8 pb-8 pt-20 tracking-tighter lg:p-20'>
				<form
					onSubmit={onSubmit}
					className='flex h-[min(50rem,80%)] w-[clamp(30rem,75%,50rem)] flex-col items-center justify-center rounded-lg border border-border bg-background md:w-[min(30rem,75%)]'
				>
					<h1 className='m-0 mb-8 font-display text-6xl font-extrabold'>
						Welcome!
					</h1>
					<Input
						className='mb-6 border border-border font-title placeholder:text-[#ffffff22]'
						type='text'
						placeholder='Username'
						value={username}
						style={{
							borderColor:
								success === false
									? 'red'
									: !(success === null)
									? '#333'
									: null,
						}}
						onChange={(e: any) => setUsername(e.target.value)}
					/>
					<Input
						className='mb-6 border border-border font-title placeholder:text-[#ffffff22]'
						type='password'
						placeholder='Password'
						value={password}
						style={{
							borderColor:
								success === false
									? 'red'
									: !(success === null)
									? '#333'
									: null,
						}}
						onChange={(e: any) => setPassword(e.target.value)}
					/>
					<Button
						text='Login'
						type='submit'
						background='linear-gradient(to right, #56ccf2, #2f80ed)'
						overlay='#09090b'
						onClick={authenticate}
						disabled={submitting}
					/>
				</form>
			</section>
		</Page>
	);
};

export default Component;
