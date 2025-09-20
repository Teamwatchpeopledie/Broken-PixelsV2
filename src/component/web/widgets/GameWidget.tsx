import GameCard from "../card/GameCard";

export default function GameWidget() {
  // Example game data
  const games = [
    { id: 1, title: "Hunt Chaser", desc: "Explore maze based high level tactical game." },
    { id: 2, title: "Cyber Dash", desc: "Fast-paced futuristic racing game with neon vibes." },
    { id: 3, title: "Pixel Heroes", desc: "Classic pixel RPG adventure with quirky characters." },
    { id: 4, title: "Shadow Ops", desc: "Tactical stealth shooter with deep strategy." },
    { id: 5, title: "Farm Tycoon", desc: "Build and manage your dream farm empire." },
    { id: 6, title: "Galaxy Raiders", desc: "Pilot your ship through epic space battles." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Game Widget</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            description={game.desc}
          />
        ))}
      </div>
    </div>
  );
}
