interface ToolCarouselCardProps {
  src: string;
  title: string;
  text: string;
}

export function ToolCarouselCard({ src, title, text }: ToolCarouselCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-black/30 backdrop-blur-md rounded-2xl p-6 w-full max-w-4xl md:basis-1/2 mx-auto shadow-xl">

      {/* IMAGEM */}
      <img
        src={src}
        alt={title}
        className="w-40 h-40 object-contain rounded-xl"
      />

      {/* TEXTO */}
      <div className="text-center md:text-left space-y-3">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-gray-300 text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
