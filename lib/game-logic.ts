export const BINGO_CONCEPTS = [
    "Rainbow", "Electricity", "Jack Sparrow", "Penguin", "King Kong",
    "Metal", "Human", "Coffin", "Plant", "Energy",
    "Steam Engine", "Yin Yang", "Phoenix", "Mountain", "Titanic",
    "Dragon", "Computer", "Game of Thrones", "Time Travel", "Music",
    "Pizza", "Robot", "Universe", "Crypto Love", "Amazon",
    "Artificial Intelligence", "Space Station"
];

export function generateBingoCard() {
    // Shuffle the concepts
    const shuffled = [...BINGO_CONCEPTS].sort(() => 0.5 - Math.random());

    // Take first 9 for 3x3 grid
    const selected = shuffled.slice(0, 9);

    return selected.map((label, index) => ({
        id: `cell-${index}-${Date.now()}`,
        label,
        completed: false
    }));
}
