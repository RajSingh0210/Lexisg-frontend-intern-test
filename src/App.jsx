import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setResponse({
        answer:
          'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased\'s annual income should be added as future prospects.',
        citations: [
          {
            text:
              'as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.',
            source: 'Dani Devi v. Pritam Singh',
            link:
              'https://lexisingapore-my.sharepoint.com/personal/harshit_lexi_sg/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fharshit%5Flexi%5Fsg%2FDocuments%2Fcases%2FDani%20Vs%20Pritam%20%28Future%2010%20at%20age%2054%2D55%29%2Epdf&parent=%2Fpersonal%2Fharshit%5Flexi%5Fsg%2FDocuments%2Fcases&ga=1',
            paragraph: 7,
            highlightText:
              '10% of annual income should have been awarded on account of future prospects',
          },
        ],
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg bg-white" alt="Logo" />
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Lexi Legal Assistant</h1>
          <p className="mt-2 text-lg text-gray-300 text-center">Your AI-powered legal research companion. Ask questions and get answers with citations from real judgments.</p>
        </div>

        {/* Input Panel */}
        <div className="bg-gray-800/80 rounded-2xl shadow-xl p-8 mb-10 border border-gray-700">
          <form onSubmit={handleSubmit}>
            <label htmlFor="query" className="block text-lg font-semibold text-blue-300 mb-3">
              <span className="inline-flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-8-4h8" />
                </svg>
                Ask a legal question
              </span>
            </label>
            <div className="relative">
              <textarea
                id="query"
                rows="4"
                className="w-full px-5 py-4 border border-gray-700 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-lg bg-gray-900/80 placeholder-gray-400 text-gray-100"
                placeholder="e.g. Can future prospects be added for self-employed persons above 50 years?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={isLoading}
              />
              <span className="absolute right-4 bottom-4 text-blue-700 pointer-events-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="mt-7 w-full py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 text-white text-xl font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-8-4h8" />
                  </svg>
                  Submit
                </>
              )}
            </button>
          </form>
        </div>

        {/* Answer Panel */}
        {response && (
          <div className="bg-gray-900/90 rounded-2xl shadow-xl p-8 mb-10 border-l-8 border-blue-500 animate-fade-in">
            <h2 className="text-3xl font-extrabold text-blue-300 mb-6 flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
              </svg>
              Answer
            </h2>
            <p className="text-gray-100 text-xl mb-8 leading-relaxed font-medium drop-shadow-sm">{response.answer}</p>

            <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01.88 7.903A4.5 4.5 0 1112 6.5" />
              </svg>
              Citations
            </h3>
            <div className="space-y-6">
              {response.citations.map((citation, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-400 bg-blue-900/30 pl-6 pr-4 py-5 rounded-xl shadow flex flex-col gap-2 animate-fade-in"
                >
                  <p className="text-blue-100 italic text-base mb-1">"{citation.text}"</p>
                  <div className="flex flex-wrap items-center text-sm text-blue-200 gap-2">
                    <span className="font-medium bg-blue-800 px-2 py-0.5 rounded">Source:</span>
                    <a
                      className="text-blue-300 underline hover:text-white transition font-semibold"
                      href={citation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Judgment PDF
                    </a>
                    <span className="ml-2 text-blue-400">
                      (Scroll to Paragraph {citation.paragraph} and look for highlighted text)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none;} }
        .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  );
}

export default App;