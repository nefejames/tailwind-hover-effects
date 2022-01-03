export default function ShineHover() {
  return (
    <div className="mx-auto w-72 h-60 bg-red-200 cursor-pointer">
      <div className="h-full group flex justify-center items-center relative overflow-hidden">
        <h2>Hover over me</h2>

        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
      </div>
    </div>
  );
}
