import React from 'react';

export type Severity = 'critical' | 'high' | 'medium' | 'low';

export interface Finding {
  id: number;
  severity: Severity;
  section: string;
  title: string;
  heuristic: string;
  effort: 'Low' | 'Medium' | 'High';
  impact?: string;
  fix: string;
}

export interface WireframeMarker {
  id: number;
  severity: Severity;
}

export interface WireframeSection {
  name: string;
  type: 'nav' | 'hero' | 'products' | 'vision' | 'numbers' | 'factory' | 'sustainability' | 'full';
  content?: string;
  markers: WireframeMarker[];
}

export interface ReferenceItem {
  title: string;
  description: string;
  fixes: number[];
  icon: React.ReactNode;
  bgGradient: string;
  iconColor: string;
}

export interface QuickWin {
  id: string;
  title: string;
  description: string;
}