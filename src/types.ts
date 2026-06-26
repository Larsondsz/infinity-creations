/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  client: string;
  servicesProvided: string[];
  challenge: string;
  solution: string;
  overview?: string;
  clientRequirement?: string;
  designProcess?: string[];
  softwareUsed?: string[];
  projectOutcome?: string;
  galleryImages?: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}
