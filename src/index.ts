import parse from "csv-parse/lib/sync";
import fs from "fs";
import { repeat, shuffle } from "lodash";
import Confirm from "prompt-confirm";

(async () => {
  const participants = shuffle(loadParticipants());
  while (await new Confirm("Ready to get a crown a winner?").run()) {
    const winner = participants.pop();
    if (!winner) break;
    print(winner);
  }
})()
  .then(() => console.log("\n\nHave fun with your Google Daydream!\n\n"))
  .catch((e) => console.log("Uh oh, something went wrong :'(", e));

function loadParticipants(): Participant[] {
  const text = fs
    .readFileSync("participants.csv")
    .toString()
    .trim();
  const participants: Participant[] = parse(text, { columns: true, trim: true });
  return participants.filter(includeParticipant);
}

function includeParticipant({ ticket, status }: Participant) {
  return (
    ticket !== "DevFest - Speaker / Staff" &&
    ticket !== "DevFest Master of Ceremony" &&
    status === "Checked In"
  );
}

function print(winner: Participant) {
  const winnerText = `We have a winner 🎉 ${winner.firstName} ${winner.lastName} (${winner.email})`;
  console.log();
  console.log(` ${repeat("*", winnerText.length + 6)} `);
  console.log(` ** ${winnerText} ** `);
  console.log(` ${repeat("*", winnerText.length + 6)} `);
  console.log();
}

interface Participant {
  firstName: string;
  lastName: string;
  email: string;
  ticket: Ticket;
  status: Status;
}

type Ticket =
  | "DevFest 2018 - Early Bird"
  | "DevFest 2018 - Normal"
  | "DevFest 2018 - HSR"
  | "DevFest - Speaker / Staff"
  | "Diversity"
  | "DevFest 2018 - Student (only with valid student ID)"
  | "DevFest Master of Ceremony"
  | "DevFest 2018 - I ❤️ GDG";

type Status = "Attending" | "Checked In";
