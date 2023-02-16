import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      email
      name
      password
    }
  }
`;
