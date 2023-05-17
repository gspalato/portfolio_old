import { gql } from "@apollo/client";

const GET_RESUMES = gql`
    query {
        resume {
            date,
            totalDuration,
            economizedPlastic,
            usedWater
        }
    }
`;

const GET_USES = gql`
    query {
        uses {
            startTimestamp,
            endTimestamp,
            duration,
            economizedPlastic,
            usedWater
        }
    }
`;

export { GET_RESUMES, GET_USES };