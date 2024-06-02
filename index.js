document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-water-btn');
    const progressText = document.getElementById('progress-text');
    const progressCircle = document.getElementById('progress-circle');
    const completeAmount = document.getElementById('complete-amount');
    const resetBtn = document.getElementById('reset-water-btn');

    let currentAmount = 0;
    const goalAmount = 3000;

    addBtn.addEventListener('click', () => {
        currentAmount += 200;
        if (currentAmount > goalAmount) {
            currentAmount = goalAmount;
        }
        updateProgress();
    });

    resetBtn.addEventListener('click', () => {
        currentAmount = 0;
        updateProgress();
    });

    function updateProgress() {
        const percentage = (currentAmount / goalAmount) * 100;
        progressCircle.style.background = `conic-gradient(#00aaff 0% ${percentage}%, #e0e0e0 ${percentage}% 100%)`;
        progressText.textContent = `${percentage.toFixed(0)}%`;
        completeAmount.textContent = `${currentAmount} ml`;
    }
});