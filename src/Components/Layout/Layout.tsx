interface TextProps {
    message: string;
}

const Text = ({ message }: TextProps) => {
    return <p>{message}</p>;
};

export default Text;
