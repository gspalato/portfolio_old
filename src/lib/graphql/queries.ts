import { gql } from "@apollo/client";

const CHECK_AUTH = gql`
    query($token: String!) {
        isAuthenticated(token: $token) {
            successful, roles
        }
    }
`;

const GET_RESUMES = gql`
    query {
        resumes {
            date,
            totalUses,
            totalDuration,
            distributedWater,
            economizedPlastic,
            bottleQuantityEquivalent
        }
    }
`;

const GET_USES = gql`
    query {
        uses {
            startTimestamp,
            endTimestamp,
            duration,
            distributedWater,
            economizedPlastic,
            bottleQuantityEquivalent
        }
    }
`;

export { CHECK_AUTH, GET_RESUMES, GET_USES };