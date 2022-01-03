export default function GradientHover() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-500">
      {/* <!-- I have added "m-2 p-10 text-white rounded-xl" for a better representation. Check the config tab out, too. --> */}

      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-t to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
        Hover over me
      </button>
      {/* <!-- More examples --> */}
      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
        Hover over me
      </button>
      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
        Hover over me
      </button>
      <br />
      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-t from-red-800 via-red-500 to-red-200 bg-size-200 bg-pos-0 hover:bg-pos-100">
        Hover over me
      </button>
      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl from-purple-800 via-purple-600 to-purple-400 bg-size-200 bg-pos-0 hover:bg-pos-100">
        Hover over me
      </button>
      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100">
        Hover over me
      </button>
    </div>
  );
}
