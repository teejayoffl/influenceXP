"use client";

import React, { useState, useEffect } from 'react';

interface NoSSRProps {
  children: React.ReactNode;
}

export default function NoSSR({ children }: NoSSRProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
} 