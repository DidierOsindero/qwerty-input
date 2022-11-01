import { hasAVowel } from "../utils/hasAVowel";
import { hasPunctuation } from "../utils/hasPunctuation";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({
  wordToDescribe,
}: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
  const containsPunctuation = hasPunctuation(wordToDescribe);
  const isInputStrong = (input: string): boolean => {
    if (
      input.length > 6 &&
      input.toLowerCase() !== input &&
      input.toUpperCase() !== input &&
      input.split("").some((el) => "!@£$%^&*?".includes(el))
    ) {
      return true;
    }

    return false;
  };

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {containsPunctuation && <li>Contains punctuation mark(s)</li>}
      {isInputStrong(wordToDescribe) && <li>Input is Strong</li>}
    </ul>
  );
}

export default WordDescription;
