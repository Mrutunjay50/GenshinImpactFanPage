import { useState, useRef, useEffect } from "react";
import { useCardStyle } from "../../contexts/CardStyleContext";

const CardStyleSelector = () => {
  const { cardStyle, setCardStyle, cardStyles } = useCardStyle();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Calculate position for fixed dropdown
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      if (menuRef.current) {
        menuRef.current.style.top = `${buttonRect.bottom + 8}px`;
        menuRef.current.style.right = `${window.innerWidth - buttonRect.right}px`;
      }
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 backdrop-blur-md border-2 border-white/20 text-white text-sm font-medium hover:border-white/50 transition-all duration-300"
      >
        <span>🎨</span>
        <span>Card Style</span>
        <span className="text-xs opacity-70">
          ({cardStyles.find((s) => s.id === cardStyle)?.name})
        </span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
          <div
            className="flex flex-col rounded-lg overflow-hidden shadow-2xl bg-black/95 backdrop-blur-md border-2 border-white/20 min-w-[200px] z-50"
            onClick={() => setIsOpen(false)}
          >
            {cardStyles.map((style) => (
              <span
                key={style.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCardStyle(style.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 cursor-pointer bg-[#252525] ${
                  cardStyle === style.id
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-xl">{style.icon}</span>
                <span className="flex-1 font-medium">{style.name}</span>
                {cardStyle === style.id && (
                  <span className="text-white">✓</span>
                )}
              </span>
            ))}
            </div>
      )}
    </div>
  );
};

export default CardStyleSelector;

