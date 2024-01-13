import React, { createContext } from "react";

const AuthContext = createContext(
	{
		isAuthenticated: false,
		setIsAuthenticated: () => {},
	},
	() => {},
);

const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = React.useState(false);

	const setIsAuthenticated = () => {
		setIsLogin(!isLogin);
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated: isLogin, setIsAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export { AuthContext };
