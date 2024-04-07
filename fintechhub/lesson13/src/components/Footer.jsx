import Call from "../assets/icons/icon-call.svg";
import Mail from "../assets/icons/icon-mail.svg";
import Telegram from "../assets/icons/icon-telegram.svg";

const links = ["О нас", "Блог", "Вакансии", "Акции"];
const contacts = ["Вопросы и ответы", "Список устройств", "Дистрибьютерам", "Контакты",];
const socialLinks = [Call, Mail, Telegram];

export default function Footer() {
    return (
        <footer className="text-white bg-light-dark pt-12 pb-3">
            <div className="w-full flex justify-center gap-[200px] mb-12">

                <div className="flex flex-col gap-5">
                    <h3 className="font-medium text-lg">Illuminous</h3>
                    <ul className="flex flex-col gap-5">
                        {links.map((link, index) => (
                            <li className="font-normal text-base">
                                <a href="" key={index}>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="font-medium text-lg">Помощь</h3>
                    <ul className="flex flex-col gap-5">
                        {contacts.map((contact, index) => (
                            <li className="font-normal text-base">
                                <a href="" key={index}>
                                    {contact}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-medium text-lg mb-4">Поддержка</h3>
                    <p className="font-normal text-base mb-4">
                        Мы всегда готовы вам помочь. <br /> Наши операторы
                        онлайн 24/7
                    </p>
                    <div className="mb-6 flex gap-5">
                        {socialLinks.map((sl, index) => (
                            <button
                                className="p-2 bg-red rounded-full"
                                key={index}
                            >
                                <img src={sl} />
                            </button>
                        ))}
                    </div>
                    <button className="text-xs font-medium bg-red text-white px-5 py-1 rounded-4xl">
                        Написать в чате
                    </button>
                </div>
            </div>

            <div className="px-32 flex justify-between">
                <p className="text-xs font-medium">© 2015-2023 Illuminous</p>
                <p className="text-xs font-medium">
                    Пользовательские соглашения
                </p>
            </div>
        </footer>
    );
}
