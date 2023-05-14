import Title from "../../../../../ui/components/atoms/Title";
import { useAuth } from "../../../grahql/hooks/useAuth";

type Props = {
    token: string,
}

const AuthMessage: React.FC<Props> = ({ token }) => {
    const { data, loading, error } = useAuth(token);

    if (loading) return <div>Carregando... </div>
    if (error) return <div>Erro ao efetuar autenticação</div>
    if (data?.Authentication?.status === 200) return (<Title>Usuário autenticado</Title>)
    return (<Title>Usuário não autenticado</Title>);
}

export default AuthMessage;