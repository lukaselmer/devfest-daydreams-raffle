export interface Participant {
  firstName: string;
  lastName: string;
  email: string;
  ticket: Ticket;
  status: Status;
}

export type Ticket =
  | "DevFest 2018 - Early Bird"
  | "DevFest 2018 - Normal"
  | "DevFest 2018 - HSR"
  | "DevFest - Speaker / Staff"
  | "Diversity"
  | "DevFest 2018 - Student (only with valid student ID)"
  | "DevFest Master of Ceremony"
  | "DevFest 2018 - I ❤️ GDG";

export type Status = "Attending" | "Checked In";
