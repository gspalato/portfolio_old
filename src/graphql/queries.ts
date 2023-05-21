import { gql } from "@apollo/client";

const GET_RESUMES = gql`
    query {
        resumes {
            date,
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

export { GET_RESUMES, GET_USES };