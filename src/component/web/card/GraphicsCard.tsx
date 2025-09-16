import Image from 'next/image';

type GraphicsCardProp = {
  id: number
}
export function GraphicsCard({
  id
}: GraphicsCardProp) {
  return (
    <div className="w-64 bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-40 bg-gray-800 flex items-center justify-center">

        <Image
          src={`/assets/images/${id}.png`}
          alt="Description of image"
          fill 
          className="object-cover"
        />
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
