// ============================================
// NEWS DATA
// ============================================

const newsData = [
    {
        id: 1,
        title: "Merkez Bankası faiz kararını açıkladı",
        description: "Türkiye Cumhuriyet Merkez Bankası (TCMB), politika faizini 500 baz puan artırarak yüzde 50'ye yükseltti.",
        date: "2025-11-22",
        image: "news-1-tcmb.png"
    },
    {
        id: 2,
        title: "Bitcoin 105 bin doları aştı",
        description: "ABD'den gelmesi beklenen ve kripto paralara yönelik olumlu görülen düzenlemeler sonrası Bitcoin rekor kırdı.",
        date: "2025-11-21",
        image: "news-2-bitcoin.jpg"
    },
    {
        id: 3,
        title: "Borsa İstanbul günü düşüşle kapattı",
        description: "BIST 100 endeksi, günü yüzde 1,65 düşüşle 9.019 puandan tamamladı.",
        date: "2025-11-20",
        image: "news-3-bist.jpg"
    },
    {
        id: 4,
        title: "Altın fiyatları yükselişte",
        description: "Gram altın, günü yüzde 0,50 artışla 4.169,51 TL seviyesinden kapattı.",
        date: "2025-11-19",
        image: "news-4-altin.jpg"
    },
    {
        id: 5,
        title: "Dolar/TL kurunda hareketlilik",
        description: "Forex piyasasında Türk Lirası karşısında Dolar yüzde 0,75 değer kazandı. Merkez Bankası açıklamaları piyasaları etkiledi.",
        date: "2025-11-18",
        image: "news-5-forex.jpg"
    },
    {
        id: 6,
        title: "Petrol fiyatları yükselişe geçti",
        description: "Enerji piyasasında petrol fiyatları, Ortadoğu'daki gelişmeler nedeniyle yüzde 2,5 artış gösterdi. Brent petrol 75 doları aştı.",
        date: "2025-11-17",
        image: "news-6-energy.jpg"
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentNewsIndex = 0;
let isLoggedIn = false;
let zoomedCharts = {
    bist: false,
    usd: false
};
let bistChart = null;
let usdChart = null;

// ============================================
// DOM ELEMENTS
// ============================================

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const sliderDots = document.getElementById('sliderDots');
const tooltip = document.getElementById('tooltip');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    initializeSlider();
    initializeTooltips();
    initializeMenuToggle();
    initializeAuthButtons();
    createSliderDots();
    updateNewsDisplay();
    setActiveNavLink();
});

// ============================================
// CHART INITIALIZATION
// ============================================

