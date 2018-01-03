export interface IResponse {
    statusCode: number;
    message: String;
    data: any;
}

export interface ILoggedInUser {
    firstName: string;
    lastName: string;
    permissions: string[];
    userId: string;
}
