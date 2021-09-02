declare type AuthContext = {
	user: AppUser;
};

declare type AppUser =
	| import('firebase/auth/dist/auth').User
	| undefined
	| null;
