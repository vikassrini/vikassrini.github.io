import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
      <h1 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl text-center mb-8">
          About Me
        </h1>

        {/* Profile Section */}
        <div className="text-center">
          
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="Vikas Srinivasa"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg transition-transform hover:scale-105"
          />

          <p className="text-gray-600 text-lg leading-relaxed">
            Hi! I am an <strong>AI & FinTech enthusiast</strong> and <strong>machine learning engineer</strong> based in Bengaluru, India. 
            My passion lies in developing <strong>AI-driven solutions</strong>, cutting-edge <strong>financial technologies</strong>, and 
            advanced <strong>chatbot systems</strong> that solve real-world problems.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            As a <strong>Founding Partner at Intuitifi</strong>, I lead the development of an 
            <strong> AI-powered financial literacy platform</strong>, leveraging machine learning, sentiment analysis, 
            and stock market insights to help users make informed financial decisions.
          </p>
        </div>

        {/* Skills Section */}
        <section className="mt-12">
          <div className="flex items-center space-x-3 mb-4">
            <Code className="h-6 w-6 text-primary-600" />
            <h2 className="font-display text-2xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Sentiment Analysis', 
              'FastAPI', 'PyTorch', 'LangChain', 'LlamaIndex', 
              'Retrieval Augmented Generation (RAG)', 'Vector Databases (Weaviate)','AI-Driven Trading Strategies'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-primary-50 rounded-lg px-4 py-2 text-center text-primary-700 font-medium shadow-soft hover:bg-primary-100 transition-colors"
                  >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-12">
          <div className="flex items-center space-x-3 mb-4">
            <Briefcase className="h-6 w-6 text-primary-600" />
            <h2 className="font-display text-2xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Founder & Machine Learning Engineer</h3>
              <p className="text-gray-600">Intuitifi • 2024 - Present</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>🚀 Leading AI-driven financial literacy & planning tools development</li>
                <li>🤖 Built RAG-based chatbot using GPT-4 Turbo to help users intuitively understand health insurance</li>
                <li>📊 Built a trading strategy which uses NER and sentiment analysis to integrate new events with technical analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Intern</h3>
              <p className="text-gray-600">Toosi • Sept 2023 - Dec 2023</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>🔎 Developed and optimized data scraping pipelines using Scrapy for structured data extraction</li>
                <li>📖 Explored Retrieval-Augmented Generation (RAG) techniques for improving question-answering systems</li>
                <li>✅ Attempted to fine-tune the LLaMA 2 model for question answering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-12">
          <div className="flex items-center space-x-3 mb-4">
            <Code className="h-6 w-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">FinSight – AI-Powered Finance Assistant</h3>
              <p className="text-gray-600">
                <a 
                  href="https://github.com/vishwasg217/fin-sight" 
                  className="text-primary-600 hover:underline"
                >
                  AI-driven financial insights & stock analysis
                </a>
              </p>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>📊 Designed and developed a GPT-4-powered financial AI assistant, delivering insightful investment analysis</li>
                <li>💡 Led the conceptualization and strategic direction of the project</li>
                <li>📝 Engineered and optimized prompts to enhance AI-driven decision-making</li>
              </ul>

            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Real-Time AI Physician Chatbot</h3>
              <p className="text-gray-600">
                <a 
                  href="https://github.com/vikassrini/PhysicianAI-Chatbot" 
                  className="text-primary-600 hover:underline"
                >
                 AI-driven healthcare chatbot
                </a>
              </p>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>🩺 Developed an AI-powered physician chatbot using FastAPI and GPT-4 for intelligent medical assistance</li>
                <li>📄 Implemented a RAG-based system enabling users to upload and analyze medical reports for enhanced contextual insights</li>
                <li>🤖 Designed and animated an interactive 3D AI avatar using Blender for a more engaging user experience</li>
                <li>🔊 Integrated Google Text-to-Speech, allowing the AI avatar to deliver spoken responses for improved accessibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-12">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="h-6 w-6 text-primary-600" />
            <h2 className="font-display text-2xl font-bold text-gray-900">Education</h2>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Bachelor's in Computer Science</h3>
            <p className="text-gray-600">RNS Institute Of Technology • 2020 - 2024</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
