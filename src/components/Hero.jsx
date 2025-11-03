export default function Hero({ title, subtitle, backgroundImage }) {
  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-white/90 max-w-2xl text-balance">{subtitle}</p>}
      </div>
    </div>
  )
}
