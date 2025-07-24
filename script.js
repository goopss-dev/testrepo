// נתוני דמה לוידאו
const videosData = [
    {
        id: '1',
        title: 'מדריך לפיתוח אתרים מודרניים',
        description: 'למד כיצד לבנות אתרים מודרניים עם HTML5, CSS3 ו-JavaScript. מדריך מקיף למתחילים ומתקדמים.',
        thumbnail: 'https://picsum.photos/400/225?random=1',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: 596,
        tags: ['פיתוח', 'HTML', 'CSS', 'JavaScript'],
        uploadDate: new Date('2024-01-15'),
        views: 15420
    },
    {
        id: '2',
        title: 'עיצוב UI/UX מתקדם',
        description: 'עקרונות עיצוב ממשק משתמש וחוויית משתמש. כיצד ליצור עיצובים אטרקטיביים ופונקציונליים.',
        thumbnail: 'https://picsum.photos/400/225?random=2',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: 654,
        tags: ['עיצוב', 'UI', 'UX', 'Figma'],
        uploadDate: new Date('2024-01-20'),
        views: 8930
    },
    {
        id: '3',
        title: 'React למתחילים',
        description: 'הכירו את React - ספריית JavaScript הפופולרית לבניית ממשקי משתמש. מהבסיס ועד לפרויקט מלא.',
        thumbnail: 'https://picsum.photos/400/225?random=3',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: 720,
        tags: ['React', 'JavaScript', 'Frontend', 'Components'],
        uploadDate: new Date('2024-02-01'),
        views: 12350
    },
    {
        id: '4',
        title: 'CSS Grid ו-Flexbox',
        description: 'מדריך מקיף ל-CSS Grid ו-Flexbox. למדו כיצד ליצור layouts מורכבים ורספונסיביים בקלות.',
        thumbnail: 'https://picsum.photos/400/225?random=4',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: 480,
        tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
        uploadDate: new Date('2024-02-10'),
        views: 9876
    },
    {
        id: '5',
        title: 'JavaScript ES6+ תכונות חדשות',
        description: 'סקירה מקיפה של התכונות החדשות ב-JavaScript ES6 ומעלה. Arrow functions, destructuring, async/await ועוד.',
        thumbnail: 'https://picsum.photos/400/225?random=5',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: 540,
        tags: ['JavaScript', 'ES6', 'Modern JS', 'Async'],
        uploadDate: new Date('2024-02-15'),
        views: 11200
    },
    {
        id: '6',
        title: 'Node.js ו-Express בסיסי',
        description: 'בניית שרת בסיסי עם Node.js ו-Express. API, routing, middleware ועבודה עם בסיסי נתונים.',
        thumbnail: 'https://picsum.photos/400/225?random=6',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: 780,
        tags: ['Node.js', 'Express', 'Backend', 'API'],
        uploadDate: new Date('2024-02-20'),
        views: 7650
    },
    {
        id: '7',
        title: 'MongoDB ובסיסי נתונים NoSQL',
        description: 'הכירו את MongoDB - בסיס נתונים NoSQL פופולרי. CRUD operations, schemas, ואינדקסים.',
        thumbnail: 'https://picsum.photos/400/225?random=7',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: 620,
        tags: ['MongoDB', 'NoSQL', 'Database', 'CRUD'],
        uploadDate: new Date('2024-03-01'),
        views: 6420
    },
    {
        id: '8',
        title: 'Git ו-GitHub למתחילים',
        description: 'למדו להשתמש ב-Git לניהול קוד ו-GitHub לשיתוף פעולה. Commits, branches, merges ו-pull requests.',
        thumbnail: 'https://picsum.photos/400/225?random=8',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        duration: 450,
        tags: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
        uploadDate: new Date('2024-03-05'),
        views: 13890
    },
    {
        id: '9',
        title: 'TypeScript למפתחי JavaScript',
        description: 'מעבר מ-JavaScript ל-TypeScript. Types, interfaces, generics ויתרונות השפה.',
        thumbnail: 'https://picsum.photos/400/225?random=9',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        duration: 690,
        tags: ['TypeScript', 'JavaScript', 'Types', 'Static Typing'],
        uploadDate: new Date('2024-03-10'),
        views: 8760
    },
    {
        id: '10',
        title: 'Vue.js מהבסיס',
        description: 'הכירו את Vue.js - framework פשוט וחזק לבניית אפליקציות web. Components, directives ו-state management.',
        thumbnail: 'https://picsum.photos/400/225?random=10',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: 580,
        tags: ['Vue.js', 'Frontend', 'Framework', 'Components'],
        uploadDate: new Date('2024-03-15'),
        views: 5430
    },
    {
        id: '11',
        title: 'Responsive Web Design',
        description: 'עיצוב אתרים רספונסיביים שעובדים על כל המכשירים. Media queries, mobile-first ו-flexible layouts.',
        thumbnail: 'https://picsum.photos/400/225?random=11',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        duration: 520,
        tags: ['Responsive', 'Mobile', 'CSS', 'Design'],
        uploadDate: new Date('2024-03-20'),
        views: 10250
    },
    {
        id: '12',
        title: 'Web Performance Optimization',
        description: 'אופטימיזציה של ביצועי אתרים. Loading times, image optimization, caching ו-best practices.',
        thumbnail: 'https://picsum.photos/400/225?random=12',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        duration: 640,
        tags: ['Performance', 'Optimization', 'Speed', 'Best Practices'],
        uploadDate: new Date('2024-03-25'),
        views: 7890
    },
    {
        id: '13',
        title: 'CSS Animations ו-Transitions',
        description: 'יצירת אנימציות מרהיבות עם CSS. Keyframes, transitions, transforms ו-advanced techniques.',
        thumbnail: 'https://picsum.photos/400/225?random=13',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
        duration: 470,
        tags: ['CSS', 'Animations', 'Transitions', 'Visual Effects'],
        uploadDate: new Date('2024-04-01'),
        views: 9340
    },
    {
        id: '14',
        title: 'REST API Design',
        description: 'עקרונות עיצוב REST API נכון. HTTP methods, status codes, authentication ו-best practices.',
        thumbnail: 'https://picsum.photos/400/225?random=14',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: 600,
        tags: ['API', 'REST', 'Backend', 'HTTP'],
        uploadDate: new Date('2024-04-05'),
        views: 6780
    },
    {
        id: '15',
        title: 'Docker למפתחים',
        description: 'הכירו את Docker - כלי containerization חזק. Images, containers, Dockerfile ו-deployment.',
        thumbnail: 'https://picsum.photos/400/225?random=15',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: 720,
        tags: ['Docker', 'DevOps', 'Containers', 'Deployment'],
        uploadDate: new Date('2024-04-10'),
        views: 5620
    },
    {
        id: '16',
        title: 'Testing ב-JavaScript',
        description: 'כתיבת בדיקות יעילות ב-JavaScript. Jest, unit tests, integration tests ו-TDD.',
        thumbnail: 'https://picsum.photos/400/225?random=16',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: 550,
        tags: ['Testing', 'Jest', 'TDD', 'Quality Assurance'],
        uploadDate: new Date('2024-04-15'),
        views: 8120
    },
    {
        id: '17',
        title: 'GraphQL מהבסיס',
        description: 'הכירו את GraphQL - חלופה מודרנית ל-REST. Queries, mutations, schemas ו-resolvers.',
        thumbnail: 'https://picsum.photos/400/225?random=17',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: 680,
        tags: ['GraphQL', 'API', 'Query Language', 'Modern Backend'],
        uploadDate: new Date('2024-04-20'),
        views: 4890
    },
    {
        id: '18',
        title: 'Webpack ו-Build Tools',
        description: 'הגדרת Webpack ו-build tools מודרניים. Bundling, optimization, plugins ו-development workflow.',
        thumbnail: 'https://picsum.photos/400/225?random=18',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: 590,
        tags: ['Webpack', 'Build Tools', 'Bundling', 'Development'],
        uploadDate: new Date('2024-04-25'),
        views: 6340
    },
    {
        id: '19',
        title: 'Progressive Web Apps (PWA)',
        description: 'בניית Progressive Web Apps. Service workers, offline functionality, push notifications ו-app-like experience.',
        thumbnail: 'https://picsum.photos/400/225?random=19',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: 750,
        tags: ['PWA', 'Service Workers', 'Offline', 'Mobile'],
        uploadDate: new Date('2024-05-01'),
        views: 7230
    },
    {
        id: '20',
        title: 'Web Security Best Practices',
        description: 'אבטחת אפליקציות web. HTTPS, authentication, authorization, XSS, CSRF ו-security headers.',
        thumbnail: 'https://picsum.photos/400/225?random=20',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: 620,
        tags: ['Security', 'Authentication', 'HTTPS', 'Best Practices'],
        uploadDate: new Date('2024-05-05'),
        views: 9870
    }
];

