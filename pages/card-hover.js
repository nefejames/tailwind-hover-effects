import Image from "next/image";

export default function CardHover() {
  return (
    <div className="mx-auto w-72 h-60">
      <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
        <Image
          src="/card-img.jpg"
          alt="A brand's image"
          width={428}
          height={428}
          className="rounded-md object-cover transform transition-transform ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
        />
        <div className="absolute top left bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
        <div className="absolute top left h-full w-full flex items-center justify-center p-8">
          <svg
            width={50}
            height={39}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 2h21.08L22.083 24.973H1L16.5 2Z"
              className="ccompli1"
              fill="#007AFF"
            />
            <path
              d="M17.422 27.102 11.42 36h22.082L49 13.027H32.702l-9.496 14.075h-5.784Z"
              className="ccustom"
              fill="#312ECB"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
