interface SideImageProps {
  image: string;
  label?: string;
  title: React.ReactNode;
  description: string;
  reverse?: boolean;
}

export default function SideImage({
  image,
  label,
  title,
  description,
  reverse = false,
}: SideImageProps) {
  return (
    <div
      className={`flex gap-12 items-center px-16 py-12 ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="w-1/2">
        <img
          src={image}
          alt={typeof title === "string" ? title : "Side image"}
          className="w-full aspect-[2/1] object-cover rounded-3xl"
        />
      </div>

      <div className="w-1/2 text-white flex flex-col gap-4">
        {label && (
          <p className="text-lg font-medium tracking-wide font-semibold text-[#FFFFFF]">
            {label}
          </p>
        )}
        <h1 className="text-[28px] md:text-[32px] font-medium text-left leading-tight">
          {title}
        </h1>
        <p className="font-light text-left leading-relaxed text-[15px] md:text-[17px] text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
}
