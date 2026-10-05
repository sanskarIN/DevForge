// CSharp/script.js

setTimeout(() => {
    document.getElementById('splash').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
    }, 500);
}, 1000);

const TAGS = [
    { id: 1, title: 'Variables & Data Types', badge: 'Beginner', emoji: '📦', defaultCode: 'int age = 25;\nstring name = "C#";', content: '<h3>Variables</h3><p>C# is strongly typed.</p>' },
    { id: 2, title: 'Strings & Interpolation', badge: 'Beginner', emoji: '🔤', defaultCode: 'string msg = $"Hello {name}";', content: '<h3>Strings</h3><p>Use $ for interpolation.</p>' },
    { id: 3, title: 'Arrays', badge: 'Beginner', emoji: '📚', defaultCode: 'int[] nums = {1, 2, 3};', content: '<h3>Arrays</h3><p>Fixed size collections.</p>' },
    { id: 4, title: 'Control Flow (if/switch)', badge: 'Beginner', emoji: '🔀', defaultCode: 'if(true){}', content: '<h3>Control Flow</h3><p>Standard if and switch.</p>' },
    { id: 5, title: 'Loops (for, foreach, while)', badge: 'Beginner', emoji: '🔁', defaultCode: 'foreach(var n in nums){}', content: '<h3>Loops</h3><p>Iterate collections.</p>' },
    { id: 6, title: 'Methods', badge: 'Intermediate', emoji: '🛠️', defaultCode: 'void Print(){}', content: '<h3>Methods</h3><p>Functions in classes.</p>' },
    { id: 7, title: 'Classes & Objects', badge: 'Intermediate', emoji: '🏗️', defaultCode: 'class Person {}', content: '<h3>Classes</h3><p>Blueprints for objects.</p>' },
    { id: 8, title: 'Constructors', badge: 'Intermediate', emoji: '👷', defaultCode: 'public Person(){}', content: '<h3>Constructors</h3><p>Initialize objects.</p>' },
    { id: 9, title: 'Properties (get/set)', badge: 'Intermediate', emoji: '🔐', defaultCode: 'public int Age {get; set;}', content: '<h3>Properties</h3><p>Encapsulate fields.</p>' },
    { id: 10, title: 'Inheritance', badge: 'Intermediate', emoji: '🧬', defaultCode: 'class Dog : Animal {}', content: '<h3>Inheritance</h3><p>Reuse code.</p>' },
    { id: 11, title: 'Polymorphism', badge: 'Intermediate', emoji: '🎭', defaultCode: 'virtual / override', content: '<h3>Polymorphism</h3><p>Many forms.</p>' },
    { id: 12, title: 'Interfaces', badge: 'Intermediate', emoji: '🔌', defaultCode: 'interface ILogger {}', content: '<h3>Interfaces</h3><p>Contracts for classes.</p>' },
    { id: 13, title: 'Abstract Classes', badge: 'Intermediate', emoji: '👻', defaultCode: 'abstract class Base {}', content: '<h3>Abstract</h3><p>Cannot be instantiated.</p>' },
    { id: 14, title: 'Enums', badge: 'Beginner', emoji: '📋', defaultCode: 'enum Days { Mon, Tue }', content: '<h3>Enums</h3><p>Named constants.</p>' },
    { id: 15, title: 'Structs', badge: 'Intermediate', emoji: '🧱', defaultCode: 'struct Point {}', content: '<h3>Structs</h3><p>Value types.</p>' },
    { id: 16, title: 'Generics', badge: 'Advanced', emoji: '🎛️', defaultCode: 'class Box<T> {}', content: '<h3>Generics</h3><p>Type parameters.</p>' },
    { id: 17, title: 'Collections (List, Dictionary...)', badge: 'Intermediate', emoji: '🗃️', defaultCode: 'List<int> list = new();', content: '<h3>Collections</h3><p>Dynamic sizes.</p>' },
    { id: 18, title: 'LINQ Basics', badge: 'Advanced', emoji: '🔎', defaultCode: 'var q = nums.Where(n => n > 0);', content: '<h3>LINQ</h3><p>Query data.</p>' },
    { id: 19, title: 'LINQ Advanced', badge: 'Expert', emoji: '🔬', defaultCode: 'nums.GroupBy()', content: '<h3>Advanced LINQ</h3><p>Complex queries.</p>' },
    { id: 20, title: 'Delegates & Events', badge: 'Advanced', emoji: '📡', defaultCode: 'public event Action OnClick;', content: '<h3>Events</h3><p>Publish/Subscribe.</p>' },
    { id: 21, title: 'Lambda Expressions', badge: 'Advanced', emoji: 'λ', defaultCode: 'x => x * 2', content: '<h3>Lambdas</h3><p>Anonymous functions.</p>' },
    { id: 22, title: 'Exception Handling', badge: 'Intermediate', emoji: '🛡️', defaultCode: 'try {} catch {}', content: '<h3>Exceptions</h3><p>Handle errors gracefully.</p>' },
    { id: 23, title: 'Nullable Types', badge: 'Intermediate', emoji: '❓', defaultCode: 'int? x = null;', content: '<h3>Nullables</h3><p>Value types can be null.</p>' },
    { id: 24, title: 'Pattern Matching', badge: 'Advanced', emoji: '🧩', defaultCode: 'if(obj is string s)', content: '<h3>Pattern Matching</h3><p>Check types and extract.</p>' },
    { id: 25, title: 'Records', badge: 'Advanced', emoji: '📝', defaultCode: 'record Person(string Name);', content: '<h3>Records</h3><p>Immutable data models.</p>' },
    { id: 26, title: 'async/await', badge: 'Advanced', emoji: '⏳', defaultCode: 'await Task.Delay(100);', content: '<h3>Async</h3><p>Non-blocking operations.</p>' },
    { id: 27, title: 'Task Parallel Library', badge: 'Expert', emoji: '🛤️', defaultCode: 'Parallel.ForEach()', content: '<h3>TPL</h3><p>Parallel processing.</p>' },
    { id: 28, title: 'File I/O', badge: 'Intermediate', emoji: '📁', defaultCode: 'File.WriteAllText()', content: '<h3>Files</h3><p>Read and write files.</p>' },
    { id: 29, title: 'JSON Serialization', badge: 'Intermediate', emoji: '💱', defaultCode: 'JsonSerializer.Serialize()', content: '<h3>JSON</h3><p>Convert to/from JSON.</p>' },
    { id: 30, title: 'Dependency Injection', badge: 'Advanced', emoji: '💉', defaultCode: 'services.AddScoped()', content: '<h3>DI</h3><p>Inversion of control.</p>' },
    { id: 31, title: 'ASP.NET Core Basics', badge: 'Advanced', emoji: '🌐', defaultCode: 'var builder = WebApplication.CreateBuilder();', content: '<h3>ASP.NET</h3><p>Web framework.</p>' },
    { id: 32, title: 'Controllers & Routing', badge: 'Advanced', emoji: '🛣️', defaultCode: '[Route("api/[controller]")]', content: '<h3>Controllers</h3><p>Handle web requests.</p>' },
    { id: 33, title: 'Middleware', badge: 'Advanced', emoji: '🥪', defaultCode: 'app.Use()', content: '<h3>Middleware</h3><p>Request pipeline.</p>' },
    { id: 34, title: 'Entity Framework Core', badge: 'Expert', emoji: '🗄️', defaultCode: 'DbContext', content: '<h3>EF Core</h3><p>ORM for .NET.</p>' },
    { id: 35, title: 'Model Binding & Validation', badge: 'Advanced', emoji: '✅', defaultCode: '[Required]', content: '<h3>Validation</h3><p>Check input data.</p>' },
    { id: 36, title: 'Authentication (Identity)', badge: 'Expert', emoji: '🔐', defaultCode: 'app.UseAuthentication()', content: '<h3>Identity</h3><p>Secure applications.</p>' },
    { id: 37, title: 'Web API (REST)', badge: 'Advanced', emoji: '🔗', defaultCode: 'ControllerBase', content: '<h3>Web API</h3><p>Build RESTful services.</p>' },
    { id: 38, title: 'SignalR (Real-time)', badge: 'Expert', emoji: '⚡', defaultCode: 'Hub', content: '<h3>SignalR</h3><p>Real-time web functionality.</p>' },
    { id: 39, title: 'Unit Testing (xUnit/NUnit)', badge: 'Advanced', emoji: '🧪', defaultCode: '[Fact]', content: '<h3>Testing</h3><p>Ensure code quality.</p>' },
    { id: 40, title: 'Design Patterns in C#', badge: 'Master', emoji: '📐', defaultCode: 'Singleton', content: '<h3>Patterns</h3><p>Common solutions.</p>' }
];

const list = document.getElementById('concept-list');
TAGS.forEach(tag => {
    const div = document.createElement('div');
    div.className = 'concept-item';
    div.innerHTML = `${tag.emoji} ${tag.title} <span style="font-size:0.8em; opacity:0.7">(${tag.badge})</span>`;
    div.onclick = () => {
        document.getElementById('main-content').innerHTML = tag.content;
        document.getElementById('code-editor').value = tag.defaultCode;
    };
    list.appendChild(div);
});

// Gamification setup
let xp = localStorage.getItem('csharpUserXP') || 0;
let mastered = JSON.parse(localStorage.getItem('csharpMasteredTags') || '[]');
let favorites = JSON.parse(localStorage.getItem('csharpFavorites') || '[]');
// Ranks: C# Novice -> Syntax Learner -> OOP Builder -> LINQ Expert -> .NET Architect -> C# Grandmaster
