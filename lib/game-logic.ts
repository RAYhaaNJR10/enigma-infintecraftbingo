export const BINGO_CONCEPTS = [
    "Rainbow", "Electricity", "Tree", "Ocean", "Volcano",
    "Metal", "Human", "Cloud", "Plant", "Energy",
    "Steam Engine", "Swamp", "Storm", "Mountain", "Ash",
    "Dragon", "Computer", "Democracy", "Time Travel", "Music",
    "Pizza", "Robot", "Universe", "Philosophy", "Internet",
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
