import instance from "./instance";

interface User {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

const signin = (user: User): Promise<any> => {
    return instance.post('/signin', user);
}

const signup = (user: User): Promise<any> => {
    return instance.post('/signup', user);
}

export { signin, signup };