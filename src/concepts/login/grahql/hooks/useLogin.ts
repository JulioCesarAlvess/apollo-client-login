import { gql, useMutation } from "@apollo/client";

const GQL_LOGIN = gql`
  mutation ($senha: String!, $usuario: String!) {
    Login(senha: $senha, usuario: $usuario) {
      mensagem
      token
    }
  }
`;
export const useLogin = () => useMutation(GQL_LOGIN);
