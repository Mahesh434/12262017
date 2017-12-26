export interface ILogin {
    loginId: string;
    password: string;
    newPassword?: string;
}

export interface ILoggedInUser {
    firstName: string;
    lastName: string;
    permissions: string[];
    userId: string;
}
