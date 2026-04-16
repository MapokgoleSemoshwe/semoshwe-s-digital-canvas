import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBotButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 h-96 bg-card rounded-2xl shadow-lg border flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-primary px-5 py-4 flex items-center justify-between">
            <span className="text-primary-foreground font-semibold">Chat</span>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 flex items-center justify-center">
            <p className="text-muted-foreground text-sm text-center">
              Chat functionality coming soon!
            </p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatBotButton;
