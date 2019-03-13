/**
 * interface ChatbotMessageButton
 * ------------------------------
 * replyText: message text that is sent to the chatbot engine
 * text: text that is shown to the user as possible reply
 */
export interface ChatbotMessageButton {
  replyText: string;
  text: string;
}

/**
 * interface ChatbotMessage
 * ------------------------
 * message: message to send to or receive from the chatbot engine
 * type: message type, can be either text, url, image, radio or error
 * elements: an array of chatbot message buttons; all possible replies when type is radio
 * image: image source when type is image
 * session_id: id that identifies the chat to easily retrieve the chat history if necessary
 * url: url address when type is url
 * send: whether the message is from the chatbot (false) or the user (true);
 * hide: whether the message should be hidden in the conversation, e.g. when a button was clicked
 */
export interface ChatbotMessage {
  message: string;
  type: string;
  elements?: ChatbotMessageButton[];
  image?: string;
  session_id?: string;
  url?: string;
  send?: boolean;
  hide?: boolean;
  avatar?: string;
}

/**
 * type ChatbotConversation
 * ------------------------
 * An array of chatbot messages
 */
export type ChatbotConversation = ChatbotMessage[];
