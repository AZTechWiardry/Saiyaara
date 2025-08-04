// Create floating hearts
        function createFloatingHearts() {
            const container = document.getElementById('heartsContainer');
            const hearts = ['💔', '🖤', '💙', '🤍', '💫'];
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = Math.random() > 0.3 ? 'heart' : 'heart broken-heart';
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
                heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
                container.appendChild(heart);

                // Remove heart after animation
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 20000);
            }, 3000);
        }

        // Create twinkling stars
        function createStars() {
            const container = document.getElementById('starsContainer');
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                container.appendChild(star);
            }
        }

        // Audio control
        let audioPlaying = false;
        const audio = document.getElementById('backgroundAudio');
        const audioBtn = document.getElementById('audioBtn');

        function toggleAudio() {
            if (audioPlaying) {
                audio.pause();
                audioBtn.innerHTML = '🔇';
                audioPlaying = false;
            } else {
                audio.play().catch(e => {
                    console.log('Audio autoplay prevented:', e);
                    // Fallback: show message to user
                    audioBtn.innerHTML = '🔊';
                });
                audioBtn.innerHTML = '🔊';
                audioPlaying = true;
            }
        }

        // Try to autoplay audio (may be blocked by browser)
        window.addEventListener('load', () => {
            audio.volume = 0.3;
            audio.play().then(() => {
                audioPlaying = true;
                audioBtn.innerHTML = '🔊';
            }).catch(e => {
                console.log('Audio autoplay prevented. User interaction required.');
                audioBtn.innerHTML = '🔇';
            });
        });

        // Continue to next page function
        function continueToNextPage() {
            // Add fade out animation before redirect
            document.body.style.transition = 'opacity 1s ease-out';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                // Here you would navigate to your next page
               
                window.location.href = 'main.html';
            }, 1000);
        }

        // Initialize animations
        createFloatingHearts();
        createStars();

        // Add click event to enable audio on user interaction
        document.addEventListener('click', () => {
            if (!audioPlaying) {
                audio.play().then(() => {
                    audioPlaying = true;
                    audioBtn.innerHTML = '🔊';
                }).catch(e => {
                    console.log('Audio play failed:', e);
                });
            }
        }, { once: true });