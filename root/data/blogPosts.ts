export interface WritingSeries {
  id: string;
  title: string;
  description: string;
  url: string;
  platform: string;
  tags: string[];
  highlights: string[];
}

export const writingSeries: WritingSeries[] = [
  {
    id: 'transformer-intuition-explained',
    title: 'Transformer Intuition Explained',
    description:
      'A step-by-step, intuition-first guide to how transformers actually work — the architecture behind models like GPT and BERT, built up one idea at a time.',
    url: 'https://blog.vikassrinivasa.dev/series/transformer-intuition-explained',
    platform: 'blog.vikassrinivasa.dev',
    tags: ['Transformers', 'Attention', 'NLP'],
    highlights: [
      'Tokenization, embeddings and positional encoding',
      'Self-attention and the roles of Query, Key and Value',
      'Multi-head attention, explained in depth',
    ],
  },
  {
    id: 'intuitive-fine-tuning',
    title: 'The Intuitive Fine-Tuning Series',
    description:
      'Learn LLM fine-tuning with code and examples — from the fundamentals through parameter-efficient methods like LoRA, QLoRA and adapters.',
    url: 'https://intuitive-fine-tuning.hashnode.dev/series/intuitive-fine-tuning',
    platform: 'intuitive-fine-tuning.hashnode.dev',
    tags: ['Fine-tuning', 'PEFT', 'LoRA'],
    highlights: [
      'What fine-tuning is and when to use it',
      'Parameter-Efficient Fine-Tuning: LoRA, QLoRA and prefix-tuning',
      'Adapters: bottleneck structure, placement and best practices',
    ],
  },
];
