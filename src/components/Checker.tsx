import { useState, ChangeEvent } from "react";
import sound from "../sounds/animal-sound-cow-mooing_F_major.mp3";

const Checker = () => {
  const [pH, setPH] = useState(0);
  const [temp, setTemp] = useState(0);
  const [taste, setTaste] = useState(0);
  const [odor, setOdor] = useState(0);
  const [fat, setFat] = useState(0);
  const [turbidity, setTurbidity] = useState(0);
  const [color, setColor] = useState(0);
  let grade;

  const [error, setError] = useState("");

  const [result, setResult] = useState(null);

  const handleClick = async () => {
    new Audio(sound).play();
    // Call the async function to make the API call
    try {
        const data = {
            "Inputs": {
                "input1": [
                    {
                        "pH": pH,
                        "Temprature": temp,
                        "Taste": taste,
                        "Odor": odor,
                        "Fat": fat,
                        "Turbidity": turbidity,
                        "Colour": color,
                    },
                ],
            },
        };

        const apiKey = "HC7mDitmyYlJPuT8QywBuKVAUFFJ1euz";
        const endpointUrl =
            "http://17824cf0-1d23-4c52-a8da-94e72bfef078.westeurope.azurecontainer.io/score";

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        };

        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to make prediction");
        }

        const responseData = await response.json();

        setResult(responseData);
        setError("");
    } catch (error) {
        setResult(null);
        setError("An error occurred while making the prediction.");
    }

    console.log(result);
};


  const handleChangePH = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setPH(newValue);
  };

  const handleChangeTemp = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setTemp(newValue);
  };

  const handleChangeTaste = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseFloat(event.target.value);
    setTaste(newValue);
  };

  const handleChangeOdor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseFloat(event.target.value);
    setOdor(newValue);
  };

  const handleChangeFat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseFloat(event.target.value);
    setFat(newValue);
  };

  const handleChangeTurbidity = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = parseFloat(event.target.value);
    setTurbidity(newValue);
  };

  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setColor(newValue);
  };

  return (
    <div className="checker-container">
      <div className="checker-form-container">
        <h2 className="checker-headline">Let's check my MILK</h2>
        <form className="checker-form">
          <label className="input-label">ph:</label>
          <input
            className="checker-input"
            type="number"
            value={pH}
            onChange={handleChangePH} // Call handleChange function when input value changes
            placeholder="Type pH value"
          />
          <br />
          <label className="input-label">Temperature:</label>
          <input
            className="checker-input"
            type="number"
            value={temp}
            onChange={handleChangeTemp} // Call handleChange function when input value changes
            placeholder="Type temperature"
          />
          <br />
          <label className="input-label">Taste:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChangeTaste}
            value={1}
          >
            <option className="select-option" value={1}>
              Good
            </option>
            <option className="select-option" value={0}>
              Bad
            </option>
          </select>
          <br />
          <label className="input-label">Odor:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChangeOdor}
            value={1}
          >
            <option className="select-option" value={1}>
              Good
            </option>
            <option className="select-option" value={0}>
              Bad
            </option>
          </select>
          <br />
          <label className="input-label">Fat:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChangeFat}
            value={1}
          >
            <option className="select-option" value={1}>
              High
            </option>
            <option className="select-option" value={0}>
              Low
            </option>
          </select>
          <br />
          <label className="input-label">Turbidity:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChangeTurbidity}
            value={1}
          >
            <option className="select-option" value={1}>
              High
            </option>
            <option className="select-option" value={0}>
              Low
            </option>
          </select>
          <br />
          <label className="input-label">Color:</label>
          <input
            className="checker-input"
            type="number"
            value={color}
            onChange={handleChangeColor} // Call handleChange function when input value changes
            placeholder="Type color value"
          />
        </form>
        <button className="submit-button" onClick={handleClick}>
          Start MilkCheck!
        </button>
      </div>
      <div className="checker-grade">
        <div className="checker-grade-headline">
          And the grade of your milk is:
        </div>
        <div className="checker-grade-grade">{grade}</div>
      </div>
    </div>
  );
};

export default Checker;
