import "./globals.css";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";
import Loader from "../components/Loader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

<Loader />
        {/* Background Particles */}
        <Particles />

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}