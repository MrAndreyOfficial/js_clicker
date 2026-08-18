const scoreName = 'score';
const clickPowerName = 'click-power';
const clickUpgradeCostName = 'clickUpgradeCost';
const clickUpgradeLevelName = 'clclickUpgradeLevelwer';

export function saveGame(state) {
    localStorage.setItem(scoreName, state.score);
    localStorage.setItem(clickPowerName, state.clickPower);
    localStorage.setItem(clickUpgradeCostName, state.clickUpgradeCost);
    localStorage.setItem(clickUpgradeLevelName, state.clickUpgradeLevel);
}

export function loadGame(state) {
    state.score = parseInt(localStorage.getItem(scoreName)) || 0;
    state.clickPower = parseInt(localStorage.getItem(clickPowerName))  || 1;
    state.clickUpgradeCost = parseInt(localStorage.getItem(clickUpgradeCostName)) || 15;
    state.clickUpgradeLevel = parseInt(localStorage.getItem(clickUpgradeLevelName)) || 0;
}
