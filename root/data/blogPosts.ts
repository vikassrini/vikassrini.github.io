export interface BlogSeries {
    id: string;
    title: string;
    description: string;
    image: string;
    posts: BlogPost[];
  }
  
  export interface BlogPost {
    id: number;
    seriesId: string;
    partNumber: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    hashnodeUrl: string;
  }
  
  export const blogSeries: BlogSeries[] = [
    {
      id: 'transformers',
      title: 'Transformers: An Intuitive Guide',
      description: 'Ever wondered how transformers power AI models like GPT & BERT? \
                    This blog series breaks down these concepts step by step.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hdHJpeHxlbnwwfHwwfHx8MA%3D%3D',
      posts: [
        {
          id: 1,
          seriesId: 'transformers',
          partNumber: 1,
          title: 'How Transformers Work: Tokenization Embeddings and Positional Encoding Explained (Part 1)',
          excerpt: 'Learn How Transformers Operate Intuitively : The Basics of Tokenization, Embeddings and Positional Encoding',
          date: '2025-01-28',
          readTime: '9 min read',
          image: 'https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg',
          hashnodeUrl: 'https://transformers-goto-guide.hashnode.dev/how-transformers-work-tokenization-embeddings-and-positional-encoding-explained-part-1'
        },
        {
          id: 2,
          seriesId: 'transformers',
          partNumber: 2,
          title: 'Transformer Encoder Explained : A Deep Dive into Attention Scores (Part 2)',
          excerpt: 'Deep dive into the self-attention mechanism that powers transformer models.',
          date: '2025-02-06',
          readTime: '12 min read',
          image: 'https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg',
          hashnodeUrl: 'https://transformers-goto-guide.hashnode.dev/transformer-encoder-explained-a-deep-dive-into-attention-scores-part-2'
        },
        {
            id: 3,
            seriesId: 'transformers',
            partNumber: 2.1,
            title: 'Understanding the Role of Query, Key, and Value in Transformer Models',
            excerpt: 'Explore the significance of Query, Key, and Value matrices in transformers, and understand their roles through intuitive explanations and analogies',
            date: '2025-02-06',
            readTime: '7 min read',
            image: 'https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg',
            hashnodeUrl: 'https://transformers-goto-guide.hashnode.dev/understanding-the-role-of-query-key-and-value-in-transformer-models'
          }
      ]
    },
    {
      id: 'trading',
      title: 'The AI edge In Finance',
      description: '"The AI Edge in Finance" explores my experiments with AI in finance—from trading strategies to AI-driven financial chatbots.',
      image: 'https://media.istockphoto.com/id/1425905549/photo/digitally-generated-currency-and-exchange-stock-chart-for-finance-and-economy-based-computer.jpg?s=612x612&w=0&k=20&c=E9YrK_FlcJp2UUqSJPRJUnrYv2CM_fW_8nqNW_6eEV8=',
      posts: [
        {
          id: 1,
          seriesId: 'trading',
          partNumber: 1,
          title: 'Leveraging AI/ML for Finance and Trading: A Journey from ML Models to a 23% Gain in simulated environment with an AI-Powered Strategy.',
          excerpt: 'Using Sentiment Analysis for Smarter AI-Based Trading Strategies',
          date: '2025-01-31',
          readTime: '5 min read',
          image: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/ZzOa5G8hSPI/upload/61495d9bc925efe9286e7b8435315b2e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          hashnodeUrl: 'https://my-experiments-with-ai-in-finance.hashnode.dev/leveraging-aiml-for-finance-and-trading-a-journey-from-ml-models-to-a-23-gain-in-simulated-environement-with-an-ai-powered-strategy'
        },
        {
            id: 2,
            seriesId: 'trading',
            partNumber: 2,
            title: 'Why My AI Trading Strategy, Which Returned 23% in 2 Months in a Simulated Environment, is Promising',
            excerpt: 'Evaluating Trading Methods for Fairness and Transparency',
            date: '2025-02-02',
            readTime: '6 min read',
            image: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/fiXLQXAhCfk/upload/a0dcf084420028f7a585024fd1a09a32.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            hashnodeUrl: 'https://my-experiments-with-ai-in-finance.hashnode.dev/why-my-ai-trading-strategy-which-returned-23-in-2-months-in-a-simulated-environment-is-promising'
        }
      ]
    }
  ];