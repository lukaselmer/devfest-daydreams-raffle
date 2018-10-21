import { shuffle } from "lodash";
import Confirm from "prompt-confirm";

(async () => {
  let participants = [1, 2, 3, 4, 5];
  do {
    let winner;
    [winner, ...participants] = shuffle(participants);
    console.log(winner);
  } while (await new Confirm("Another one?").run());
})()
  .then(() => console.log("Have fun with your Google Daydream!"))
  .catch((e) => console.log("Uh oh, something went wrong :-(", e));
