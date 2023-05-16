import { gql } from "@apollo/client";

const GET_RESUMES = gql`
    query {
        resume {
            date,
            totalDuration,
            economizedPlastic,
            economizedWater
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
            economizedWater
        }
    }
`;

export { GET_RESUMES, GET_USES };