export default function GradientHover() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-500">
      {/* <!-- I have added "m-2 p-10 text-white rounded-xl" for a better representation. Check the config tab out, too. --> */}

      {/* hover effect 1 */}
      <div className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-t to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-pointer">
        Hover over me
      </div>

      {/* hover effect 2 */}
      <div className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
        <p>Hover over me</p>
      </div>
    </div>
  );
}
