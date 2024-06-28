import { useState } from "react";
//components
import AddVolume from "./components/AddVolume";

function App() {
  const deposits = [{ id: 1, date: "2024-06-28", persons: 8, volume: 100 }];
  //states
  const [newVolume, setVolume] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState({ persons: 0, volume: 0 });
  const [newPermanence, setNewPermanence] = useState(Date.now());
  //handlers
  const handleVolume = (event) => {
    setVolume(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleDeposit = () => {
    const newDeposit = { ...totalDeposit };
    if (newVolume !== 0) {
      newDeposit.persons += 1;
      newDeposit.volume += newVolume;
    }

    setTotalDeposit(newDeposit);
    setVolume(0);
  };
  const handlePermanence = (event) => {
    setNewPermanence(event.target.value);
  };
  //App
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          id="dateInput"
          name="dateInput"
          value={newPermanence}
          required
          onChange={handlePermanence}
        />
        <AddVolume
          newVolume={newVolume}
          handleVolume={handleVolume}
          handleDeposit={handleDeposit}
        />
      </form>
      <p>Déposants: {totalDeposit.persons}</p>
      <p>Volume: {totalDeposit.volume}</p>
    </>
  );
}

export default App;
