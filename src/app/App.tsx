import { Route, Routes, useLocation } from 'react-router-dom';

import About from '@app/About';
import Dashboard from '@app/Dashboard';
import Home from '@app/Home';
import Login from '@app/Login';
import NotFound from '@app/NotFound';
import Projects from '@app/Projects';

import Content from '@components/Content';
import Cursor from '@components/Cursor';
import Navbar from '@components/Navbar';
import ProtectedRoute from '@components/ProtectedRoute';

import AuthProvider from '@lib/auth';
import LayoutProvider from '@lib/layout';

import '@styles/globals.sass';

const App: React.FC = () => {
	const location = useLocation();

	return (
		<AuthProvider>
			<LayoutProvider>
				<Cursor />
				<Navbar />
				<Content>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route
							path='/dashboard'
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route path='/projects' element={<Projects />} />
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Content>
			</LayoutProvider>
		</AuthProvider>
	);
};

export default App;
