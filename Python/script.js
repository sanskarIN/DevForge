const TAGS = [
    { id: 1, title: 'Variables & Data Types', badge: 'Basics', emoji: '📦', content: '<h3>Variables</h3><p>Variables store data...</p>' },
    { id: 2, title: 'Strings & String Methods', badge: 'Basics', emoji: '🔤', content: '<h3>Strings</h3><p>Text data...</p>' },
    { id: 3, title: 'Lists', badge: 'Data Structures', emoji: '📋', content: '<h3>Lists</h3><p>Ordered mutable collections.</p>' },
    { id: 4, title: 'Tuples', badge: 'Data Structures', emoji: '🔒', content: '<h3>Tuples</h3><p>Ordered immutable collections.</p>' },
    { id: 5, title: 'Dictionaries', badge: 'Data Structures', emoji: '📖', content: '<h3>Dictionaries</h3><p>Key-value pairs.</p>' },
    { id: 6, title: 'Sets', badge: 'Data Structures', emoji: '⭕', content: '<h3>Sets</h3><p>Unordered unique elements.</p>' },
    { id: 7, title: 'Conditional Statements', badge: 'Control Flow', emoji: '🔀', content: '<h3>If/Elif/Else</h3><p>Branching logic.</p>' },
    { id: 8, title: 'For Loops', badge: 'Control Flow', emoji: '🔄', content: '<h3>For Loops</h3><p>Iterate over sequences.</p>' },
    { id: 9, title: 'While Loops', badge: 'Control Flow', emoji: '🔁', content: '<h3>While Loops</h3><p>Loop until condition is false.</p>' },
    { id: 10, title: 'Functions', badge: 'Core', emoji: '🛠️', content: '<h3>Functions</h3><p>Reusable blocks of code.</p>' },
    { id: 11, title: 'Lambda Functions', badge: 'Core', emoji: 'λ', content: '<h3>Lambda</h3><p>Anonymous inline functions.</p>' },
    { id: 12, title: 'List Comprehensions', badge: 'Pythonic', emoji: '✨', content: '<h3>Comprehensions</h3><p>Concise list creation.</p>' },
    { id: 13, title: 'Error Handling', badge: 'Core', emoji: '⚠️', content: '<h3>Try/Except</h3><p>Catch and handle exceptions.</p>' },
    { id: 14, title: 'File I/O', badge: 'Core', emoji: '📁', content: '<h3>Files</h3><p>Reading and writing files.</p>' },
    { id: 15, title: 'Classes & Objects', badge: 'OOP', emoji: '🏗️', content: '<h3>Classes</h3><p>Object-oriented programming.</p>' },
    { id: 16, title: 'Inheritance', badge: 'OOP', emoji: '🧬', content: '<h3>Inheritance</h3><p>Extending classes.</p>' },
    { id: 17, title: 'Decorators', badge: 'Advanced', emoji: '🎀', content: '<h3>Decorators</h3><p>Modify function behavior.</p>' },
    { id: 18, title: 'Generators', badge: 'Advanced', emoji: '⚡', content: '<h3>Generators</h3><p>Yielding values lazily.</p>' },
    { id: 19, title: 'Iterators', badge: 'Advanced', emoji: '🔄', content: '<h3>Iterators</h3><p>Objects implementing __iter__ and __next__.</p>' },
    { id: 20, title: 'Context Managers', badge: 'Advanced', emoji: '📦', content: '<h3>With Statement</h3><p>Resource management.</p>' },
    { id: 21, title: 'Regular Expressions', badge: 'Core', emoji: '🔍', content: '<h3>Regex</h3><p>Pattern matching in strings.</p>' },
    { id: 22, title: 'Modules & Packages', badge: 'Architecture', emoji: '📦', content: '<h3>Modules</h3><p>Organizing code.</p>' },
    { id: 23, title: 'Virtual Environments', badge: 'Tools', emoji: '🛡️', content: '<h3>Venv</h3><p>Isolated environments.</p>' },
    { id: 24, title: 'pip & Package Management', badge: 'Tools', emoji: '📥', content: '<h3>Pip</h3><p>Installing packages.</p>' },
    { id: 25, title: 'async/await', badge: 'Async', emoji: '⏱️', content: '<h3>Asyncio</h3><p>Asynchronous programming.</p>' },
    { id: 26, title: 'Type Hints', badge: 'Modern', emoji: '🏷️', content: '<h3>Typing</h3><p>Static type annotations.</p>' },
    { id: 27, title: 'dataclasses', badge: 'Modern', emoji: '📊', content: '<h3>Dataclasses</h3><p>Boilerplate-free classes.</p>' },
    { id: 28, title: 'f-strings', badge: 'Modern', emoji: '📝', content: '<h3>Format Strings</h3><p>String interpolation.</p>' },
    { id: 29, title: 'Walrus Operator', badge: 'Modern', emoji: '🦭', content: '<h3>:= Operator</h3><p>Assignment expressions.</p>' },
    { id: 30, title: 'Pattern Matching', badge: 'Modern', emoji: '🧩', content: '<h3>Match/Case</h3><p>Structural pattern matching.</p>' }
];

const PRESET_THEMES = ['dark', 'light', 'dracula', 'monokai']; // Simplified for brevity

let masteredTags = JSON.parse(localStorage.getItem('pythonMasteredTags')) || [];
let userXP = parseInt(localStorage.getItem('pythonUserXP')) || 0;
let favorites = JSON.parse(localStorage.getItem('pythonFavorites')) || [];

function init() {
    renderSidebar();
    updateStats();
    
    document.getElementById('search').addEventListener('input', (e) => {
        renderSidebar(e.target.value.toLowerCase());
    });
}

function renderSidebar(filter = '') {
    const list = document.getElementById('concept-list');
    list.innerHTML = '';
    TAGS.filter(t => t.title.toLowerCase().includes(filter)).forEach(tag => {
        const li = document.createElement('li');
        li.innerHTML = `${tag.emoji} ${tag.title}`;
        li.onclick = () => loadConcept(tag);
        list.appendChild(li);
    });
}

function loadConcept(tag) {
    document.getElementById('content-area').innerHTML = tag.content;
    if (!masteredTags.includes(tag.id)) {
        masteredTags.push(tag.id);
        userXP += 100;
        localStorage.setItem('pythonMasteredTags', JSON.stringify(masteredTags));
        localStorage.setItem('pythonUserXP', userXP);
        updateStats();
    }
}

function updateStats() {
    document.getElementById('mastered-count').innerText = `Mastered: ${masteredTags.length}/${TAGS.length}`;
    document.getElementById('progress').style.width = `${(masteredTags.length / TAGS.length) * 100}%`;
    document.getElementById('rank').innerText = `XP: ${userXP}`;
}

window.onload = init;
