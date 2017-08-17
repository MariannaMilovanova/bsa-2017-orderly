import axios from 'axios';
import {userProfileService} from './userProfileService';

const fetchUser = (userId) => userProfileService.fetchUser();

const getCurrentUser = () =>
    axios.get('/api/user/me')
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    fetchUser,
    getCurrentUser
};