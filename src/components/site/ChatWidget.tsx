import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "🚀 I need a full-stack SaaS MVP built",
  "🛍️ Luxury E-Commerce Storefront",
  "⚡ What is your stack & availability?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm Anas's AI Assistant. Are you planning a new web app, SaaS MVP, or commercial e-commerce store? Feel free to share what you're building, your name, and where you're reaching out from!",
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
            "Thank you! Your inquiry has been noted. You can also reach Anas directly at amohdanas125@gmail.com or via WhatsApp at +91-8318579208.",
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
      {/* 3D Neomorphic Floating Trigger Button */}
      {!isOpen && (
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full neu-pressed-sm px-3.5 py-1.5 text-xs font-mono text-muted-foreground animate-fade-in">
            <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-foreground font-semibold">Anas AI</span> online
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Assistant Chat"
            className="group relative flex items-center gap-2.5 rounded-full neu-button px-5 py-3 text-sm font-semibold text-foreground cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <MessageSquare className="size-4 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-mono text-xs tracking-wider uppercase">Chat with AI</span>
          </button>
        </div>
      )}

      {/* 3D Neomorphic Interactive Chat Window */}
      {isOpen && (
        <div className="neu-flat-lg fixed bottom-4 right-4 z-50 flex h-[550px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl sm:bottom-6 sm:right-6 sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/40 neu-convex-sm px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-2xl neu-convex-sm text-primary">
                <Bot className="size-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">Anas's AI Assistant</h3>
                  <Sparkles className="size-3 text-primary animate-pulse" />
                </div>
                <p className="flex items-center gap-1.5 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Online · Instant Response · IST UTC+5:30
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="size-8 rounded-full neu-button flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
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
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-xs bg-primary text-primary-foreground font-semibold neu-flat-sm shadow-md"
                      : "rounded-bl-xs neu-convex-sm text-foreground"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-xs neu-convex-sm px-4 py-3 text-muted-foreground">
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
            <div className="flex flex-wrap gap-1.5 border-t border-border/40 p-2.5">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full neu-button px-3 py-1 font-mono text-[0.65rem] text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border/40 p-3 neu-convex-sm"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me what you're building, your name, or country..."
              className="flex-1 rounded-full neu-pressed px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground neu-button disabled:opacity-40 cursor-pointer"
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
