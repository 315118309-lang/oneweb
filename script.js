function calculateCost() {
    // 免冲洗版材
    const flushFreePlatePrice = parseFloat(document.getElementById('flushFreePlatePrice').value);
    const flushFreePlateLife = parseFloat(document.getElementById('flushFreePlateLife').value);

    // 冲洗版材
    const flushPlatePrice = parseFloat(document.getElementById('flushPlatePrice').value);
    const flushPlateLife = parseFloat(document.getElementById('flushPlateLife').value);
    const developerCost = parseFloat(document.getElementById('developerCost').value);
    const waterCost = parseFloat(document.getElementById('waterCost').value);
    const electricityCost = parseFloat(document.getElementById('electricityCost').value);
    const wasteDisposalCost = parseFloat(document.getElementById('wasteDisposalCost').value);

    // 计算免冲洗版材单张成本
    const flushFreeCostPerSheet = flushFreePlatePrice / flushFreePlateLife;

    // 计算冲洗版材单张成本
    const flushCostPerSheet = (flushPlatePrice + developerCost + waterCost + electricityCost + wasteDisposalCost) / flushPlateLife;

    // 显示结果
    document.getElementById('flushFreeResult').textContent = flushFreeCostPerSheet.toFixed(4);
    document.getElementById('flushResult').textContent = flushCostPerSheet.toFixed(4);
    document.getElementById('difference').textContent = (flushFreeCostPerSheet - flushCostPerSheet).toFixed(4);
}