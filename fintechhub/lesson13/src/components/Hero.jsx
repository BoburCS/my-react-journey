import { useTypewriter } from "react-simple-typewriter";

export default function Hero() {
    const [typedText] = useTypewriter({
        words: ["Front-end Developer", "Back-end Developer", "Software Engineer"],
        loop: {},
        delaySpeed: 50,
        typeSpeed: 100,
        delaySpeed: 100,
    })

    return (
        <div className="py-[50px] px-[200px] w-full h-auto flex items-center justify-between ">
            <div className="w-[350px] h-[350px] rounded-full bg-no-repeat shadow-2xl bg-center bg-cover bg-hero hover:scale-110 duration-500"></div>

            <div className="pr-[250px]">
                <h2>Hello, World! I am Bobby</h2>
                <h2 className="">
                    <span>I'm {typedText}</span>
                </h2>
            </div>
        </div>
    );
}
