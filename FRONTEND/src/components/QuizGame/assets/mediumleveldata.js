let mediumLevelData = [
    {
        question: "A company has total assets worth $500,000 and total liabilities worth $200,000. What is the company's equity?",
        option1: "$700,000",
        option2: "$300,000",
        option3: "$500,000",
        option4: "$200,000",
        ans: 2,
    },
    {
        question: "If a stock has a beta coefficient of 1.5, what does this imply?",
        option1: "The stock is less volatile than the market",
        option2: "The stock is more volatile than the market",
        option3: "The stock has the same volatility as the market",
        option4: "The stock is not correlated with the market",
        ans: 2,
    },
    {
        question: "A bond has a face value of $1,000, a coupon rate of 5%, and matures in 10 years. What is the annual interest payment?",
        option1: "$50",
        option2: "$500",
        option3: "$100",
        option4: "$5",
        ans: 1,
    },
    {
        question: "An investor wants to calculate the present value of a $1,000 payment to be received in 5 years. The discount rate is 10%. Which formula should be used?",
        option1: "Future Value = Present Value / (1 + r)^n",
        option2: "Present Value = Future Value / (1 + r)^n",
        option3: "Present Value = Future Value * (1 + r)^n",
        option4: "Future Value = Present Value * (1 + r)^n",
        ans: 2,
    },
    {
        question: "Which of the following is a characteristic of a well-diversified portfolio?",
        option1: "It reduces unsystematic risk",
        option2: "It increases systematic risk",
        option3: "It eliminates market risk",
        option4: "It focuses on a single asset class",
        ans: 1,
    },
];

function shuffleArray(array) {
    for (let i = 3 - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

mediumLevelData = shuffleArray(mediumLevelData)

export { mediumLevelData };