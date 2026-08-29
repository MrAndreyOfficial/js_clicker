const scoreKey = 'score';
const clickPowerKey = 'clickPower';
const clickUpgradeCostKey = 'clickUpgradeCost';
const clickUpgradeLevelKey = 'clickUpgradeLevel';
const passiveIncomeKey = 'passiveIncome';
const passiveIncomeCostKey = 'passiveIncomeCost';
const passiveIncomeLevelKey = 'passiveIncomeLevel';
export function saveGame(state) {
    localStorage.setItem(scoreKey, state.score.toString());
    localStorage.setItem(clickPowerKey, state.clickPower.toString());
    localStorage.setItem(clickUpgradeCostKey, state.clickUpgradeCost.toString());
    localStorage.setItem(clickUpgradeLevelKey, state.clickUpgradeLevel.toString());
    localStorage.setItem(passiveIncomeKey, state.passiveIncome.toString());
    localStorage.setItem(passiveIncomeCostKey, state.passiveIncomeCost.toString());
    localStorage.setItem(passiveIncomeLevelKey, state.passiveIncomeLevel.toString());
}
export function loadGame(state) {
    state.score = parseInt(localStorage.getItem(scoreKey.toString())) || 0;
    state.clickPower = parseInt(localStorage.getItem(clickPowerKey.toString())) || 1;
    state.clickUpgradeCost = parseInt(localStorage.getItem(clickUpgradeCostKey.toString())) || 15;
    state.clickUpgradeLevel = parseInt(localStorage.getItem(clickUpgradeLevelKey.toString())) || 0;
    state.passiveIncome = parseInt(localStorage.getItem(passiveIncomeKey.toString())) || 0;
    state.passiveIncomeCost = parseInt(localStorage.getItem(passiveIncomeCostKey.toString())) || 150;
    state.passiveIncomeLevel = parseInt(localStorage.getItem(passiveIncomeLevelKey.toString())) || 0;
}
