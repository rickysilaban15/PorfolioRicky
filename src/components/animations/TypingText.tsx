"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  /**
   * Text to animate - can be a string or array of strings for multiple lines
   */
  text: string | string[];
  
  /**
   * Typing speed in milliseconds per character
   * @default 50
   */
  speed?: number;
  
  /**
   * Delay before starting animation in milliseconds
   * @default 0
   */
  delay?: number;
  
  /**
   * Whether to show blinking cursor
   * @default true
   */
  showCursor?: boolean;
  
  /**
   * Custom cursor character
   * @default "|"
   */
  cursor?: string;
  
  /**
   * Delay between lines in milliseconds (for multiple lines)
   * @default 800
   */
  lineDelay?: number;
  
  /**
   * Custom className for styling
   */
  className?: string;
  
  /**
   * Whether to repeat the animation
   * @default false
   */
  repeat?: boolean;
  
  /**
   * Delay before repeating in milliseconds
   * @default 2000
   */
  repeatDelay?: number;
  
  /**
   * Callback when animation completes
   */
  onComplete?: () => void;
  
  /**
   * Callback when line completes (for multiple lines)
   */
  onLineComplete?: (lineIndex: number) => void;
}

interface TypewriterState {
  currentLineIndex: number;
  currentCharIndex: number;
  isComplete: boolean;
  showCursor: boolean;
}

export const Typewriter = ({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  cursor = "|",
  lineDelay = 800,
  className,
  repeat = false,
  repeatDelay = 2000,
  onComplete,
  onLineComplete,
}: TypewriterProps) => {
  const lines = Array.isArray(text) ? text : [text];
  const [state, setState] = useState<TypewriterState>({
    currentLineIndex: 0,
    currentCharIndex: 0,
    isComplete: false,
    showCursor: true,
  });

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      setState({
        currentLineIndex: 0,
        currentCharIndex: 0,
        isComplete: false,
        showCursor: true,
      });
      setDisplayedLines([]);
    };

    const typeNextCharacter = () => {
      setState((prevState) => {
        const { currentLineIndex, currentCharIndex } = prevState;
        const currentLine = lines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          // Continue typing current line
          const newDisplayedLines = [...displayedLines];
          newDisplayedLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          setDisplayedLines(newDisplayedLines);
          
          timeoutId = setTimeout(typeNextCharacter, speed);
          
          return {
            ...prevState,
            currentCharIndex: currentCharIndex + 1,
          };
        } else {
          // Current line is complete
          onLineComplete?.(currentLineIndex);
          
          if (currentLineIndex < lines.length - 1) {
            // Move to next line
            timeoutId = setTimeout(typeNextCharacter, lineDelay);
            return {
              ...prevState,
              currentLineIndex: currentLineIndex + 1,
              currentCharIndex: 0,
            };
          } else {
            // All lines complete
            const isComplete = true;
            onComplete?.();
            
            if (repeat) {
              timeoutId = setTimeout(startTyping, repeatDelay);
            }
            
            return {
              ...prevState,
              isComplete,
            };
          }
        }
      });
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay, lineDelay, repeat, repeatDelay, onComplete, onLineComplete, lines, displayedLines]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        showCursor: !prevState.showCursor,
      }));
    }, 530);

    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <div className={cn("font-primary", className)}>
      <AnimatePresence>
        {displayedLines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="relative"
          >
            <span className="text-white">
              {line}
              {lineIndex === state.currentLineIndex && 
               showCursor && 
               state.showCursor && (
                <motion.span
                  className="inline-block text-white ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  {cursor}
                </motion.span>
              )}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Show cursor on first line if no text yet */}
      {displayedLines.length === 0 && 
       showCursor && 
       state.showCursor && (
        <motion.span
          className="inline-block text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {cursor}
        </motion.span>
      )}
    </div>
  );
};