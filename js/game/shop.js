import { gameState } from '../game/state.js';

export const calculateCost = (baseCost, level) => {
    return Math.floor(baseCost * Math.pow(1.2, level));
}

export function tryBuyClickUpgrade() {
    const cost = calculateCost(gameState.clickUpgradeCost, gameState.clickUpgradeLevel);
    return gameState.score >= cost;
}

export function buyClickUpgrade() {
    const cost = calculateCost(gameState.clickUpgradeCost, gameState.clickUpgradeLevel);

    gameState.score -= cost;
    gameState.clickUpgradeLevel++;
    gameState.clickPower += 1;
}
