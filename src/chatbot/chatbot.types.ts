export interface ChatbotMessageButton {
  replyText: string;
  text: string;
}

export interface ChatbotMessage {
  message: string;
  type: 'text' | 'url' | 'image' | 'radio';
  elements?: ChatbotMessageButton[];
  image?: string;
  url?: string;
  send?: boolean;
  hide?: boolean;
}

export type ChatbotConversation = ChatbotMessage[];
