
import { FormEvent, useEffect, useState } from "react";
import { useLogin } from "../../../grahql/hooks/useLogin";
import AuthMessage from "../../molecules/AuthMessage";


const LoginForm: React.FC = () => {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [token, setToken] = useState("")
    const [Login, { data, loading, error }] = useLogin();

    useEffect(() => {
        if (!!data && !!data?.Login?.token) {
            setToken(data?.Login?.token);
        }
    }, [data])

    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        await Login({
            variables: {
                usuario,
                senha
            }
        })
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <p>usuario</p>
                <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <p>senha</p>
                <input type="text" value={senha} onChange={e => setSenha(e.target.value)} />
                {loading && <div>Carregando... </div>}
                {error && <div>Erro ao efetuar login</div>}
                {!loading && !error && <button type="submit">Logar</button>}
            </form>
            <AuthMessage token={token} />
        </>
    );
}

export default LoginForm;