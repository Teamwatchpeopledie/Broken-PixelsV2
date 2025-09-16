export function GraphicsCard() {
  return (
    <div className="w-64 bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-40 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">Image of 3D</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">3D Model Name</h3>
        <p className="text-gray-400 text-sm">
          Short description of the 3D model or graphic goes here.
        </p>
      </div>
    </div>
  );
}
