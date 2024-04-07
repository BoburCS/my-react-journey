export default function PageLayout({ children }) {
    return (
        <div className="flex flex-col gap-[150px]">
            {children}
        </div>
    );
}
