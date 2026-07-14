// Season data
const seasonData = {
    spring: {
        title: 'Welcome to Spring Paradise',
        subtitle: 'Bloom with us this beautiful season',
        emoji: '🌸',
        className: 'spring',
        activities: [
            { emoji: '🌼', name: 'Garden Tours', description: 'Explore our blooming botanical gardens with guided tours.' },
            { emoji: '🐦', name: 'Bird Watching', description: 'Experience wildlife with our expert ornithologists.' },
            { emoji: '🚴', name: 'Cycling Tours', description: 'Ride through scenic trails during perfect spring weather.' },
            { emoji: '🎨', name: 'Outdoor Painting', description: 'Capture the beauty of spring with our art classes.' },
            { emoji: '🌤️', name: 'Picnic Lunch', description: 'Enjoy meals surrounded by blooming flowers and fresh air.' },
            { emoji: '📸', name: 'Photography Walk', description: 'Document the colorful landscapes of spring.' }
        ],
        bookingMessage: '🌸 Spring Special: 20% off garden view rooms!'
    },
    summer: {
        title: 'Summer Fun Awaits',
        subtitle: 'Make a splash this summer season',
        emoji: '☀️',
        className: 'summer',
        activities: [
            { emoji: '🏊', name: 'Swimming', description: 'Enjoy our Olympic-sized pool and water slides.' },
            { emoji: '🏄', name: 'Water Sports', description: 'Try surfing, paddleboarding, and jet skiing.' },
            { emoji: '🎪', name: 'Beach Parties', description: 'Join our famous beach bonfire and dance nights.' },
            { emoji: '🎵', name: 'Outdoor Concerts', description: 'Live music performances every weekend.' },
            { emoji: '🍹', name: 'Tropical Drinks', description: 'Refresh yourself with our signature summer cocktails.' },
            { emoji: '🏖️', name: 'Beach Volleyball', description: 'Compete with friends in thrilling volleyball tournaments.' }
        ],
        bookingMessage: '☀️ Summer Extravaganza: Free water sports access with every booking!'
    },
    fall: {
        title: 'Autumn Escape',
        subtitle: 'Experience golden landscapes and crisp air',
        emoji: '🍂',
        className: 'fall',
        activities: [
            { emoji: '🥾', name: 'Hiking Trails', description: 'Trek through stunning fall foliage on scenic mountain paths.' },
            { emoji: '🍁', name: 'Leaf Peeping Tours', description: 'Guided tours to witness the spectacular autumn colors.' },
            { emoji: '🎃', name: 'Pumpkin Harvest', description: 'Pick pumpkins and enjoy traditional harvest activities.' },
            { emoji: '📚', name: 'Bonfire Stories', description: 'Gather around fires with s\'mores and storytelling.' },
            { emoji: '🍂', name: 'Nature Crafts', description: 'Create beautiful fall decorations with natural materials.' },
            { emoji: '🥧', name: 'Harvest Festivals', description: 'Celebrate the season with food, music, and festivities.' }
        ],
        bookingMessage: '🍂 Fall Festival Package: 3 nights get 1 night free!'
    },
    winter: {
        title: 'Winter Wonderland',
        subtitle: 'Cozy retreats and magical moments await',
        emoji: '❄️',
        className: 'winter',
        activities: [
            { emoji: '⛷️', name: 'Skiing & Snowboarding', description: 'Hit the slopes with world-class ski instructors.' },
            { emoji: '⛸️', name: 'Ice Skating', description: 'Glide on our frozen lakes and outdoor ice rinks.' },
            { emoji: '🛷', name: 'Sledding', description: 'Experience thrills on our pristine snow-covered hills.' },
            { emoji: '🧖', name: 'Spa Services', description: 'Warm up with luxurious spa treatments and hot springs.' },
            { emoji: '🎄', name: 'Holiday Events', description: 'Festive celebrations with decorations, music, and dining.' },
            { emoji: '☕', name: 'Cozy Dining', description: 'Fireside meals with mulled wine and warm comfort food.' }
        ],
        bookingMessage: '❄️ Winter Holiday Special: Book now and receive free hot chocolate for life!'
    }
};

// Function to get current season
function getCurrentSeason() {
    const month = new Date().getMonth(); // 0-11
    
    if (month >= 2 && month <= 4) return 'spring';      // March - May
    if (month >= 5 && month <= 7) return 'summer';      // June - August
    if (month >= 8 && month <= 10) return 'fall';       // September - November
    return 'winter';                                     // December - February
}

// Function to update page based on season
function updateSeason() {
    const season = getCurrentSeason();
    const data = seasonData[season];
    
    // Update body class
    document.body.className = data.className;
    
    // Update hero section
    document.getElementById('seasonTitle').textContent = data.title;
    document.getElementById('seasonSubtitle').textContent = data.subtitle;
    document.getElementById('seasonEmoji').textContent = data.emoji;
    
    // Update booking message
    document.getElementById('bookingMessage').textContent = data.bookingMessage;
    
    // Update footer
    document.getElementById('seasonFooter').textContent = 
        `Current Season: ${season.charAt(0).toUpperCase() + season.slice(1)}`;
    
    // Highlight active season card
    document.querySelectorAll('.season-card').forEach((card, index) => {
        card.classList.remove('active');
    });
    
    const seasonOrder = { spring: 0, summer: 1, fall: 2, winter: 3 };
    const seasonCards = document.querySelectorAll('.season-card');
    seasonCards[seasonOrder[season]].classList.add('active');
    
    // Update activities grid
    updateActivitiesGrid(data.activities);
}

// Function to update activities grid
function updateActivitiesGrid(activities) {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';
    
    activities.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
            <div class="activity-card-header">${activity.emoji}</div>
            <div class="activity-card-content">
                <h3>${activity.name}</h3>
                <p>${activity.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateSeason();
    
    // Update season every hour (optional, for demo purposes)
    // You can remove this if you want it to only check on page load
    setInterval(updateSeason, 3600000); // 1 hour
});

// Handle form submission
document.querySelector('.booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your booking! We will contact you shortly with confirmation details.');
    e.target.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
