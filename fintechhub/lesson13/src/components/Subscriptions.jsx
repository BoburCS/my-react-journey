const subs = [
    {
        id: "110",
        title: "Easy Illuminous",
        desc: "Для мобильного приложения. Может смотреть 1 человек",
        price: " 99 ₽/мес",
        benefits: ["Нет ограничений", "Никакой рекламы", "10 ТВ каналов"],
    },
    {
        id: "111",
        title: "Illuminous+",
        desc: "Для всех устройств. Может смотреть 5 человек",
        price: " 199 ₽/мес",
        benefits: ["Нет ограничений", "Никакой рекламы", "25 ТВ каналов"],
    },
    {
        id: "112",
        title: "Illuminous Gold",
        desc: "Полный каталог Illuminous без ограничений",
        price: " 299 ₽/мес",
        benefits: ["Нет ограничений", "Никакой рекламы", "50 ТВ каналов"],
    },
];

export default function Subscriptions() {
    return (
        <div className="text-white px-[85px] mb-[150px]">
            <h2 className="text-xl text-center font-semibold">
                Выберите подписку которая подходит Вам
            </h2>
            <h5 className="text-grey text-base font-normal text-center mb-[60px]">
                Мы представляем три варианта подписки, которые <br /> подойдут
                вам по ценеи потребностям
            </h5>

            <div className="w-full grid grid-cols-3 gap-9">
                {subs.map(sub => (
                    <div className="py-12 px-11 w-full bg-light-dark rounded-medium flex flex-col" key={sub.id}>
                        <h3 className="text-center text-white text-xl font-semibold mb-4">{sub.title}</h3>
                        <p className="text-center text-grey text-base font-normal mb-10">{sub.desc}</p>
                        <h1 className="text-center text-red text-3xl font-semibold mb-12">{sub.price}</h1>
                        <ul className="ml-4 mb-[56px] text-grey font-normal text-base flex flex-col gap-9">
                            {sub.benefits.map((benefit, index) => (
                                <li className="flex items-center gap-5" key={index}>
                                    <div className="w-[9px] h-[9px] bg-red rounded-full"></div>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-red self-center px-5 py-3 font-medium text-base rounded-4xl">Попробовать</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
