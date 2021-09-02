import React, {
	FunctionComponent,
	ReactNode,
	useEffect,
	useState,
} from 'react';
import { auth } from '@utils/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = React.createContext<AuthContext>({
	user: undefined,
});

export const AuthProvider: FunctionComponent<{ children: ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<AppUser>(undefined);

	useEffect(() => {
		onAuthStateChanged(auth, setUser);
	}, [setUser]);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
