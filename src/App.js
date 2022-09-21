import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Timer from "./components/Timer/Timer";
import Container from "./components/Container/Container";
const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval;
    if(timer){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } 
    return () => clearInterval(interval);
  }, [timer])

  return (
      <Container>
      <Timer time={time} />
      <Button onClick={() => setTimer(true)}>Start</Button>
      <Button onClick={() => setTimer(null)}>Stop</Button>
      <Button onClick={() => setTime(0)}>Reset</Button>
      </Container>
  );
}

export default App;
