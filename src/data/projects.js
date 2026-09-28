/**
 * Project data — single source of truth for the Projects section.
 *
 * To add a new project, append an object to this array. It will
 * automatically appear on the site with auto-generated numbering.
 * No changes to Projects.jsx or ProjectCard.jsx are required.
 *
 * Optional fields (omit or set to null when not available):
 *   result, image, github, demo, workflow, analyzes, dataset, focus
 * ProjectCard only renders these elements when a truthy value exists.
 */
const projects = [
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction System',
    summary:
      'A complete machine-learning application for predicting customer churn, from preprocessing to an interactive interface and prediction API.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Joblib', 'Streamlit', 'FastAPI', 'Pydantic', 'Pytest'],
    features: [
      'Data preprocessing and analysis',
      'Machine-learning model training and evaluation',
      'Logistic Regression model',
      'Model saving using Joblib',
      'Interactive Streamlit interface',
      'FastAPI prediction API',
      'API documentation through Swagger',
      'Automated testing with Pytest',
    ],
    result: 'Best model: 80.55% accuracy and 0.8419 ROC-AUC',
    image: null,
    github: null,
    demo: null,
  },
  {
    id: 'ai-business-analyst-agent',
    title: 'AI-Powered Business Analyst Agent',
    summary:
      'An AI/data-analysis application that analyzes business data and answers questions using a supermart.csv dataset.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Gradio'],
    features: [
      'Business data analysis',
      'Sales and product analysis',
      'Top-product analysis',
      'Monthly sales analysis',
      'Period comparison',
      'Automated charts and visualizations',
      'Conversational interaction with the analysis system',
    ],
    dataset: 'supermart.csv',
    image: null,
    github: null,
    demo: null,
  },
  {
    id: 'researchflow-ai',
    title: 'ResearchFlow AI',
    summary:
      'A multi-agent AI research assistant designed to help users go from a research topic to a structured report.',
    technologies: ['Python', 'Streamlit', 'LLMs', 'AI Agents'],
    features: [
      'Multiple AI agents for research organization',
      'Analysis and critical review agents',
      'Structured report generation',
    ],
    workflow: ['Topic', 'Research Plan', 'Sources', 'Analysis', 'Critique', 'Final Report'],
    image: null,
    github: null,
    demo: null,
  },
  {
    id: 'website-strength-weakness-analyzer',
    title: 'Website Strength & Weakness Analyzer',
    summary:
      'An AI-powered tool that analyzes websites and identifies their strengths and weaknesses across multiple URLs.',
    technologies: ['Python', 'Ollama', 'Llama 3.2', 'Streamlit', 'Gradio'],
    features: [
      'Analysis of multiple URLs',
      'Structured results in HTML/JSON format',
    ],
    analyzes: ['UX', 'Content', 'Navigation', 'SEO', 'Accessibility', 'Trust'],
    image: null,
    github: null,
    demo: null,
  },
]

export default projects
