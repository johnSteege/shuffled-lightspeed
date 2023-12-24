export const gameState = {};

export async function createNewGameInstance() {
    createRegions();
}

function createRegions() {
    gameState.regions = [];
    for(let i = 0; i < 8; i++) {
        let r = {};
        gameState.regions.push(r);
    }
}

