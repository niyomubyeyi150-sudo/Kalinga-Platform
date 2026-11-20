import { useCallback, useState } from "react";
import Preloader from "./components/Preloader";
import Home from "./pages/home";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showHeroPreview, setShowHeroPreview] = useState(false);

  const handleIntroFinish = useCallback(() => {
    setShowIntro(false);
    setShowHeroPreview(true);
  }, []);

  const handleClosePreview = useCallback(() => {
    setShowHeroPreview(false);
  }, []);

  return (
    <main className="relative min-h-screen">
      <div
        className={`transition-opacity duration-700 ${
          showIntro ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={showIntro}
      >
        <Home
          showHeroPreview={showHeroPreview}
          onCloseHeroPreview={handleClosePreview}
        />
      </div>

      {showIntro && <Preloader onFinish={handleIntroFinish} />}
    </main>
  );
}

export default App;
