type HerosProps = {
    players: {
        name: string;
        type: string;
    }[];
}

function Heros(props: HerosProps) {
    return (
        <div>
            {props.players.map(player => (
                <h2 key={player.name}>{player.name} Type: {player.type}</h2>
            ))}
        </div>
    );
}

export default Heros;