// משתנים גלובליים
let allVideos = [...videosData];
let filteredVideos = [...videosData];
let currentSearchTerm = '';
let currentCategory = 'all';

// אלמנטים DOM
const searchInput = document.getElementById('searchInput');
const videoGrid = document.getElementById('videoGrid');
const loadingSpinner = document.getElementById('loadingSpinner');
const noResults = document.getElementById('noResults');
const videoModal = document.getElementById('videoModal');
const modalClose = document.getElementById('modalClose');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalViews = document.getElementById('modalViews');
const modalDate = document.getElementById('modalDate');

// פונקציות עזר
function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M צפיות';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K צפיות';
    }
    return views + ' צפיות';
}

function formatDate(date) {
    return date.toLocaleDateString('he-IL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// יצירת כרטיס וידאו
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `צפה בוידאו: ${video.title}`);
    
    card.innerHTML = `
        <div class="video-thumbnail-container">
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail" loading="lazy">
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${video.description}</p>
            <div class="video-meta">
                <span class="video-views">${formatViews(video.views)}</span>
                <span class="video-duration">${formatDuration(video.duration)}</span>
            </div>
            <button class="try-button">Try It Now</button>
        </div>
    `;
    
    // הוספת event listeners
    const tryButton = card.querySelector('.try-button');
    const cardClickHandler = () => openVideoModal(video);
    
    card.addEventListener('click', cardClickHandler);
    tryButton.addEventListener('click', (e) => {
        e.stopPropagation();
        openVideoModal(video);
    });
    
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openVideoModal(video);
        }
    });
    
    return card;
}

