import { gql, useQuery } from "@apollo/client";

const GQL_AUTH = gql`
  query ($token: String!) {
    Authentication(token: $token) {
      status
    }
  }
`;

export const useAuth = (token: string) =>
  useQuery(GQL_AUTH, {
    variables: { token },
  });
