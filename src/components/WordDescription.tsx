import { hasAVowel } from "../utils/hasAVowel"
import { hasPunctuation } from "../utils/hasPunctuation";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const containsPunctuation = hasPunctuation(wordToDescribe)

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {containsPunctuation && <li>Contains punctuation mark(s)</li>}
    </ul>
  )
}

export default WordDescription