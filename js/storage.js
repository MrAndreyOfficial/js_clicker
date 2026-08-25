const scoreKey = 'score';
const clickPowerKey = 'clickPower';
const clickUpgradeCostKey = 'clickUpgradeCost';
const clickUpgradeLevelKey = 'clickUpgradeLevel';

const passiveIncomeKey = 'passiveIncome';
const passiveIncomeCostKey = 'passiveIncomeCost';
const passiveIncomeLevelKey = 'passiveIncomeLevel';

export function saveGame(state) {
    localStorage.setItem(scoreKey, state.score);
    localStorage.setItem(clickPowerKey, state.clickPower);

    localStorage.setItem(clickUpgradeCostKey, state.clickUpgradeCost);
    localStorage.setItem(clickUpgradeLevelKey, state.clickUpgradeLevel);

    localStorage.setItem(passiveIncomeKey, state.passiveIncome);
    localStorage.setItem(passiveIncomeCostKey, state.passiveIncomeCost);
    localStorage.setItem(passiveIncomeLevelKey, state.passiveIncomeLevel);
}

export function loadGame(state) {
    state.score = parseInt(localStorage.getItem(scoreKey)) || 0;
    state.clickPower = parseInt(localStorage.getItem(clickPowerKey))  || 1;

    state.clickUpgradeCost = parseInt(localStorage.getItem(clickUpgradeCostKey)) || 15;
    state.clickUpgradeLevel = parseInt(localStorage.getItem(clickUpgradeLevelKey)) || 0;

    state.passiveIncome = parseInt(localStorage.getItem(passiveIncomeKey)) || 0;
    state.passiveIncomeCostCost = parseInt(localStorage.getItem(passiveIncomeCostKey)) || 150;
    state.passiveIncomeLevel = parseInt(localStorage.getItem(passiveIncomeLevelKey)) || 0;
}
