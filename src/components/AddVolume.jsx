const AddVolume = ({ handleDeposit, handleVolume, newVolume }) => {
  return (
    <>
      <label htmlFor="volumeInput">Volume:</label>
      <input
        type="number"
        id="volumeInput"
        name="volumeInput"
        min="0"
        max="100"
        value={newVolume}
        required
        onChange={handleVolume}
      />
      <button disabled={!newVolume} onClick={handleDeposit}>
        Ajouter
      </button>
    </>
  );
};

export default AddVolume;
