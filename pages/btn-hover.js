export default function ButtonHover() {
  return (
    <div className="w-full h-screen bg-gray-500 flex items-center justify-center text-gray-100">
      <div className="flex flex-col items-center mx-auto">
        {/* effect 1 */}
        <button
          className="relative btn3 border border-white uppercase font-semibold tracking-wider leading-none"
          type="button"
        >
          <span className="absolute inset-0 bg-white"></span>
          <div className="relative px-10 py-3 bg-blue-600">
            scale hover effect 1
          </div>
        </button>

        {/* effect 2 */}
        <button
          className="btn relative btn4 border border-white overflow-hidden"
          type="button"
        >
          <span className="absolute inset-x-0 h-3 bottom-0 bg-white"></span>
          hover effect 2
        </button>

        {/* ===================== DEVDOJO ======================== */}
        {/* effect 3 */}
        <button className="btn relative inline-block font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-300"></span>
          <span className="relative text-black group-hover:text-white">
            3d hover effect 3
          </span>
        </button>

        {/* effect 4 */}
        <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
          <span className="w-56 h-48 rounded bg-purple-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            hover effect 4
          </span>
        </button>
      </div>
    </div>
  );
}
