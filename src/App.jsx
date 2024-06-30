import { useState } from "react";
//components
import AddVolume from "./components/AddVolume";
//services
import permanenceService from "./services/permanenceService";

function App() {
  //states
  const [newVolume, setVolume] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState({ persons: 0, volume: 0 });
  const [newPermanence, setNewPermanence] = useState(Date.now());
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  //handlers
  const handleVolume = (event) => {
    setVolume(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerm = { ...totalDeposit, date: newPermanence };
    return permanenceService.createPerm(newPerm).then((response) => {
      console.log("new perm created", response);
      alert("new permanence created");
      return true;
    });
  };
  const handleDeposit = () => {
    const newDeposit = { ...totalDeposit };
    if (newVolume !== 0) {
      newDeposit.persons += 1;
      newDeposit.volume += newVolume;
    }

    setTotalDeposit(newDeposit);
    setVolume(0);

    setSubmitDisabled(false);
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
        <button type="submit" disabled={isSubmitDisabled ? true : false}>
          Fin de la permanence
        </button>
      </form>
      <p>Déposants: {totalDeposit.persons}</p>
      <p>Volume: {totalDeposit.volume}</p>
    </>
  );
}

export default App;
