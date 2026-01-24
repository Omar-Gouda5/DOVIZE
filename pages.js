// ============================================
// SHARED FUNCTIONALITY FOR ALL PAGES
// ============================================

let zoomedCharts = {
    dolar: false,
    euro: false,
    altin: false,
    petrol: false,
    faiz: false
};

let charts = {};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializePageCharts();
    initializeTooltips();
    initializeMenuToggle();
    initializeAuthButtons();
    setActiveNavLink();
});

// ============================================
// PAGE-SPECIFIC CHARTS
// ============================================

function initializePageCharts() {
    // Döviz Page
    if (document.getElementById('dolarCanvas')) {
        createDolarChart();
        createEuroChart();
    }

    // Altın Page
    if (document.getElementById('altinCanvas')) {
        createAltinChart();
    }

    // Faizler Page
    if (document.getElementById('faizCanvas')) {
        createFaizChart();
    }

    // Kripto Page
    if (document.getElementById('bitcoinCanvas')) {
        createBitcoinChart();
        createEthereumChart();
    }

    // Haberler Page - No charts needed
}

// ============================================
// DOLAR CHART
// ============================================

function createDolarChart() {
    const ctx = document.getElementById('dolarCanvas');
    if (!ctx) return;

    charts.dolar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            datasets: [{
                label: 'Dolar/TL Kuru',
                data: [39.25, 39.20, 39.15, 39.10, 39.08, 39.05, 39.04, 39.03, 39.03],
                borderColor: '#E74C3C',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#E74C3C',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#E74C3C'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// ============================================
// EURO CHART
// ============================================

function createEuroChart() {
    const ctx = document.getElementById('euroCanvas');
    if (!ctx) return;

    charts.euro = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            datasets: [{
                label: 'Euro/TL Kuru',
                data: [44.60, 44.55, 44.50, 44.45, 44.42, 44.40, 44.40, 44.40, 44.40],
                borderColor: '#3498DB',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#3498DB',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#3498DB'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// ============================================
// ALTIN CHART
// ============================================

function createAltinChart() {
    const ctx = document.getElementById('altinCanvas');
    if (!ctx) return;

    charts.altin = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            datasets: [{
                label: 'Gram Altın Fiyatı',
                data: [4170, 4172, 4175, 4178, 4181, 4183, 4184, 4184, 4184],
                borderColor: '#F39C12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#F39C12',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#F39C12'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// ============================================
// FAIZ CHART
// ============================================

function createFaizChart() {
    const ctx = document.getElementById('faizCanvas');
    if (!ctx) return;

    charts.faiz = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Politika Faizi', 'Mevduat Faizi', 'Kredi Faizi', 'Hazine Bonosu', 'Devlet Tahvili'],
            datasets: [{
                label: 'Faiz Oranları (%)',
                data: [50, 45, 55, 35, 40],
                backgroundColor: [
                    '#001F3F',
                    '#0A3A66',
                    '#C0C0C0',
                    '#808080',
                    '#E8E8E8'
                ],
                borderColor: '#001F3F',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#001F3F'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// ============================================
// BITCOIN CHART
// ============================================

function createBitcoinChart() {
    const ctx = document.getElementById('bitcoinCanvas');
    if (!ctx) return;

    charts.bitcoin = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            datasets: [{
                label: 'Bitcoin Fiyatı ($)',
                data: [104500, 104700, 104900, 105100, 105200, 105100, 105000, 105000, 105000],
                borderColor: '#F39C12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#F39C12',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#F39C12'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// ============================================
// ETHEREUM CHART
// ============================================

function createEthereumChart() {
    const ctx = document.getElementById('ethereumCanvas');
    if (!ctx) return;

    charts.ethereum = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            datasets: [{
                label: 'Ethereum Fiyatı ($)',
                data: [3450, 3470, 3490, 3510, 3520, 3510, 3500, 3500, 3500],
                borderColor: '#627EEA',
                backgroundColor: 'rgba(98, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#627EEA',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 14, weight: 'bold' },
                        color: '#627EEA'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

// ============================================
// ZOOM FUNCTIONALITY
// ============================================

function toggleZoom(chartId) {
    const chartElement = document.getElementById(chartId + 'Chart');
    if (!chartElement) return;

    zoomedCharts[chartId] = !zoomedCharts[chartId];

    if (zoomedCharts[chartId]) {
        chartElement.classList.add('zoomed');
    } else {
        chartElement.classList.remove('zoomed');
    }

    // Trigger chart resize
    if (charts[chartId]) {
        setTimeout(() => charts[chartId].resize(), 100);
    }
}

// ============================================
// TOOLTIP FUNCTIONALITY
// ============================================

function initializeTooltips() {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;

    const marketCards = document.querySelectorAll('.market-card');

    marketCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const tooltipText = card.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.classList.add('show');
        });

        card.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY - 40;
            tooltip.style.left = x + 'px';
            tooltip.style.top = y + 'px';
        });

        card.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initializeMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (!menuToggle || !mobileNav) return;

    menuToggle.addEventListener('click', () => {
        const isVisible = mobileNav.style.display !== 'none';
        mobileNav.style.display = isVisible ? 'none' : 'flex';
    });

    const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
    });
}

// ============================================
// ACTIVE NAV LINK
// ============================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ============================================
// AUTHENTICATION FUNCTIONALITY
// ============================================

function initializeAuthButtons() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (!loginBtn || !logoutBtn) return;

    loginBtn.addEventListener('click', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);

    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn')) {
        updateAuthUI();
    }
}

function handleLogin() {
    const username = prompt('Kullanıcı adınızı girin:');

    if (username && username.trim()) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        updateAuthUI();
        alert(`Hoş geldiniz, ${username}!`);
    }
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    updateAuthUI();
    alert('Başarıyla çıkış yaptınız!');
}

function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (localStorage.getItem('isLoggedIn')) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

window.addEventListener('resize', () => {
    const mobileNav = document.getElementById('mobileNav');
    if (window.innerWidth > 768 && mobileNav) {
        mobileNav.style.display = 'none';
    }

    // Resize all charts
    Object.values(charts).forEach(chart => {
        if (chart) chart.resize();
    });
});

console.log('Page Script Loaded Successfully ✓');

// ============================================
// AUTHENTICATION FUNCTIONALITY (for all pages)
// ============================================

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

function checkLoginStatus() {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true' || sessionStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    
    if (loggedIn && userEmail) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-block';
            logoutBtn.textContent = 'Çıkış (' + userEmail.split('@')[0] + ')';
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');
    
    alert('Başarıyla çıkış yaptınız!');
    checkLoginStatus();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});
