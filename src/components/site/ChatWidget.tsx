import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "I need a full-stack SaaS MVP built",
  "What is your tech stack & availability?",
  "Can you review my project idea?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm Anas's AI Assistant. Are you looking to build a high-performance web app, SaaS MVP, or commercial e-commerce platform? Feel free to ask about tech stack, project scope, or availability!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const apiBaseUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) || "http://localhost:3000";

  useEffect(() => {
    try {
      const existing = localStorage.getItem("anas_visitor_session");
      if (existing) {
        setSessionId(existing);
      } else {
        const generated = `vis-${Date.now()}-${Math.random().toString(36).substring(7)}`;
        localStorage.setItem("anas_visitor_session", generated);
        setSessionId(generated);
      }
    } catch {
      setSessionId(`vis-${Date.now()}`);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userText = text.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userText }]);
    setLoading(true);

    try {
      const res = await fetch(`${apiBaseUrl}/api/inbound/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: userText }),
      });

      if (!res.ok) throw new Error("Network response not ok");

      const data = await res.json();
      if (data && data.botResponse) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.botResponse }]);
      } else {
        throw new Error("No response");
      }
    } catch (err) {
      console.warn("Chat backend notice:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thank you! Your message has been noted. You can also reach Anas directly at amohdanas125@gmail.com or via WhatsApp at +91-8318579208.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant Chat"
          className="group relative flex items-center gap-3 rounded-full border border-primary/40 bg-background/80 px-5 py-3 text-sm font-medium text-foreground shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-105 hover:shadow-[0_0_25px_var(--neon)]"
        >
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          <MessageSquare className="size-4 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-mono text-xs tracking-wider uppercase">Chat with AI</span>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="glass fixed bottom-4 right-4 z-50 flex h-[540px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border/80 shadow-2xl sm:bottom-6 sm:right-6 sm:w-96">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 bg-secondary/30 px-5 py-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary">
                <Bot className="size-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">Anas's AI Assistant</h3>
                  <Sparkles className="size-3 text-primary animate-pulse" />
                </div>
                <p className="flex items-center gap-1.5 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Online · Replies &lt; 2 hrs
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 space-y-3.5 overflow-y-auto p-4 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "rounded-br-xs bg-primary text-primary-foreground font-medium"
                      : "rounded-bl-xs border border-border/80 bg-background/60 text-foreground backdrop-blur-sm"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-xs border border-border/80 bg-background/60 px-4 py-3 text-muted-foreground">
                  <span className="size-1.5 animate-bounce rounded-full bg-primary" />
                  <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:0.2s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 border-t border-border/40 bg-secondary/10 px-3 py-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border/60 bg-background/90 p-3 backdrop-blur-md"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about project scope, tech stack, or timeline..."
              className="flex-1 rounded-full border border-border bg-secondary/30 px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:opacity-40"
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
