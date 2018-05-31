const usernameValidation = (username) => {
    let error = '';
    const length = username && username.length ?
        username.length : 0;

    if (length === 0) {
        error = 'Please provide a username.'
    } else if (length < 8) {
        error = 'Username must be longer than 8 characters.';
    }

    return error;
};

const firstnameValidation = (firstname) => {
    let error = '';
    const length = firstname && firstname.length ?
        firstname.length : 0;

    if (length === 0) {
        error = 'Please provide a first name.'
    }

    return error;
};

const passwordValidation = (password) => {
    let error = '';
    const length = password && password.length ?
        password.length : 0;

    if (length === 0) {
        error = 'Please provide a password.'
    } else if (length < 8) {
        error = 'Password must be longer than 8 characters.';
    }

    return error;
};

export default {
    username: usernameValidation,
    firstname: firstnameValidation,
    password: passwordValidation,
};
