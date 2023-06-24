import { gql } from "@apollo/client";

const AUTHENTICATE_USER = gql`
    mutation($user: String!, $pwd: String!) {
    	authenticate(input: {
    		username: $user,
    		password: $pwd
    	}) {
    		authenticationPayload {
      			successful, token
    		}
    	}
    }
`;

export { AUTHENTICATE_USER };