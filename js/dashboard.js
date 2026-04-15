// Dashboard — Visual results with Chart.js

let chartInstances = {};

function destroyCharts() {
    Object.values(chartInstances).forEach(c => c.destroy());
    chartInstances = {};
}

function renderDashboard() {
    destroyCharts();
    const scores = calculateAllScores();

    renderSummaryCards(scores);
    renderRadarChart(scores);
    renderHADCharts(scores);
    renderODIChart(scores);
    renderTSKChart(scores);
}

// ===== SUMMARY CARDS =====

function renderSummaryCards(scores) {
    const container = document.getElementById('dash-summary');

    container.innerHTML = `
        <div class="summary-card ${scores.had.anxietyLevel.color}">
            <div class="card-label">HAD-S ${t('anxiety_label')}</div>
            <div class="card-value">${scores.had.anxiety}/21</div>
            <div class="card-interp">${scores.had.anxietyLevel.label}</div>
        </div>
        <div class="summary-card ${scores.had.depressionLevel.color}">
            <div class="card-label">HAD-S ${t('depression_label')}</div>
            <div class="card-value">${scores.had.depression}/21</div>
            <div class="card-interp">${scores.had.depressionLevel.label}</div>
        </div>
        <div class="summary-card ${scores.odi.level.color}">
            <div class="card-label">ODI</div>
            <div class="card-value">${scores.odi.percent}%</div>
            <div class="card-interp">${scores.odi.level.label}</div>
        </div>
        <div class="summary-card ${scores.tsk.elevated ? 'red' : 'green'}">
            <div class="card-label">TSK-17</div>
            <div class="card-value">${scores.tsk.total}/68</div>
            <div class="card-interp">${scores.tsk.elevated ? t('tsk_elevated') : t('tsk_normal')}</div>
        </div>
    `;
}

// ===== RADAR CHART =====

