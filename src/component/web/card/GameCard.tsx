interface GameCardProps {
  title: string;
  description: string;
  image?: string; // optional, in case no image is provided
}

export default function GameCard({ title, description, image }: GameCardProps) {
  return (
    <div className="max-w-sm bg-background border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4">
      {/* Game Image */}
      <div className="w-full h-40 bg-background border rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">No Image</span>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

    </div>
  );
}
