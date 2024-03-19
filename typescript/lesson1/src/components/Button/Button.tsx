type ButtonProps = {
    children: string; 
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function Button({ children, handleClick }: ButtonProps) {
    return (
        <button onClick={(event) => handleClick(event, 1)}>{children}</button>
    );
}

export default Button;
