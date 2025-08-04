// Memory data with heartbreak-themed content
        const memories = [
           // ...existing code...
{
    image: 'pic1.jpeg',
    title: 'Last Dance Together',
    date: 'Summer 2023'
},
{
    image: 'pic2.jpeg',
    title: 'Silent Coffee Mornings',
    date: 'Every Sunday'
},
{
    image: 'pic3.jpeg',
    title: 'Empty Afternoons',
    date: 'Home Sweet Home'
},
{
    image: 'pic4.jpeg',
    title: 'Sunset Walks Alone',
    date: 'Golden Hour'
},
{
    image: 'pic5.jpeg',
    title: 'Lonely Road Trips',
    date: 'Spring Break'
},
{
    image: 'pic6.jpeg',
    title: 'Forgotten Birthday Wishes',
    date: 'December 15th'
},
{
    image: 'pic7.jpeg',
    title: 'City Lights, No Us',
    date: 'New Year\'s Eve'
},
{
    image: 'pic8.jpeg',
    title: 'Beach Days Without You',
    date: 'Last Summer'
}
//
        ];

        // Create memory cards
        function createMemoryCards() {
            const track = document.getElementById('cardsTrack');
            
            // Create multiple sets for seamless loop
            for (let set = 0; set < 3; set++) {
                memories.forEach((memory, index) => {
                    const card = document.createElement('div');
                    card.className = 'memory-card';
                    card.innerHTML = `
                        <img src="${memory.image}" alt="${memory.title}" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">${memory.title}</h3>
                            <p class="card-date">${memory.date}</p>
                        </div>
                    `;
                    track.appendChild(card);
                });
            }
        }

        // Update center card highlighting
        function updateCenterCard() {
            const cards = document.querySelectorAll('.memory-card');
            const containerCenter = window.innerWidth / 2;
            
            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(cardCenter - containerCenter);
                
                if (distance < 200) {
                    card.classList.add('center');
                } else {
                    card.classList.remove('center');
                }
            });
        }

        // Create floating hearts
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💔';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            
            document.getElementById('heartsContainer').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 20000);
        }

        // Initialize the page
        function init() {
            createMemoryCards();
            
            // Start heart animation
            setInterval(createFloatingHeart, 3000);
            
            // Update center card periodically
            setInterval(updateCenterCard, 100);
            
            // Handle audio autoplay (some browsers block it)
            const audio = document.getElementById('bgAudio');
            const playAudio = () => {
                audio.play().catch(e => {
                    console.log('Audio autoplay blocked by browser');
                    // Create a subtle click handler to start audio
                    document.addEventListener('click', () => {
                        audio.play();
                    }, { once: true });
                });
            };
            
            setTimeout(playAudio, 500);
        }

        // Start everything when page loads
        window.addEventListener('load', init);
        
        // Handle window resize
        window.addEventListener('resize', updateCenterCard);

        // Prevent context menu and selection for immersive experience
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('selectstart', e => e.preventDefault());