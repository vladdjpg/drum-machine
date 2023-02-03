import { useEffect, useState } from "react";

export const FnPads = ({handleChewie}) => {
    const [party, setParty] = useState(false);
    const [tick, setTick] = useState(false);
    
    const fnPadArray = [
    { name: "Tick", func: "tickFn" },
    { name: "Party Mode", func: "partyFn" },
    { name: "Chewie", func: "chewieFn" },
  ];
    
    // Switch statement for fnPads
    const pickFunction = (fnId) => {
      switch (fnId) {
        case "chewieFn":
          handleChewie();
          break;
        case "partyFn":
          if (party) {
            setParty(false);
          } else {
            setParty(true);
          }
          break;
        case "tickFn":
            if (tick) {
                setTick(false);
              } else {
                setTick(true);
              }
          break;
        default:
          console.log("Switch run in pickFunction, no match found though.");
          break;
      }
    };
    
     // Turns the PaRtY mOdE on and off
    useEffect(() => {
      if (party) {
        console.log("party mode turned ON!");
        let i = 0;
        const color = ["pink", "blue", "brown", "green"];
        const changeColour = setInterval(() => {
            document.querySelector("html").style.backgroundColor = color[i];
            i = (i + 1) % color.length;
            console.log("switching colour...");
        }, 600);
        return () => clearInterval(changeColour);
      } else {
        console.log("party mode is OFF");
        clearInterval();
        document.querySelector("html").style.backgroundColor = "green";
      }
    }, [party]);
    
    // Turns the click on and off
    useEffect(() => {
      if (tick) {
        console.log("click turning on...");
        let tickSound = new Audio("https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/snare.wav?raw=true"); 
        const keepTickin = setInterval(() => {
            tickSound.play();
        }, 700);
        return () => clearInterval(keepTickin);
      } else {
        console.log("click is OFF");
        clearInterval();
      }
    }, [tick]);
    
    return(
    <div id="fnPads"> {/*The 3 fnPads!*/}
            {fnPadArray.map((el, idx) => (
              <div
                className="fnPad"
                key={idx}
                onClick={() => {
                  pickFunction(el.func);
                }}
              >
                <label>{el.name}</label>
              </div>
            ))}
          </div>
    )
    
  }