function initializeCharts() {
    // BIST 100 Chart
    const bistCtx = document.getElementById('bistCanvas');
    if (bistCtx) {
        bistChart = new Chart(bistCtx, {
            type: 'line',
            data: {
                labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
                datasets: [{
                    label: 'BIST 100 Endeksi',
                    data: [9000, 9050, 9100, 9080, 9120, 9150, 9140, 9160, 9161],
                    borderColor: '#001F3F',
                    backgroundColor: 'rgba(0, 31, 63, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#001F3F',
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
                            color: '#001F3F'
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

    // USD/TRY Chart
    const usdCtx = document.getElementById('usdCanvas');
    if (usdCtx) {
        usdChart = new Chart(usdCtx, {
            type: 'line',
            data: {
                labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
                datasets: [{
                    label: 'Dolar/TL Kuru',
                    data: [39.25, 39.20, 39.15, 39.10, 39.08, 39.05, 39.04, 39.03, 39.03],
                    borderColor: '#27AE60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#27AE60',
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
                            color: '#27AE60'
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
}

// ============================================
// NEWS SLIDER FUNCTIONALITY
// ============================================

function initializeSlider() {
    nextBtn.addEventListener('click', nextNews);
    prevBtn.addEventListener('click', prevNews);

    // Auto-rotate news every 5 seconds
    setInterval(() => {
        currentNewsIndex = (currentNewsIndex + 1) % newsData.length;
        updateNewsDisplay();
    }, 5000);
}

function createSliderDots() {
    newsData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentNewsIndex = index;
            updateNewsDisplay();
        });
        sliderDots.appendChild(dot);
    });
}

function nextNews() {
    currentNewsIndex = (currentNewsIndex + 1) % newsData.length;
    updateNewsDisplay();
}

function prevNews() {
    currentNewsIndex = (currentNewsIndex - 1 + newsData.length) % newsData.length;
    updateNewsDisplay();
}

function updateNewsDisplay() {
    const news = newsData[currentNewsIndex];
    
    document.getElementById('newsTitle').textContent = news.title;
    document.getElementById('newsDescription').textContent = news.description;
    document.getElementById('newsDate').textContent = news.date;
    
    // Update news image
    const newsImage = document.querySelector('.news-image img');
    if (newsImage) {
        newsImage.src = news.image;
        newsImage.alt = news.title;
    }
    
    // Update active dot
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        if (index === currentNewsIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ============================================
// TOOLTIP FUNCTIONALITY
// ============================================

function initializeTooltips() {
    const marketCards = document.querySelectorAll('.market-card');
    
    marketCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const tooltipText = card.getAttribute('data-tooltip');
            showTooltip(tooltipText, e);
        });

        card.addEventListener('mousemove', (e) => {
            positionTooltip(e);
        });

        card.addEventListener('mouseleave', () => {
            hideTooltip();
        });
    });
}

function showTooltip(text, event) {
    tooltip.textContent = text;
    tooltip.classList.add('show');
    positionTooltip(event);
}

function positionTooltip(event) {
    const x = event.clientX;
    const y = event.clientY - 40;
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

function hideTooltip() {
    tooltip.classList.remove('show');
}

// ============================================
// ZOOM FUNCTIONALITY
// ============================================

function toggleZoom(chartId) {
    const chartElement = document.getElementById(chartId + 'Chart');
    
    zoomedCharts[chartId] = !zoomedCharts[chartId];
    
    if (zoomedCharts[chartId]) {
        chartElement.classList.add('zoomed');
    } else {
        chartElement.classList.remove('zoomed');
    }

    // Trigger chart resize
    if (chartId === 'bist' && bistChart) {
        setTimeout(() => bistChart.resize(), 100);
    } else if (chartId === 'usd' && usdChart) {
        setTimeout(() => usdChart.resize(), 100);
    }
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initializeMenuToggle() {
    menuToggle.addEventListener('click', () => {
        const isVisible = mobileNav.style.display !== 'none';
        mobileNav.style.display = isVisible ? 'none' : 'flex';
    });

    // Close menu when a link is clicked
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
    // Check if user is logged in on page load
    checkLoginStatus();
    
    // Logout button handler
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

function checkLoginStatus() {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true' || sessionStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    
    if (loggedIn && userEmail) {
        isLoggedIn = true;
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-block';
            logoutBtn.textContent = 'Çıkış (' + userEmail.split('@')[0] + ')';
        }
    } else {
        isLoggedIn = false;
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function handleLogout() {
    // Clear all login data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');
    
    isLoggedIn = false;
    
    // Update UI
    alert('Başarıyla çıkış yaptınız!');
    checkLoginStatus();
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        alert(`"${query}" için arama yapılıyor...`);
    }
}

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

window.addEventListener('resize', () => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        mobileNav.style.display = 'none';
    }

    // Resize charts
    if (bistChart) bistChart.resize();
    if (usdChart) usdChart.resize();
});

// ============================================
// CONSOLE LOGGING FOR DEBUGGING
// ============================================

console.log('DövizTakip Website Loaded Successfully ✓');
console.log('Features enabled:');
console.log('✓ Real Charts (Chart.js)');
console.log('✓ News Slider');
console.log('✓ Tooltips');
console.log('✓ Chart Zoom');
console.log('✓ Login System');
console.log('✓ Mobile Navigation');
console.log('✓ Multi-page Navigation');
