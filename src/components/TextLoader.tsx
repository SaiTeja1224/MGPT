import { useState, useEffect } from "react";

// Phases to cycle through
const default_phases = ["Thinking...", "Processing...", "Generating..."];

export default function TextLoader({enable, onComplete, phases} : {enable : boolean, onComplete ?: () => void, phases ?: string[]}) {
  const [phase, setPhase] = useState(""); // The current phase text being displayed
  const [loading, setLoading] = useState(true);
  const [elapsedTime, setElapsedTime] = useState("");


  const runProcess = async () => {
    try {
      setLoading(true);
      let currentPhaseIndex = 0;
      const currentPhases = phases || default_phases;

      // Start displaying the first phase immediately
      setPhase(default_phases[currentPhaseIndex]);
      
      const phaseInterval = setInterval(() => {
        currentPhaseIndex = (currentPhaseIndex + 1) % currentPhases.length;
        setPhase(currentPhases[currentPhaseIndex]);
      }, 2000); // Change phase every 2 seconds

      return phaseInterval;
    } catch {
      setPhase("Error! Please try again.");
      setLoading(false);
      setElapsedTime("");
    }
  };

  useEffect(() => {
    let phaseInterval: number | undefined;
    const startTime = Date.now(); // begin
    if(enable){
      runProcess().then((data) => {
        phaseInterval = data
      });
    }
    return () => {
      if(phaseInterval){
        clearInterval(phaseInterval);
        setPhase("");
        setLoading(false); // Set loading to false
        const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2); // end
        setElapsedTime(timeTaken);
        if(onComplete){
          onComplete();
        }
      }
    }
  }, [enable]);

  return (
    <div className="my-4">
      {loading && <span className="text-lg font-medium animate-pulse">{phase}</span>}

      {!loading && (
        <div className="text-lg font-medium">
          <span>Completed in {elapsedTime} seconds</span>
        </div>
      )}
    </div>
  );
}
