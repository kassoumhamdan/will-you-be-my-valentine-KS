"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  // 🎆 Fireworks effect
  useEffect(() => {
    if (yesPressed) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }

        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.6 },
        });
      }, 250);
    }
  }, [yesPressed]);

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {yesPressed ? (
        <>
          {/* 🎬 Video responsive paysage */}
          <div className="flex justify-center items-center w-full overflow-hidden">
            <video
              className="
                max-h-[80vh]
                w-auto
                -rotate-90
                rounded-2xl
                shadow-2xl
              "
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src={`${import.meta.env.BASE_URL}love.mp4`}
                type="video/mp4"
              />
            </video>
          </div>


          <div className="my-6 text-2xl md:text-4xl font-bold">
            WOOOOOO!!! I love you my baddy ❤️
          </div>
        </>
      ) : (
        <>
          {/* 📸 Photo responsive */}
          <img
            className="
              w-[85%]
              max-w-[400px]
              md:max-w-[500px]
              h-auto
              rounded-2xl
              shadow-2xl
              object-cover
            "
            src={`${import.meta.env.BASE_URL}love.jpg`}
            alt="Mon amour ❤️"
          />

          <h1 className="my-6 text-2xl md:text-4xl">
            Will you be my Valentine Queeny?
          </h1>

          <div className="flex items-center gap-4">
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-all"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
