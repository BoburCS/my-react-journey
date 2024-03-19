type ButtonProps = {
    children: string; 
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function Button(props: ButtonProps) {
    return (
        <button onClick={(event) => props.handleClick(event, 1)}>{props.children}</button>
    );
}

export default Button;
