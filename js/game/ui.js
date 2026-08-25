export function upgradeUI(state, costFormula) {
    document.getElementById('score-info').textContent = `Score - ${state.score}$`;
    document.getElementById('click-power-info').textContent = `Click power - ${state.clickPower}`;
    document.getElementById('passive-income-info').textContent = `Passive income - ${state.passiveIncome}`;

    document.getElementById('upgrade-click-power-btn').textContent = `Upgrade score per click - ${costFormula(state.clickUpgradeCost, state.clickUpgradeLevel)}$`;
    document.getElementById('upgrade-passive-income-btn').textContent = `Upgrade passive income - ${costFormula(state.passiveIncomeCost, state.passiveIncomeLevel)}$`;
}
