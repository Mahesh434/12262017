import { ILoggedInUser } from './IGlobal';

export class ProjectKUtils {
    private authToken: string;
    private loggedInUserDetails: ILoggedInUser;
    getDetailsFromToken(token: String): ILoggedInUser {
        return JSON.parse(window.atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
    }
    getAuthToken(): string {
        return this.authToken;
    }
    setAuthToken(token): void {
        this.authToken = token;
        this.loggedInUserDetails = this.getDetailsFromToken(token);
    }
    getLoggedInUserDetails(): ILoggedInUser {
        return this.loggedInUserDetails;
    }
}

