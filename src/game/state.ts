export interface GameState {
    score : number,
    clickPower: number,
    clickUpgradeCost: number,
    clickUpgradeLevel: number,
    passiveIncome: number,
    passiveIncomeCost: number,
    passiveIncomeLevel: number
}

export const gameState : GameState = {
    score: 0,
    clickPower: 1,
    clickUpgradeCost: 15,
    clickUpgradeLevel: 0,
    passiveIncome: 0,
    passiveIncomeCost: 150,
    passiveIncomeLevel: 0
}
