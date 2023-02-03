export const Pads = () => {
  const padArray = [
    {
      name: "tom low",
      colour: "red",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/tom-low.wav?raw=true",
    },
    {
      name: "tom mid",
      colour: "blue",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/tom-mid.wav?raw=true",
    },
    {
      name: "tom high",
      colour: "magenta",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/tom-high.wav?raw=true",
    },
    {
      name: "kick",
      colour: "aqua",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/kick.wav?raw=true",
    },
    {
      name: "ride",
      colour: "pink",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/ride.wav?raw=true",
    },
    {
      name: "bord",
      colour: "green",
      soundSrc:
        "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Schwarzbrauenalbatros_Diomedea_melanophris_R_AMPLE-E0114.mp3",
    },
    {
      name: "close hat",
      colour: "orange",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/hihat-close.wav?raw=true",
    },
    {
      name: "open hat",
      colour: "purple",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/hihat-open.wav?raw=true",
    },
    {
      name: "crash",
      colour: "red",
      soundSrc:
        "https://github.com/vladdjpg/drum-machine/blob/main/src/resources/sounds/crash.wav?raw=true",
    },
  ];

  // Plays the sounds
  const playSound = (sound) => {
    console.log(sound);
    let audio = new Audio(sound.soundSrc);
    audio.play();
  };

  return (
    <div id="pads">
      {" "}
      {/*All the 9 sound pads!*/}
      {padArray.map((el, idx) => (
        <div
          className="pad"
          key={idx}
          style={{ backgroundColor: el.colour }}
          onClick={() => {
            playSound(el);
          }}
        >
          <label>{el.name}</label>
        </div>
      ))}
    </div>
  );
};
