import SearchIcon from "../assets/icons/icon-search.svg";

export default function Search() {
    return (
        <div className="text-white font-montserrat w-full">
            <h1 className="text-2xl font-semibold mb-4 ">Поиск по сайту</h1>
            <p className="text-grey text-base font-normal mb-[60px]">
                На нашем сайте вы найдете подходящие вам <br /> фильмы и сериалы
            </p>
            <div className="w-full rounded-medium bg-light-dark flex items-center justify-between">
                <input 
                    name="search" 
                    type="search" 
                    placeholder="Поиск..."
                    className="px-5 py-4 w-full bg-transparent outline-none placeholder:text-grey"
                />
                <img 
                    src={SearchIcon} 
                    alt="Search Icon"
                    className="mr-3" 
                />
            </div>
        </div>
    );
}
