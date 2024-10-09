let easyLevelData = [
    {
        question: "John received a job offer with a starting salary of $60,000 per year. His employer offers a 401(k) retirement plan with a 3% employer match. If John contributes 6% of his salary to his 401(k), how much will his employer contribute annually?",
        option1: "$1,800",
        option2: "$3,600",
        option3: "$1,200",
        option4: "$2,400",
        ans: 4,
    },
    {
        question: "Emily is considering trading stocks actively in the market. Which of the following factors should she consider before engaging in active trading?",
        option1: "Historical stock prices",
        option2: "Market trends and news",
        option3: "Company fundamentals",
        option4: "All of the above",
        ans: 4,
    },
    {
        question: "Tom is comparing two mutual funds for his retirement savings. Fund A has an expense ratio of 0.5%, while Fund B has an expense ratio of 1.0%. All other factors being equal, which fund is likely to result in higher net returns for Tom over time?",
        option1: "Fund A",
        option2: "Fund B",
        option3: "Both funds will result in the same net returns",
        option4: "It depends on the performance of the funds",
        ans: 1,
    },
    {
        question: "Sarah is comparing two credit card offers. Card A has an annual fee of $50 and an interest rate of 15%, while Card B has no annual fee and an interest rate of 18%. Sarah typically carries a balance on her credit card. Which card would likely be the better choice for her?",
        option1: "Card A",
        option2: "Card B",
        option3: "Both cards are equally good",
        option4: "It depends on Sarah's spending habits",
        ans: 2,
    },
    {
        question: "Julia is considering trading cryptocurrency. She's aware of the high volatility in the cryptocurrency market and wants to minimize her risk exposure while still participating in potential price movements. What trading strategy could Emily use to achieve this goal?",
        option1: "Scalping",
        option2: "Arbitrage",
        option3: "Hedging",
        option4: "Momentum trading",
        ans: 3,
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
easyLevelData = shuffleArray(easyLevelData)

export { easyLevelData };