// רינדור הגריד
function renderVideoGrid() {
    videoGrid.innerHTML = '';
    
    if (filteredVideos.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    filteredVideos.forEach(video => {
        const card = createVideoCard(video);
        videoGrid.appendChild(card);
    });
}

// פונקציית חיפוש וסינון
function filterVideos() {
    let videos = [...allVideos];
    
    // סינון לפי קטגוריה
    if (currentCategory !== 'all') {
        videos = videos.filter(video => 
            video.tags.some(tag => tag.toLowerCase().includes(currentCategory.toLowerCase()))
        );
    }
    
    // סינון לפי טקסט חיפוש
    if (currentSearchTerm.trim()) {
        const term = currentSearchTerm.toLowerCase().trim();
        videos = videos.filter(video => 
            video.title.toLowerCase().includes(term) ||
            video.description.toLowerCase().includes(term) ||
            video.tags.some(tag => tag.toLowerCase().includes(term))
        );
    }
    
    filteredVideos = videos;
    renderVideoGrid();
}

// פונקציית חיפוש (לתאימות לאחור)
function searchVideos(searchTerm) {
    currentSearchTerm = searchTerm;
    filterVideos();
}

// פונקציית סינון לפי קטגוריה
function filterByCategory(category) {
    currentCategory = category;
    
    // עדכון כפתורי הקטגוריות
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    filterVideos();
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// פתיחת מודל וידאו
function openVideoModal(video) {
    modalTitle.textContent = video.title;
    modalDescription.textContent = video.description;
    modalViews.textContent = formatViews(video.views);
    modalDate.textContent = formatDate(video.uploadDate);
    modalVideo.src = video.videoUrl;
    
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus על כפתור הסגירה
    modalClose.focus();
}

// סגירת מודל וידאו
function closeVideoModal() {
    videoModal.classList.add('hidden');
    document.body.style.overflow = '';
    modalVideo.src = '';
    modalVideo.pause();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // רינדור ראשוני
    renderVideoGrid();
    
    // חיפוש עם debounce
    const debouncedSearch = debounce(searchVideos, 300);
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        debouncedSearch(currentSearchTerm);
    });
    
    // כפתורי קטגוריות
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterByCategory(btn.dataset.category);
        });
    });
    
    // סגירת מודל
    modalClose.addEventListener('click', closeVideoModal);
    
    // סגירת מודל בלחיצה על overlay
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal || e.target.classList.contains('modal-overlay')) {
            closeVideoModal();
        }
    });
    
    // keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
            closeVideoModal();
        }
    });
    
    // Focus management
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const firstCard = videoGrid.querySelector('.video-card');
            if (firstCard) firstCard.focus();
        }
    });
    
    // Grid navigation
    videoGrid.addEventListener('keydown', (e) => {
        const cards = Array.from(videoGrid.querySelectorAll('.video-card'));
        const currentIndex = cards.indexOf(document.activeElement);
        
        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                if (currentIndex < cards.length - 1) {
                    cards[currentIndex + 1].focus();
                }
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (currentIndex > 0) {
                    cards[currentIndex - 1].focus();
                }
                break;
            case 'ArrowDown':
                e.preventDefault();
                const nextRowIndex = currentIndex + 3; // assuming 3 columns
                if (nextRowIndex < cards.length) {
                    cards[nextRowIndex].focus();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex === 0) {
                    searchInput.focus();
                } else {
                    const prevRowIndex = currentIndex - 3;
                    if (prevRowIndex >= 0) {
                        cards[prevRowIndex].focus();
                    }
                }
                break;
        }
    });
});

// Intersection Observer לטעינת תמונות lazy
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.remove('loading');
            imageObserver.unobserve(img);
        }
    });
});

// הוספת observer לתמונות חדשות
const observeImages = () => {
    const images = document.querySelectorAll('.video-thumbnail');
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
};

// קריאה לobserver אחרי רינדור
setTimeout(observeImages, 100);