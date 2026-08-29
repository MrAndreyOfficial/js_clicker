import { buyClickUpgrade, tryBuyClickUpgrade, calculateCost, tryBuyPassiveIncome, buyPassiveIncome } from './game/shop.js';
import { gameState } from './game/state.js';
import { upgradeUI } from './game/ui.js';

import { loadGame, saveGame } from './storage.js';

const jsImageElement = document.getElementById('js-img');
const resetBtnElement = document.getElementById('reset-btn');

const clickUpgradeBtnElement = document.getElementById('upgrade-click-power-btn');
const passiveIncomeBtnElement = document.getElementById('upgrade-passive-income-btn');

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadGame(gameState);
    upgradeUI(gameState, calculateCost);

    jsImageElement.addEventListener('click', () => {
        gameState.score += gameState.clickPower;
        upgradeUI(gameState, calculateCost);
        saveGame(gameState);
    });

    resetBtnElement.addEventListener('click', () => {
        localStorage.clear();
        loadGame(gameState);
        upgradeUI(gameState, calculateCost);
    });

    clickUpgradeBtnElement.addEventListener('click', () => {
        if (tryBuyClickUpgrade()) {
            buyClickUpgrade();
            upgradeUI(gameState, calculateCost);
            saveGame(gameState);
        }
    });

    passiveIncomeBtnElement.addEventListener('click', () => {
        if (tryBuyPassiveIncome()) {
            buyPassiveIncome();
            upgradeUI(gameState, calculateCost);
            saveGame(gameState);
        }
    });

    setInterval(() => {
        const passiveIncome = gameState.passiveIncome;

        if (passiveIncome > 0) {
            gameState.score += passiveIncome;
            upgradeUI(gameState, calculateCost);
            saveGame(gameState);
        }
    }, 1000);
}
