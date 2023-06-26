import { Route, Routes, useLocation } from 'react-router-dom';

import About from '@/app/About';
import Dashboard from '@/app/Dashboard';
import Home from '@/app/Home';
import Login from '@/app/Login';
import Projects from '@/app/Projects';
import UPx from '@/app/UPx';
import NotFound from '@/app/NotFound';

import Content from '@/components/Content';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute';

import Layout from './lib/layout';

import '@/styles/globals.sass';

const App: React.FC = () => {
	const location = useLocation();

	return (
		<Layout>
			<Cursor />
			<Navbar />
			<Content>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/upx' element={<UPx />} />
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Content>
		</Layout>
	);
};

export default App;
