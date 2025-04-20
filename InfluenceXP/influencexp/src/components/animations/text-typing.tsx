"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TextTypingProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  cursorClassName?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  delay?: number;
}

export function TextTyping({
  text,
  className,
  typingSpeed = 50,
  cursorClassName,
  showCursor = true,
  onComplete,
  delay = 0
}: TextTypingProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
    
    function startAnimation() {
      let index = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, index + 1));
        index++;
        
        if (index === text.length) {
          clearInterval(intervalId);
          setIsComplete(true);
          onComplete?.();
        }
      }, typingSpeed);
      
      return () => clearInterval(intervalId);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, typingSpeed, onComplete, delay]);

  return (
    <span className={cn(className)}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className={cn('animate-blink', cursorClassName)}>|</span>
      )}
    </span>
  );
} 