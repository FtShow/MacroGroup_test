import {gql} from "@apollo/client";
import {useQuery} from "@apollo/client/react";
import type {GetWorkplacesData} from "../../../types/types.ts";

export const GET_WORKPLACES = gql`
  query GetWorkplaces {
    workplaces {
      id
      name
      description
      ipAddress
    }
  }
`;


export const useGetWorkplaceList = () => {
    const { data, loading, error } = useQuery<GetWorkplacesData>(GET_WORKPLACES);
    return {data, loading, error};
}
