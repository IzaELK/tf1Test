import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { ProgramCarousel } from "./components/ProgramCarousel";
import { getAllShows } from "./fetcher/program/program";
import { Show } from "./fetcher/program/program.type";

function App() {
  const [program, setProgram] = useState<Show[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchProgram = async () => {
    getAllShows()
      .then((program) => {
        setProgram(program);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProgram();
  }, []);

  return (
    <div className="app">
      {isLoading && <div>Le programme est en cours de chargement</div>}
      {hasError && (
        <div>
          Le programme n'a pas pu être chargé veuillez réessayer plus tard
        </div>
      )}

      <ProgramCarousel shows={program} />
    </div>
  );
}

export default App;
