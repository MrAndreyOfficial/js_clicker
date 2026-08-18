export function upgradeUI(state, costFormula) {
    document.getElementById('score-info').textContent = `Score - ${state.score}$`;
    document.getElementById('click-power-info').textContent = `Click power - ${state.clickPower}`;

    document.getElementById('upgrade-click-power-btn').textContent = `Upgrade score per click - ${costFormula(state.clickUpgradeCost, state.clickUpgradeLevel)}$`;
}
