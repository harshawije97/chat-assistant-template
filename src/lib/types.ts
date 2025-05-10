export type MessageRole = "user" | "assistant";
export type MessageStatus = "loading" | "success" | "error";

export type Message = {
  id: string;
  message: string;
  role: MessageRole;
  status: MessageStatus;
  created_on: Date;
  updated_on: Date;
};