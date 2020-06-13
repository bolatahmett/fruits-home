import { User } from "../../model/User";

const user = (state = {} as User, action: { type: any; user: User }) => {
    switch (action.type) {
        case 'LOGIN_USER':
        case 'EXIT_USER':
            return action.user;
        default:
            return state
    }
}

export default user;