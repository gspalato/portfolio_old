import { useState } from 'react';
import { motion } from 'framer-motion';

import Background from '@/components/Background';
import { Gradient as Button } from '@/components/Button';
import Input from '@/components/Input';
import Page from '@/components/Page';

import { AUTHENTICATE_USER } from '@/graphql/mutations';

import Styles from './login.module.sass';
import { useLazyQuery } from '@apollo/client';


export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	
	const [getAuth, { loading, error, data }] = useLazyQuery(AUTHENTICATE_USER, {
		variables: {
			username,
			password
		}
	});

  	return (
    	<Page>
			<Background src="" blur="10px">
				{/* <motion.div className={Styles.bubble} /> */}
			</Background>
			<section className={Styles.content}>
				<form className={Styles.form}>
					<h1 className={Styles.title}>Welcome!</h1>
					<Input
						className={Styles.username}
						type="text"
						placeholder="Username"
						onChange={setUsername}
					/>
					<Input
						className={Styles.password}
						type="password"
						placeholder="Password"
						onChange={setPassword}
					/>
					<Button
						text="Login"
						type="submit"
						background="linear-gradient(to right, #56ccf2, #2f80ed)"
						onClick={getAuth}
					/>
				</form>
			</section>
    	</Page>
  	)
}