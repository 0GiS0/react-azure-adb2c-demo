import authentication from 'react-azure-adb2c';
import decode from 'jwt-decode';

export default class AAD_B2CService {

    loggedIn() {
        if (authentication.getAccessToken())
            return true;
        return false;
    }

    logout() {
        authentication.signOut();
    }

    getToken() {
        return authentication.getAccessToken();
    }

    getClaims() {
        return decode(this.getToken());
    }

    getUser() {
        const claims = decode(authentication.getAccessToken());

        return {
            name: claims.name,
            country: claims.country,
            city: claims.city,
            provider: claims.idp
        };
    }

}