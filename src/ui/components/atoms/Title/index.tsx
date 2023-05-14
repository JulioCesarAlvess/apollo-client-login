type Props = {
    children: string
}

const Title: React.FC<Props> = ({ children }) => <h1>{children}</h1>

export default Title;