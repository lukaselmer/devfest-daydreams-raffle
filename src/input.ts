import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import { Participant } from './interfaces';

export function loadParticipants(): Participant[] {
  const text = fs
    .readFileSync('participants.csv')
    .toString()
    .trim();
  const participants: Participant[] = parse(text, { columns: true, trim: true });
  return participants.filter(includeParticipant);
}

function includeParticipant({ ticket, status }: Participant) {
  return (
    ticket !== 'DevFest - Speaker / Staff' &&
    ticket !== 'DevFest Master of Ceremony' &&
    status === 'Checked In'
  );
}
