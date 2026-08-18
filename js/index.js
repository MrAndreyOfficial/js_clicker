import { buyClickUpgrade, tryBuyClickUpgrade, calculateCost } from './game/shop.js';
import { gameState } from './game/state.js';
import { upgradeUI } from './game/ui.js';

import { loadGame, saveGame } from './storage.js';

const jsImageElement = document.getElementById('js-img');
const ClickUpgradeBtnElement = document.getElementById('upgrade-click-power-btn');
const resetBtnElement = document.getElementById('reset-btn');

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

    ClickUpgradeBtnElement.addEventListener('click', () => {
        if (tryBuyClickUpgrade()) {
            buyClickUpgrade();
            upgradeUI(gameState, calculateCost);
            saveGame(gameState);
        }
    })
}
