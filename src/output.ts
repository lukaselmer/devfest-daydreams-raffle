import asciiArt from 'ascii-art';
import { repeat } from 'lodash';
import { Participant } from './interfaces';

export async function print(winner: Participant) {
  const content = await convertToAsciiArt(`${winner.firstName} ${winner.lastName}`);
  const names = `${winner.firstName} ${winner.lastName}`;
  const length = content.split('\n')[0].length;

  console.log(` ╭${repeat('─', length + 2)}╮ `);
  console.log(` │ We have a winner 🎉 ${repeat(' ', length - 'We have a winner 🎉'.length)}│`);
  for (const line of content.split('\n')) console.log(` │ ${line} │`);
  console.log(` │ ${names} ${repeat(' ', length - names.length)}│`);
  console.log(` │ ${winner.email} ${repeat(' ', length - winner.email.length)}│`);
  console.log(` ╰${repeat('─', length + 2)}╯ `);
  console.log();
}

function convertToAsciiArt(text: string) {
  const textToRender = text.length > 20 ? text.split(' ')[0] : text;
  return new Promise<string>(resolve =>
    asciiArt.font(textToRender, 'doom', (transformed: string) =>
      resolve(removeLastLineBreak(transformed))
    )
  );
}

function removeLastLineBreak(text: string) {
  const chars = text.split('');
  chars.pop();
  return chars.join('');
}
