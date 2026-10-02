document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if(splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.style.display = 'none', 500);
        }
    }, 1000);

    // Gamification & Storage
    let masteredTags = JSON.parse(localStorage.getItem('rustMasteredTags')) || [];
    let userXP = parseInt(localStorage.getItem('rustUserXP')) || 0;
    let favorites = JSON.parse(localStorage.getItem('rustFavorites')) || [];

    const xpEl = document.getElementById('user-xp');
    const rankEl = document.getElementById('user-rank');
    const progressEl = document.getElementById('learning-progress');
    const completedCountEl = document.getElementById('completed-count');

    const ranks = [
        { xp: 0, name: 'Crab Hatchling' },
        { xp: 100, name: 'Rustacean' },
        { xp: 300, name: 'Borrow Checker Apprentice' },
        { xp: 600, name: 'Safe Memory Adept' },
        { xp: 1000, name: 'Systems Master' },
        { xp: 1500, name: 'Ferris Commander' }
    ];

    function updateGamification() {
        if(xpEl) xpEl.textContent = userXP;
        
        let currentRank = ranks[0].name;
        for(let r of ranks) {
            if(userXP >= r.xp) currentRank = r.name;
        }
        if(rankEl) rankEl.textContent = currentRank;

        const total = TAGS.length;
        const comp = masteredTags.length;
        if(completedCountEl) completedCountEl.textContent = comp;
        if(progressEl) progressEl.style.width = `${(comp / total) * 100}%`;

        localStorage.setItem('rustMasteredTags', JSON.stringify(masteredTags));
        localStorage.setItem('rustUserXP', userXP);
        localStorage.setItem('rustFavorites', JSON.stringify(favorites));
    }

    // 25+ Themes
    const themes = [
        '#f74c00', '#0078D7', '#28a745', '#dc3545', '#ffc107',
        '#17a2b8', '#6610f2', '#e83e8c', '#fd7e14', '#20c997',
        '#3f51b5', '#9c27b0', '#00bcd4', '#4caf50', '#ff9800',
        '#795548', '#607d8b', '#e91e63', '#9e9e9e', '#cddc39',
        '#8bc34a', '#ffeb3b', '#03a9f4', '#009688', '#f44336'
    ];
    
    const themeBtn = document.getElementById('theme-btn');
    const themeDropdown = document.getElementById('theme-dropdown');
    
    if(themeDropdown) {
        themes.forEach(color => {
            const opt = document.createElement('div');
            opt.className = 'theme-option';
            opt.style.backgroundColor = color;
            opt.onclick = () => {
                document.documentElement.style.setProperty('--accent-color', color);
                themeDropdown.classList.remove('show');
            };
            themeDropdown.appendChild(opt);
        });
    }

    if(themeBtn) {
        themeBtn.onclick = () => {
            themeDropdown.classList.toggle('show');
        };
    }

    const titles = [
        "Variables & Mutability", "Data Types", "Functions", "Control Flow", "Ownership",
        "Borrowing & References", "Slices", "Structs", "Enums", "Pattern Matching",
        "Option<T>", "Result<T,E>", "Error Handling", "Traits", "Generics",
        "Lifetimes", "Closures", "Iterators", "Smart Pointers", "Concurrency",
        "Message Passing", "Shared State", "Async/Await", "Modules & Crates", "Cargo & Dependencies",
        "Testing", "Macros", "Unsafe Rust", "Trait Objects", "impl Trait"
    ];

    const TAGS = titles.map((title, i) => {
        return {
            id: 'rust-' + (i + 1),
            title: title,
            badge: 'Core',
            emoji: '🦀',
            defaultCode: `fn main() {\n    println!("Learning ${title}!");\n}`,
            content: `
                <div class="topic-content">
                    <h2>${title}</h2>
                    <p>Welcome to the ultimate guide on <strong>${title}</strong> in Rust. This concept is foundational for mastering systems programming with safety and speed.</p>
                    
                    <div class="deep-dive">
                        <h3><i class="fas fa-search"></i> Deep Dive</h3>
                        <p>Rust's approach to ${title.toLowerCase()} eliminates entire classes of bugs at compile-time. By enforcing strict rules, the compiler ensures that your code is both efficient and safe.</p>
                    </div>
                    
                    <div class="under-hood">
                        <h3><i class="fas fa-cogs"></i> Under the Hood</h3>
                        <p>At the lower level, Rust compiles ${title.toLowerCase()} down to highly optimized machine code using LLVM. There is zero-cost abstraction meaning you pay no runtime penalty.</p>
                    </div>
                    
                    <div class="pro-tip">
                        <h3><i class="fas fa-lightbulb"></i> Pro Tip</h3>
                        <p>Always trust the compiler when working with ${title}. The error messages (often called the Rust compiler's "tough love") are designed to teach you the right patterns.</p>
                    </div>
                    
                    <div class="examples">
                        <h3><i class="fas fa-code"></i> Code Examples</h3>
                        <p>Use the playground on the right to experiment with ${title}. Try changing the logic and watch how the compiler reacts!</p>
                    </div>
                </div>
            `
        };
    });

    const topicList = document.getElementById('topic-list');
    const contentDisplay = document.getElementById('content-display');
    const editor = document.getElementById('code-editor');
    let currentTopic = null;

    function renderTopics(filter = '') {
        if(!topicList) return;
        topicList.innerHTML = '';
        TAGS.forEach(tag => {
            if(filter && !tag.title.toLowerCase().includes(filter.toLowerCase())) return;
            
            const li = document.createElement('li');
            li.className = \`topic-item \${masteredTags.includes(tag.id) ? 'completed' : ''}\`;
            li.innerHTML = \`
                <span>\${tag.emoji} \${tag.title}</span>
                \${favorites.includes(tag.id) ? '<i class="fas fa-heart" style="color:var(--accent-color)"></i>' : ''}
            \`;
            
            li.onclick = () => selectTopic(tag, li);
            topicList.appendChild(li);
        });
    }

    function selectTopic(tag, element) {
        document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
        if(element) element.classList.add('active');
        
        currentTopic = tag;
        if(contentDisplay) contentDisplay.innerHTML = tag.content;
        if(editor) editor.value = tag.defaultCode;
        
        // Mark as completed
        if(!masteredTags.includes(tag.id)) {
            masteredTags.push(tag.id);
            userXP += 20;
            updateGamification();
            renderTopics();
        }
    }

    const searchInput = document.getElementById('global-search');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderTopics(e.target.value);
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if(e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            if(searchInput) searchInput.focus();
        }
    });

    // Run code dummy implementation
    const runBtn = document.getElementById('run-code');
    const outputEl = document.getElementById('code-output');
    if(runBtn) {
        runBtn.onclick = () => {
            outputEl.textContent = "Compiling...\n\nRunning...\n\n" + (editor ? editor.value : '');
            userXP += 5;
            updateGamification();
        };
    }

    const copyBtn = document.getElementById('copy-code');
    if(copyBtn) {
        copyBtn.onclick = () => {
            if(editor) {
                navigator.clipboard.writeText(editor.value);
                const icon = copyBtn.querySelector('i');
                icon.className = 'fas fa-check';
                setTimeout(() => icon.className = 'far fa-copy', 2000);
            }
        };
    }

    const favBtn = document.getElementById('toggle-favorites');
    if(favBtn) {
        favBtn.onclick = () => {
            if(currentTopic) {
                if(favorites.includes(currentTopic.id)) {
                    favorites = favorites.filter(id => id !== currentTopic.id);
                } else {
                    favorites.push(currentTopic.id);
                }
                updateGamification();
                renderTopics();
            }
        };
    }

    // Init
    updateGamification();
    renderTopics();
});
