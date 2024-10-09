let hardLevelData = [
    {
        question: "What is the capital of Burkina Faso?",
        option1: "Ouagadougou",
        option2: "Bamako",
        option3: "Accra",
        option4: "Niamey",
        ans: 1,
    },
    {
        question: "Which chemical element has the symbol 'Au'?",
        option1: "Silver",
        option2: "Gold",
        option3: "Copper",
        option4: "Iron",
        ans: 2,
    },
    {
        question: "What is the powerhouse of the cell?",
        option1: "Nucleus",
        option2: "Ribosome",
        option3: "Mitochondria",
        option4: "Endoplasmic Reticulum",
        ans: 3,
    },
    {
        question: "In what year did the Titanic sink?",
        option1: "1910",
        option2: "1912",
        option3: "1914",
        option4: "1916",
        ans: 2,
    },
    {
        question: "What is the hardest natural substance on Earth?",
        option1: "Gold",
        option2: "Iron",
        option3: "Diamond",
        option4: "Platinum",
        ans: 3,
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
hardLevelData = shuffleArray(hardLevelData)


export { hardLevelData }
