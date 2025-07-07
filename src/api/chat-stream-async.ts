/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MessageBody } from "@/utils/contracts";

export const chatStreamAsync = async (message: MessageBody, onMessage: (chunk: any) => void): Promise<{ success: boolean; message: string; error?: string }> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL!}/api/v1/chat/stream`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                message: message.message,
                chat_history: message.history.toString(),
                namespace: message.namespace,
                role: message.role,
            }),
        });

        if (!response.body) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const reader = response.body.getReader();

        if (!reader) {
            throw new Error("Readable stream not supported");
        }

        const decoder = new TextDecoder("utf-8");

        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break
            }
            const chunk = decoder.decode(value, { stream: true });

            onMessage({ type: "text", data: chunk });
        }

        return {
            success: true,
            message: "Message sent successfully",
        };

    } catch (error) {
        console.error("createMessagesByAsync error:", error);
        return {
            success: false,
            message: "Something went wrong",
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}