function renderRadarChart(scores) {
    const ctx = document.getElementById('chart-radar').getContext('2d');

    // Normalize to 0-100 for radar
    const anxNorm = Math.round((scores.had.anxiety / 21) * 100);
    const depNorm = Math.round((scores.had.depression / 21) * 100);
    const odiNorm = scores.odi.percent;
    const tskNorm = Math.round((scores.tsk.total / 68) * 100);

    chartInstances.radar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                `${t('anxiety_label')} (HAD)`,
                `${t('depression_label')} (HAD)`,
                'ODI',
                'TSK-17'
            ],
            datasets: [{
                label: t('score'),
                data: [anxNorm, depNorm, odiNorm, tskNorm],
                backgroundColor: 'rgba(27, 58, 92, 0.15)',
                borderColor: '#1B3A5C',
                borderWidth: 2,
                pointBackgroundColor: [
                    getColorForValue(anxNorm),
                    getColorForValue(depNorm),
                    getColorForValue(odiNorm),
                    getColorForValue(tskNorm)
                ],
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 25,
                        backdropColor: 'transparent',
                        font: { size: 10 }
                    },
                    grid: { color: '#e2e8f0' },
                    angleLines: { color: '#e2e8f0' },
                    pointLabels: {
                        font: { size: 12, weight: '500' },
                        color: '#1e293b'
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// ===== HAD CHARTS (Doughnut) =====

function renderHADCharts(scores) {
    // Anxiety
    const ctxAnx = document.getElementById('chart-had-anxiety').getContext('2d');
    chartInstances.hadAnxiety = createGaugeChart(ctxAnx, {
        value: scores.had.anxiety,
        max: 21,
        label: t('anxiety_label'),
        thresholds: [7, 10, 14, 21],
        colors: ['#4CAF50', '#FFB74D', '#FF9800', '#F44336']
    });

    // Depression
    const ctxDep = document.getElementById('chart-had-depression').getContext('2d');
    chartInstances.hadDepression = createGaugeChart(ctxDep, {
        value: scores.had.depression,
        max: 21,
        label: t('depression_label'),
        thresholds: [7, 10, 14, 21],
        colors: ['#4CAF50', '#FFB74D', '#FF9800', '#F44336']
    });

    // Interpretation
    const interpBox = document.getElementById('had-interpretation');
    const anxLevel = scores.had.anxietyLevel;
    const depLevel = scores.had.depressionLevel;
    const worstColor = getWorstColor(anxLevel.color, depLevel.color);

    interpBox.className = `interpretation-box ${worstColor}`;
    interpBox.innerHTML = `
        <strong>${t('anxiety_label')}: ${scores.had.anxiety}/21 — ${anxLevel.label}</strong>
        <p>${anxLevel.desc}</p>
        <br>
        <strong>${t('depression_label')}: ${scores.had.depression}/21 — ${depLevel.label}</strong>
        <p>${depLevel.desc}</p>
    `;
}

function createGaugeChart(ctx, opts) {
    const remaining = opts.max - opts.value;
    let segmentColor;

    if (opts.value <= opts.thresholds[0]) segmentColor = opts.colors[0];
    else if (opts.value <= opts.thresholds[1]) segmentColor = opts.colors[1];
    else if (opts.value <= opts.thresholds[2]) segmentColor = opts.colors[2];
    else segmentColor = opts.colors[3];

    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [opts.label, ''],
            datasets: [{
                data: [opts.value, remaining],
                backgroundColor: [segmentColor, '#e2e8f0'],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        },
        plugins: [{
            id: 'centerText',
            afterDraw(chart) {
                const { width, height, ctx: c } = chart;
                c.save();
                c.textAlign = 'center';
                c.textBaseline = 'middle';

                // Value
                c.font = `bold ${height * 0.15}px Inter, sans-serif`;
                c.fillStyle = segmentColor;
                c.fillText(`${opts.value}/${opts.max}`, width / 2, height / 2 - 8);

                // Label
                c.font = `500 ${height * 0.08}px Inter, sans-serif`;
                c.fillStyle = '#64748b';
                c.fillText(opts.label, width / 2, height / 2 + 16);
                c.restore();
            }
        }]
    });
}

// ===== ODI CHART =====

function renderODIChart(scores) {
    const ctx = document.getElementById('chart-odi').getContext('2d');

    const zones = [
        { label: currentLang === 'fr' ? 'Minimal' : 'Minimal', max: 20, color: '#4CAF50' },
        { label: currentLang === 'fr' ? 'Modéré' : 'Mäßig', max: 40, color: '#FFB74D' },
        { label: currentLang === 'fr' ? 'Sévère' : 'Schwer', max: 60, color: '#FF9800' },
        { label: currentLang === 'fr' ? 'Très sévère' : 'Sehr schwer', max: 100, color: '#F44336' }
    ];

    const barColor = zones.find(z => scores.odi.percent <= z.max)?.color || '#F44336';

    chartInstances.odi = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['ODI'],
            datasets: [
                {
                    label: t('score'),
                    data: [scores.odi.percent],
                    backgroundColor: barColor,
                    borderRadius: 8,
                    barThickness: 60
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    grid: { display: true, color: '#f1f5f9' },
                    ticks: {
                        callback: v => v + '%',
                        font: { size: 11 }
                    }
                },
                y: {
                    display: false
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.raw}% — ${scores.odi.level.label}`
                    }
                },
                annotation: undefined
            }
        },
        plugins: [{
            id: 'odiZones',
            beforeDraw(chart) {
                const { ctx: c, chartArea: { left, right, top, bottom }, scales: { x } } = chart;
                c.save();

                zones.forEach(zone => {
                    const prevMax = zones[zones.indexOf(zone) - 1]?.max || 0;
                    const x1 = x.getPixelForValue(prevMax);
                    const x2 = x.getPixelForValue(zone.max);
                    c.fillStyle = zone.color + '15';
                    c.fillRect(x1, top, x2 - x1, bottom - top);
                });

                c.restore();
            }
        }, {
            id: 'odiValue',
            afterDraw(chart) {
                const { ctx: c, chartArea, scales: { x } } = chart;
                const xPos = x.getPixelForValue(scores.odi.percent);
                const yMid = (chartArea.top + chartArea.bottom) / 2;

                c.save();
                c.textAlign = 'center';
                c.font = 'bold 14px Inter, sans-serif';
                c.fillStyle = '#fff';
                c.fillText(`${scores.odi.percent}%`, Math.min(xPos, chartArea.right - 20), yMid + 4);
                c.restore();
            }
        }]
    });

    // Interpretation
    const interpBox = document.getElementById('odi-interpretation');
    interpBox.className = `interpretation-box ${scores.odi.level.color}`;
    const odiDetail = scores.odi.answered < 10
        ? ` (${scores.odi.answered}/10 sections)`
        : '';
    interpBox.innerHTML = `
        <strong>${scores.odi.level.label} — ${scores.odi.sum}/${scores.odi.maxPossible} (${scores.odi.percent}%)${odiDetail}</strong>
        <p>${scores.odi.level.desc}</p>
    `;
}

// ===== TSK CHART =====

function renderTSKChart(scores) {
    const ctx = document.getElementById('chart-tsk').getContext('2d');

    const barColor = scores.tsk.elevated ? '#F44336' : '#4CAF50';

    chartInstances.tsk = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['TSK-17'],
            datasets: [{
                label: t('score'),
                data: [scores.tsk.total],
                backgroundColor: barColor,
                borderRadius: 8,
                barThickness: 60
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    min: 0,
                    max: 68,
                    grid: { display: true, color: '#f1f5f9' },
                    ticks: { font: { size: 11 } }
                },
                y: { display: false }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.raw}/68 — ${scores.tsk.elevated ? t('tsk_elevated') : t('tsk_normal')}`
                    }
                }
            }
        },
        plugins: [{
            id: 'tskThreshold',
            beforeDraw(chart) {
                const { ctx: c, chartArea: { top, bottom }, scales: { x } } = chart;
                const xThresh = x.getPixelForValue(37);
                c.save();

                // Threshold line
                c.strokeStyle = '#1B3A5C';
                c.lineWidth = 2;
                c.setLineDash([6, 4]);
                c.beginPath();
                c.moveTo(xThresh, top);
                c.lineTo(xThresh, bottom);
                c.stroke();

                // Label
                c.setLineDash([]);
                c.fillStyle = '#1B3A5C';
                c.font = 'bold 10px Inter, sans-serif';
                c.textAlign = 'center';
                c.fillText(`${t('threshold')} 37`, xThresh, top - 6);
                c.restore();
            }
        }, {
            id: 'tskValue',
            afterDraw(chart) {
                const { ctx: c, chartArea, scales: { x } } = chart;
                const xPos = x.getPixelForValue(scores.tsk.total);
                const yMid = (chartArea.top + chartArea.bottom) / 2;

                c.save();
                c.textAlign = 'center';
                c.font = 'bold 14px Inter, sans-serif';
                c.fillStyle = '#fff';
                c.fillText(`${scores.tsk.total}/68`, Math.min(xPos, chartArea.right - 20), yMid + 4);
                c.restore();
            }
        }]
    });

    // Interpretation
    const interpBox = document.getElementById('tsk-interpretation');
    const color = scores.tsk.elevated ? 'red' : 'green';
    interpBox.className = `interpretation-box ${color}`;
    interpBox.innerHTML = `
        <strong>${scores.tsk.elevated ? t('tsk_elevated') : t('tsk_normal')} — ${scores.tsk.total}/68</strong>
        <p>${scores.tsk.elevated ? t('tsk_elevated_desc') : t('tsk_normal_desc')}</p>
    `;
}

// ===== HELPERS =====

function getColorForValue(normalizedValue) {
    if (normalizedValue <= 33) return '#4CAF50';
    if (normalizedValue <= 66) return '#FF9800';
    return '#F44336';
}

function getWorstColor(c1, c2) {
    const order = ['green', 'orange', 'red'];
    return order[Math.max(order.indexOf(c1), order.indexOf(c2))];
}
