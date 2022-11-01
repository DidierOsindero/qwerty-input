import { hasAVowel } from "../utils/hasAVowel";
import { hasPunctuation } from "../utils/hasPunctuation";
import { isInputStrong } from "../utils/isInputStrong"

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
  const isStrong = isInputStrong(wordToDescribe)

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {containsPunctuation && <li>Contains punctuation mark(s)</li>}
      {isStrong && <li>Password is strong</li>}
    </ul>
  );
}

export default WordDescription;
