// Fix: Added React import to resolve missing namespace 'React' for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

export interface PackageProps {
  name: string;
  priceINR: string;
  priceUSD: string;
  isPopular?: boolean;
}

export interface ALaCarteItem {
  item: string;
  priceINR: number;
}