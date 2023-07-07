import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import Loading from '@app/Loading';

import Button from '@components/Button';
import Input from '@components/Input';
import Page from '@components/Page';

import { useAuth } from '@lib/auth';
import { Authenticate } from '@lib/graphql/mutations';

import { AuthenticationPayload } from '@/types/AuthenticationPayload';

const Component = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [submitting, setSubmitting] = useState(false);

	const [success, setSuccess] = useState<boolean | null>(null);
	const [fetchedToken, setFetchedToken] = useState<string | null>(null);
	const [userJson, setUserJson] = useState<string | null>(null);

	const { token, setToken } = useAuth();

	const [authenticate, { loading }] = useMutation<Authenticate.ReturnType>(
		Authenticate.Mutation,
		{
			variables: {
				user: username,
				pwd: password,
			},
			onCompleted(data) {
				let payload: AuthenticationPayload =
					data.authenticate.authenticationPayload;
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
				console.log(error.cause);
				console.log(error.clientErrors);
				console.log(error.graphQLErrors);
				console.log(error.stack);
				setSubmitting(false);
			},
		}
	);

	useEffect(() => {
		if (window) {
			if (fetchedToken && fetchedToken.length > 0) setToken(fetchedToken);
		}
	}, [fetchedToken, userJson]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		authenticate();
		setSubmitting(true);
	};

	if (success || token) return <Navigate to='/dashboard' replace={true} />;
	if (loading) return <Loading />;

	return (
		<Page>
			<section className='flex h-screen w-screen place-items-center justify-center px-8 pb-8 pt-20 tracking-tighter lg:p-20'>
				<form
					onSubmit={onSubmit}
					className='flex h-[min(50rem,80%)] w-[clamp(30rem,75%,50rem)] flex-col items-center justify-center rounded-lg md:w-[min(30rem,75%)] md:border md:border-ring md:bg-accents-0'
				>
					<h1 className='text-gradient m-0 mb-8 font-display text-6xl font-extrabold'>
						Welcome!
					</h1>
					<Input
						className='mb-6 w-[75%] border border-border font-title shadow-sm placeholder:text-[#ffffff22]'
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
						className='mb-6 w-[75%] border border-border font-title shadow-sm placeholder:text-[#ffffff22]'
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
						type='submit'
						className='flex h-10 w-[75%] !max-w-none items-center justify-center !border-none !bg-shadowy !text-center !text-[#000] shadow-sm'
						onClick={authenticate}
						disabled={submitting}
						variant={{ background: 'primary' }}
						whileHover={{ scale: 1.01 }}
					>
						<h1 className='w-full text-center text-sm font-semibold'>
							Sign In
						</h1>
					</Button>
				</form>
			</section>
		</Page>
	);
};

export default Component;
