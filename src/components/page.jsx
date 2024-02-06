import Footer from "./Footer";
import Header from "./Header";
export default function Page({ children }) {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
