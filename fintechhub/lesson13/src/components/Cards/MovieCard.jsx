export default function MovieCard({ image, title, score, release }) {
    return (
        <div className="font-montserrat w-auto h-auto flex flex-col relative cursor-pointer hover:scale-105 duration-500">
            <img src={image} alt={title} className="mb-5" />
            <h4 className="font-semibold text-[1.125rem] mb-[10px]">{title}</h4>
            <p className="font-medium text-base">{release}</p>
            <div className="bg-red rounded-bl-[5px] rounded-br-[5px] absolute top-0 left-5 px-[2px] py-[10px]">
                <p className="w-8 text-center font-semibold text-[13px]">
                    {score}
                </p>
            </div>
        </div>
    );
}
