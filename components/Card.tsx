export default function Card({
  number,
  category,
  title,
  description,
  icon,
  iconBg,
}: CardProps) {
  return (
    <div className="relative pt-20 pb-12 px-10 bg-[#037AB8] rounded-2xl text-white flex-1 flex flex-col min-h-[300px]">
      <div
        className={`absolute -top-8 left-1/2 -translate-x-1/2 ${iconBg} w-16 h-16 rounded-full flex items-center justify-center`}
      >
        {icon}
      </div>

      <p className="text-xs text-left mb-3 text-white/80 tracking-wide">
        {number} — {category}
      </p>
      <h2 className="text-2xl font-bold mb-5 text-left leading-snug">{title}</h2>
      <p className="text-sm leading-relaxed text-left text-white/90">{description}</p>
    </div>
  );
}