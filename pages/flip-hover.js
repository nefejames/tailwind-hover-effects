export default function FlipHover() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-500">
      <div
        id="card"
        className="relative w-96 h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500 duration-700 card"
      >
        <FrontOfCard />

        <BackOfCard />
      </div>
    </div>
  );
}

function FrontOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 rotate-front hover:opacity-0">
      FRONT OF CARD
    </div>
  );
}

function BackOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
      BACK OF CARD
    </div>
  );
}
