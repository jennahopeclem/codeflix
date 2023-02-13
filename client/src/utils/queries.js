import { gql } from "@apollo/client";

export const QUERY_PROJECT = gql`
  query getProject($complete: Boolean) {
    project(complete: false) {
      name
      looking_for {
        is_looking
        num_recruits
        specialty
      }
    }
  }
`;

export const QUERY_DEV = gql`
  query getDev {
    dev {
      name
      github
      linkedin
      email
      profile_pic
      about
      specialty
      endorsements
    }
  }
`;

export const QUERY_COMPLETE = gql`
  query getComplete($complete: Boolean) {
    complete(complete: true) {
      name
      github
      linkedin
      email
      about
      specialty
      endorsements
    }
  }
`;
