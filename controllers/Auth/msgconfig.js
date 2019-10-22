'use strict'
/**
 * Contains all messages that appear/sent in /auth routes.
 */
const messageAuthRoute = {
    loginIdInvalid: "loginId is invalid.",
    loginIdRequired: "loginId is required.",

    passwordInvalid: "password is invalid.",
    passwordRequired: "password is required.",
    passwordIncorrect: "password is incorrect.",

    successlfullogIn: "successfully logedin.",
    userNotFound: "user with this loginId not found.",

    codeInvalid: "code is invalid.",
    codeRequired: "code is required.",

    mobileInvalid: "mobile is invalid.",
    mobileRequired: "mobile is required.",

    firstNameInvalid: "firstName is invalid.",
    firstNameRequired: "firstName is requried.",


    lastNameInvalid: "lastName is invalid.",
    lastNameRequired: "lastName is requried.",

    emailInvalid: "email is invalid.",
    emailRequired: "email is required.",

    usernameRequired: "username is required.",
    usernameInvalid: "username is invalid.",

    accountDuplicate: "A account with this mobile or email already exist.",

    inputErrors: "Input error",
};
module.exports = messageAuthRoute;