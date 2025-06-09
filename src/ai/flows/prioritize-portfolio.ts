'use server';

/**
 * @fileOverview AI-powered portfolio prioritization flow.
 *
 * - prioritizePortfolio - A function that suggests the most impactful projects for the portfolio.
 * - PrioritizePortfolioInput - The input type for the prioritizePortfolio function.
 * - PrioritizePortfolioOutput - The return type for the prioritizePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizePortfolioInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('An array of project descriptions to analyze.'),
});
export type PrioritizePortfolioInput = z.infer<typeof PrioritizePortfolioInputSchema>;

const PrioritizePortfolioOutputSchema = z.object({
  prioritizedProjects: z
    .array(z.string())
    .describe('An array of project descriptions, prioritized by impact and relevance.'),
});
export type PrioritizePortfolioOutput = z.infer<typeof PrioritizePortfolioOutputSchema>;

export async function prioritizePortfolio(input: PrioritizePortfolioInput): Promise<PrioritizePortfolioOutput> {
  return prioritizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizePortfolioPrompt',
  input: {schema: PrioritizePortfolioInputSchema},
  output: {schema: PrioritizePortfolioOutputSchema},
  prompt: `You are an expert portfolio strategist. Analyze the following project descriptions and prioritize them based on their potential impact and relevance to prospective clients. Highlight the most impressive and relevant work samples to make a strong first impression.

Project Descriptions:
{{#each projectDescriptions}}- {{{this}}}\n{{/each}}

Prioritized Projects (in order of impact and relevance):`,
});

const prioritizePortfolioFlow = ai.defineFlow(
  {
    name: 'prioritizePortfolioFlow',
    inputSchema: PrioritizePortfolioInputSchema,
    outputSchema: PrioritizePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
