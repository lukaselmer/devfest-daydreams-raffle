import { shuffle } from 'lodash';
import Confirm from 'prompt-confirm';
import { loadParticipants } from './input';
import { print } from './output';

(async () => {
  const participants = shuffle(loadParticipants());
  while (await shouldCrownAnotherWinner()) {
    const winner = participants.pop();
    if (!winner) break;
    await print(winner);
  }
})()
  .then(() => console.log('\n\nHave fun with your Google Daydream!\n\n'))
  .catch(e => console.log("Uh oh, something went wrong :'(", e));

function shouldCrownAnotherWinner(): Promise<boolean> {
  return new Confirm('Ready to get a crown a winner?').run();
}
