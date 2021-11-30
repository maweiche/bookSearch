import { gql } from '@apollo/client';

//mutation for user that is "Logged-In"
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
                user {
                    _id
                    username
                    email
                    bookCount
                    savedBooks {
                        bookId
                        title
                        description
                        authors
                        link
                        image
                    }
                }
        }
    }
`;

//mutation to add user
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
                user{
                    _id
                    username
                    email
                    bookCount
                    savedBooks {
                        bookId
                        title
                        description
                        authors
                        image
                        link
                    }
                }
        }
    }
`;