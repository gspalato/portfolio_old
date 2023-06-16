import { gql } from "@apollo/client";

const SUBSCRIBE_STATION_UPDATE = gql`
    subscription {
        onStationUpdate {
            date,
            totalDuration,
            distributedWater,
            economizedPlastic,
            bottleQuantityEquivalent
        }
    }
`;

export { SUBSCRIBE_STATION_UPDATE };