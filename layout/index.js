export default function Layout({ children }) {
  return (
    <div className="mx-auto p-4 h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
