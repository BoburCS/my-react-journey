type HerosProps = {
    players: {
        name: string;
        type: string;
    }[];
}

function Heros({ players }: HerosProps) {
    return (
        <div>
            {players.map(player => (
                <h2 key={player.name}>{player.name} Type: {player.type}</h2>
            ))}
        </div>
    );
}

export default Heros;
