import Russian from "@images/trailer-russian.png"; 
import Teaser from "@images/trailer-teaser.png"; 
import HD from "@images/trailer-hd.png"; 

const Trailers = [
    { image: Russian, title: "Русский трейлер" },
    { image: Teaser, title: "Тизер" },
    { image: HD, title: "HD трейлер" },
];

export default function Trailer() {
    return (
        <div className="px-60 flex flex-col items-center justify-center">
            <h2 className="font-semibold text-2xl mb-12 self-start">Трейлеры</h2>
            
            <div className="grid grid-cols-3 gap-8">
                {Trailers.map((trailer, index) => (
                    <div className="flex flex-col items-center gap-5 hover:scale-105 duration-500 cursor-pointer" key={index}>
                        <img src={trailer.image} alt={trailer.title} />
                        <h3 className="font-medium text-lg">{trailer.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
