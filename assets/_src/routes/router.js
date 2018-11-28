import HomeCompo from '../pages/home-page';
import UserCompo from '../pages/user-page';
import NotFoundCompo from '../pages/404';

export default {
    /* Home route designed by the index: true attribute */
    '': {
        component: HomeCompo,
        index: true
    },
    /* Route with required and optional path params, the route handler is a Ractive Component -- user/:username */
    'user/{uId}': {
        component: UserCompo
    },
    /* Not found Route must be set as 404
        read route after path/#, otherwise redirect to home
     */
    '404': {
        component: NotFoundCompo
    }
};
