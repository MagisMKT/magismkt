export default function HeroSection({ title, subtitle }) {
  return (
    <div className="bg-blue-500 text-white text-center p-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
