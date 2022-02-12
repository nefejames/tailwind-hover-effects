export default function BasicHover() {
  return (
    <div className="space-x-16">
      <div className="transform h-64 bg-blue-400 w-80 hover:bg-blue-600 transition duration-500 hover:scale-125 flex justify-center items-center">
        <p className="text-lg">Hover over me!</p>
      </div>
    </div>
  );
}
