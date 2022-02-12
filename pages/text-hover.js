export default function TextLinkHovers() {
  return (
    <div>
      {/* first hover effect */}
      <p className="text-3xl m-16 relative w-max one">
        <span>Hover over me</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-blue-400"></span>
      </p>

      {/* second hover effect */}
      <p className="text-3xl m-16 relative w-max one">
        <span>Hover over me</span>
        <span className="absolute -bottom-1 right-0 w-0 transition-all h-1 bg-blue-400"></span>
      </p>

      {/* third hover effect */}
      <p className="text-3xl m-16 relative w-max two">
        <span>Hover over me</span>
        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400"></span>
      </p>

      {/* fourth hover effect */}
      <p className="text-3xl m-16 relative w-max three">
        <span className="px-1">Hover over me</span>
        <span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-blue-400 -z-10"></span>
      </p>
    </div>
  );
}
