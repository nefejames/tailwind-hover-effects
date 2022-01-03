import NextLink from "next/link";
import routes from "routes";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 leading-12 mb-4">
        A collection of Tailwind CSS hover effects 👇
      </h1>

      <ul>
        {routes.map((route, i) => (
          <li
            key={i}
            className="text-2xl underline list-decimal hover:text-blue-600 transition ease-in-out duration-300 mb-2 last:mb-0"
          >
            <NextLink href={route.href}>
              <a target="_blank">{route.label}</a>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
