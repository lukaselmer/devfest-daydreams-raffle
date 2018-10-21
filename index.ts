import { shuffle } from "lodash";

const participants = [1, 2, 3, 4, 5];
const [winner, ...rest] = shuffle(participants);
console.log(winner);
confirm("test");
