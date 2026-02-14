"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

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
    <div className="-mt-16 flex h-screen flex-col items-center justify-center px-4 text-center">
      {yesPressed ? (
        <>
          {/* GIF après avoir cliqué Yes */}
          <img
            className="h-[200px] md:h-[250px] rounded-xl shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Love gif"
          />

          <div className="my-6 text-2xl md:text-4xl font-bold">
            WOOOOOO!!! I love you my baddy!! ;))
          </div>
        </>
      ) : (
        <>
          {/* PHOTO avant le clic */}
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
              onClick={() => setYesPressed(true)}
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
