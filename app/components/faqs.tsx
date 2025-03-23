"use client";
import React from "react";

interface FAQItemProps {
  question: string;
  isFirst: boolean;
  isLast: boolean;
  lineWidth: string;
  index: number;
}

const FAQItem = ({
  question,
  isFirst,
  isLast,
  lineWidth,
  index,
}: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Add extra spacing for the third item (index 2)
  const topMargin = index === 2 ? "mt-8" : "mt-2";

  return (
    <div className={`py-2 w-full ${isLast ? "pb-4" : ""}`}>
      <div
        className={`${!isFirst ? "border-t" : ""} ${
          isLast ? "border-b" : ""
        } border-white/20`}
        style={{ width: lineWidth, maxWidth: "100%" }}
      >
        <button
          className={`flex items-center w-full text-white text-left ${topMargin}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl mr-4 w-6 flex-shrink-0 text-center">
            {isOpen ? "−" : "+"}
          </span>
          <span className="break-words">{question}</span>
        </button>
        {isOpen && (
          <div className="mt-3 text-white/80 pl-10">
            {/* Empty answer container that will be filled later */}
          </div>
        )}
      </div>
    </div>
  );
};

const FAQs = () => {
  const faqItems = [
    "How does automated savings work on PiggyStack?",
    "What types of assets can I save on PiggyStack?",
    "Can I withdraw my savings anytime?",
  ];

  // Calculate the width based on the first question
  const firstQuestion = faqItems[0];
  const questionParts = firstQuestion.split("PiggyStack");
  const firstLineWidth = `${
    (questionParts[0].length + "PiggyStack".length) * 0.6
  }em`;

  return (
    <div className="bg-[#DD3C00] p-4 md:p-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
          {/* Left column with title */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right column with FAQ items */}
          <div className="w-full md:w-1/2 flex flex-col items-end space-y-4 overflow-hidden">
            {faqItems.map((question, index) => (
              <FAQItem
                key={index}
                question={question}
                isFirst={index === 0}
                isLast={index === faqItems.length - 1}
                lineWidth={firstLineWidth}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
