import { useEffect, useState } from "react";

export default function ClickerGame() {
  const [credits, setCredits] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoIncome, setAutoIncome] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const [antibonus, setAntibonus] = useState(null);

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("game"));

    if (save) {
      setCredits(save.credits);
      setClickPower(save.clickPower);
      setAutoIncome(save.autoIncome);
      setMultiplier(save.multiplier);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "game",
      JSON.stringify({ credits, clickPower, autoIncome, multiplier })
    );
  }, [credits, clickPower, autoIncome, multiplier]);

  useEffect(() => {
    const interval = setInterval(() => {
      const chance = Math.random();

      if (chance < 0.3) {
        const effects = ["virus", "freeze", "doubleCost"];
        const random = effects[Math.floor(Math.random() * effects.length)];

        setAntibonus(random);

        setTimeout(() => {
          setAntibonus(null);
        }, 5000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      if (antibonus === "freeze") return;

      setCredits(c => c + autoIncome * multiplier);
    }, 1000);

    return () => clearInterval(i);
  }, [autoIncome, multiplier, antibonus]);

  const handleClick = () => {
    if (antibonus === "freeze") return;

    let power = clickPower;

    if (antibonus === "virus") {
      power = Math.floor(power / 2);
    }

    setCredits(credits + power * multiplier);
  };

  const upgradeClick = () => {
    let cost = 50;

    if (antibonus === "doubleCost") {
      cost *= 2;
    }

    if (credits < cost) return;

    setCredits(credits - cost);
    setClickPower(clickPower + 1);
  };

  const upgradeAuto = () => {
    let cost = 100;

    if (antibonus === "doubleCost") {
      cost *= 2;
    }

    if (credits < cost) return;

    setCredits(credits - cost);
    setAutoIncome(autoIncome + 1);
  };

  const prestige = () => {
    if (credits < 1000) return;

    setCredits(0);
    setClickPower(1);
    setAutoIncome(0);
    setMultiplier(multiplier + 1);
  };

  const antibonusText = {
    virus: "Кліки слабші",
    freeze: "Все заморожено",
    doubleCost: "Апгрейди дорожчі"
  };

  return (
    <div>
      <h2>Credits: {credits}</h2>

      <button onClick={handleClick}>
        CLICK (+{clickPower * multiplier})
      </button>

      {antibonus (
        <p style={{ color: "red" }}>
          {antibonusText[antibonus]}
        </p>
      )}

      <hr />

      <h3>Upgrades</h3>

      <button onClick={upgradeClick}>
        + Click Power (50)
      </button>

      <button onClick={upgradeAuto}>
        + Auto Income (100)
      </button>

      <p>Auto income: {autoIncome}/sec</p>

      <hr />

      <h3>Prestige</h3>

      <button onClick={prestige}>
        Prestige (1000)
      </button>

      <p>Multiplier: x{multiplier}</p>
    </div>
  );
}