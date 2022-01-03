export default function BasicHover() {
  return (
    <div>
      <div className="flex justify-around text-center space-x-16">
        <div className="transform h-64 bg-blue-400 w-60 hover:bg-blue-600 transition duration-500 hover:scale-125">
          box 1
        </div>
        <div className="transform h-64 bg-blue-400 w-60 hover:bg-blue-600 transition duration-500 hover:scale-125">
          box 2
        </div>
        <div className="transform h-64 bg-blue-400 w-60 hover:bg-blue-600 transition duration-500 hover:scale-125">
          box 3
        </div>
      </div>
    </div>
  );
}
