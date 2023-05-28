import { gql } from "@apollo/client";

const SUBSCRIBE_STATION_UPDATE = gql`
    subscription {
        onStationUpdate {
            date
        }
    }
`;

export { SUBSCRIBE_STATION_UPDATE };