/**
 * interface ChatbotMessageElement
 * -------------------------------
 * replyText: message text that is sent to the chatbot engine
 * text: text that is shown to the user as possible reply
 */
interface ChatbotMessageElement {
  text: string;
  replyText?: string;
}

/**
 * interface ChatbotMessageAction
 * ------------------------------
 * action: the name that identifies the action
 * text: text that is shown to the user as possible acttion
 * params: optional values that can be sent along with an action
 */
export interface ChatbotMessageAction {
  action: string;
  text: string;
  params?: ChatbotMessageActionParam[];
}

/**
 * interface ChatbotMessageActionParam
 * -----------------------------------
 * optional parameters that can be sent along with an action
 */
interface ChatbotMessageActionParam {
  [x: string]: any;
}

/**
 * interface ChatbotMessage
 * ------------------------
 * message: message to send to or receive from the chatbot engine
 * type: message type, can be either text, url, image, quickReply, action or error
 * elements: an array of chatbot message buttons or actions; all possible replies when type is quickReply or action
 * image: image source when type is image
 * session_id: id that identifies the chat to easily retrieve the chat history if necessary
 * url: url address when type is url
 * send: whether the message is from the chatbot (false) or the user (true);
 * hide: whether the message should be hidden in the conversation, e.g. when a button was clicked
 * avatar: avatar image URL.
 * disable: whether the chatbot message buttons(s) should be disabled
 */
export interface ChatbotMessage {
  message: string;
  type: string;
  elements?: (ChatbotMessageElement|ChatbotMessageAction)[];
  image?: string;
  session_id?: string;
  url?: string;
  send?: boolean;
  hide?: boolean;
  avatar?: string;
  disable?: boolean;
}

/**
 * interface ChatbotMessageAriaLabels
 * ----------------------------------
 * chatbot: title of the chatbot region. Defaults to 'Chatbot'.
 * close: button label to minimise the chatbot window. Defaults to 'Chatbot minimaliseren'.
 * avatar: alt text for the avatar. Defaults to 'Chatbot.'.
 * message: ARIA label for the input field. Defaults to 'Te verzenden bericht'.
 * send: ARIA label for the send button. Defaults to 'Bericht verzenden'.
 * toggle: Button label for the pinned chatbot. Defaults to 'Een vraag stellen'.
 */
export interface ChatbotMessageAriaLabels {
  chatbot?: string;
  close?: string;
  avatar?: string;
  user?: string;
  message?: string;
  send?: string;
  toggle?: string;
}

/**
 * type ChatbotConversation
 * ------------------------
 * An array of chatbot messages
 */
export type ChatbotConversation = ChatbotMessage[];
