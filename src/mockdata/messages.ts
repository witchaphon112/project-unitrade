export interface Message {
  id: number;
  title: string;
  desc: string;
  category: string;
}

export const messagesData: Message[] = [
  { id: 1, title: "Interested in your textbook", desc: "Is this still available?", category: "Inquiry" },
  { id: 2, title: "Price negotiation", desc: "Would you take 30,000 for the MacBook?", category: "Offer" },
  { id: 3, title: "Meeting request", desc: "Can we meet tomorrow at the library?", category: "Meeting" },
];