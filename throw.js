    
        // Sample data
        const skills = [
            {
                id: 1,
                user: "Alex Johnson",
                avatar: "AJ",
                rating: 4.8,
                title: "JavaScript & React Development",
                description: "I can teach you modern web development with JavaScript and React. From basics to advanced concepts including hooks, state management, and deployment.",
                category: "programming",
                tags: ["JavaScript", "React", "Frontend", "Node.js"],
                wantedSkill: "Graphic Design"
            },
            {
                id: 2,
                user: "Sarah Chen",
                avatar: "SC",
                rating: 4.9,
                title: "UI/UX Design",
                description: "Professional designer with 5+ years experience. I'll teach you design principles, Figma, user research, and how to create beautiful interfaces.",
                category: "design",
                tags: ["UI/UX", "Figma", "Adobe XD", "Prototyping"],
                wantedSkill: "Spanish Language"
            },
            {
                id: 3,
                user: "Mike Rodriguez",
                avatar: "MR",
                rating: 4.7,
                title: "Guitar Playing",
                description: "Learn guitar from beginner to intermediate level. I'll teach you chords, strumming patterns, and popular songs.",
                category: "music",
                tags: ["Guitar", "Music Theory", "Acoustic", "Popular Songs"],
                wantedSkill: "Photography"
            },
            {
                id: 4,
                user: "Emma Wilson",
                avatar: "EW",
                rating: 4.6,
                title: "French Language",
                description: "Native French speaker offering conversational French lessons. Perfect for beginners and intermediate learners.",
                category: "language",
                tags: ["French", "Conversation", "Grammar", "Culture"],
                wantedSkill: "Cooking"
            },
            {
                id: 5,
                user: "David Kim",
                avatar: "DK",
                rating: 4.8,
                title: "Italian Cooking",
                description: "Learn authentic Italian recipes and cooking techniques. From pasta to risotto, I'll share family recipes and cooking secrets.",
                category: "cooking",
                tags: ["Italian", "Pasta", "Traditional", "Recipes"],
                wantedSkill: "Yoga"
            },
            {
                id: 6,
                user: "Lisa Thompson",
                avatar: "LT",
                rating: 4.9,
                title: "Yoga & Meditation",
                description: "Certified yoga instructor offering personalized yoga sessions and meditation techniques for stress relief and flexibility.",
                category: "fitness",
                tags: ["Yoga", "Meditation", "Flexibility", "Wellness"],
                wantedSkill: "Web Development"
            }
        ];

        // DOM elements
        const skillsGrid = document.getElementById('skillsGrid');
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            displaySkills(skills);
            setupEventListeners();
        });

        function setupEventListeners() {
            // Filter buttons
            filterButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const category = this.dataset.category;
                    if (category === 'all') {
                        displaySkills(skills);
                    } else {
                        const filtered = skills.filter(skill => skill.category === category);
                        displaySkills(filtered);
                    }
                });
            });

            // Search functionality
            searchInput.addEventListener('input', function() {
                const query = this.value.toLowerCase();
                const filtered = skills.filter(skill => 
                    skill.title.toLowerCase().includes(query) ||
                    skill.description.toLowerCase().includes(query) ||
                    skill.tags.some(tag => tag.toLowerCase().includes(query))
                );
                displaySkills(filtered);
            });

            // Form submissions
            document.getElementById('loginForm').addEventListener('submit', handleLogin);
            document.getElementById('signupForm').addEventListener('submit', handleSignup);
            document.getElementById('postSkillForm').addEventListener('submit', handlePostSkill);
        }

        function displaySkills(skillsToShow) {
            skillsGrid.innerHTML = '';
            skillsToShow.forEach(skill => {
                const skillCard = createSkillCard(skill);
                skillsGrid.appendChild(skillCard);
            });
        }

        function createSkillCard(skill) {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <div class="user-info">
                    <div class="user-avatar">${skill.avatar}</div>
                    <div class="user-details">
                        <h3>${skill.user}</h3>
                        <div class="user-rating">
                            <span class="stars">★★★★★</span>
                            <span>${skill.rating}</span>
                        </div>
                    </div>
                </div>
                <div class="skill-info">
                    <h4>${skill.title}</h4>
                    <p>${skill.description}</p>
                    <div class="skill-tags">
                        ${skill.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <p><strong>Wants to learn:</strong> ${skill.wantedSkill}</p>
                </div>
                <div class="skill-actions">
                    <button class="btn btn-primary btn-small" onclick="sendSwapRequest(${skill.id})">Request Swap</button>
                    <button class="btn btn-secondary btn-small" onclick="viewProfile(${skill.id})">View Profile</button>
                </div>
            `;
            return card;
        }

        function showModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Here you would typically send a request to your backend
            console.log('Login attempt:', { email, password });
            alert('Login functionality would connect to backend API');
            closeModal('loginModal');
        }

        function handleSignup(e) {
            e.preventDefault();
            const formData = {
                name: document.getElementById('signupName').value,
                email: document.getElementById('signupEmail').value,
                password: document.getElementById('signupPassword').value,
                location: document.getElementById('signupLocation').value
            };
            
            // Here you would typically send a request to your backend
            console.log('Signup attempt:', formData);
            alert('Signup functionality would connect to backend API');
            closeModal('signupModal');
        }

        function handlePostSkill(e) {
            e.preventDefault();
            const skillData = {
                title: document.getElementById('skillTitle').value,
                category: document.getElementById('skillCategory').value,
                description: document.getElementById('skillDescription').value,
                wantedSkill: document.getElementById('skillWanted').value
            };
            
            // Here you would typically send a request to your backend
            console.log('Post skill:', skillData);
            alert('Skill posting functionality would connect to backend API');
            closeModal('postSkillModal');
        }

        function sendSwapRequest(skillId) {
            // Here you would typically send a request to your backend
            console.log('Swap request for skill:', skillId);
            alert('Swap request functionality would connect to backend API');
        }

        function viewProfile(skillId) {
            // Here you would typically navigate to user profile
            console.log('View profile for skill:', skillId);
            alert('Profile viewing functionality would be implemented');
        }

        function searchSkills() {
            const query = searchInput.value.toLowerCase();
            const filtered = skills.filter(skill => 
                skill.title.toLowerCase().includes(query) ||
                skill.description.toLowerCase().includes(query) ||
                skill.tags.some(tag => tag.toLowerCase().includes(query))
            );
            displaySkills(filtered);
        }

        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
   