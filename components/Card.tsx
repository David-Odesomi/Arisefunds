interface CardProps {
    number: string;
    category: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBg: string;
}

export default function Card({ number, category, title, description, icon, iconBg }: CardProps) {
    return (
        <div className="relative pt-25 pb-15 px-12 bg-[#037AB8] rounded-2xl text-white text-center flex-1">
            <div className={`absolute -top-8 left-1/2 -translate-x-1/2 ${iconBg} w-16 h-16 rounded-full flex items-center justify-center`}>
                {icon}
            </div>

            <p className="text-sm text-left mb-2">{number} — {category}</p>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm leading-relaxed">{description}</p>
        </div>
    );
}