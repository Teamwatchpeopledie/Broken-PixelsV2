import { GraphicsCard } from "../card/GraphicsCard";

export default function GraphicsWidget() {
  const fakeCards = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="p-8 bg-black min-h-screen">
      <h2 className="text-white text-2xl font-bold mb-6">3D Graphics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fakeCards.map((id) => (
          <GraphicsCard key={id} />
        ))}
      </div>
    </div>
  );
}
