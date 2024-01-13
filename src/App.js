import "./App.scss";
import React, { useContext, useEffect } from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./store/AuthContext";
import Main from "./layout/Main";
import FrameLeftChat from './components/container/FrameLeftChat';
import PathArchived from './components/Nav/pathArchived';
import PathRequests from './components/Nav/pathRequests';
import NoChatsSelected from './components/NoChatsSelected';
import PathT from './components/Nav/PathT';
import PathActive from './components/Nav/pathActive';
import FrameLeftIcon from "./components/container/FrameLeftIcon";

const App = () => {
	const { isAuthenticated } = useContext(AuthContext);
	useEffect(() => {
		console.log(isAuthenticated);
	});

	return (
		<BrowserRouter>
			{/* <Main> */}
			{!isAuthenticated ? (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<div className='mainContainer' >
						<div className='frameLeftIcon'>
							<FrameLeftIcon />
						</div>
						<div className='frameLeftChat'>
							<Routes>
								<Route path="/" element={<FrameLeftChat />} />
								<Route path="/active" element={<PathActive />} />
								<Route path="/requests" element={<PathRequests />} />
								<Route path="/archived" element={<PathArchived />} />
							</Routes>
						</div>
						<div className='frameMiddleAndRight'>
							<Routes>
								<Route path="/" element={<PathT />} />
								<Route path="/active" element={<NoChatsSelected />} />
								<Route path="/requests" element={<NoChatsSelected />} />
								<Route path="/archived" element={<NoChatsSelected />} />
							</Routes>
						</div>
					</div>} />
				</Routes>
			)}
			{/* </Main> */}
		</BrowserRouter>
	);
};

export default App;
