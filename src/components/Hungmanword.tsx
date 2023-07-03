type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span
          style={{
            borderBottom: '.1em solid black',
            fontSize: '4rem', // Responsive font size
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
              fontSize: '6rem', // Responsive font size
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
