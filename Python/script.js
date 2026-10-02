// ===== SPLASH SCREEN =====
setTimeout(() => {
  const splash = document.getElementById('splash-screen');
  if (splash) {
    splash.classList.add('hide');
    setTimeout(() => splash.remove(), 800);
  }
}, 2000);

const PRESET_THEMES = [{"id": "dark", "name": "Midnight Dark", "bg": "#0a0a1a", "bg2": "#12122a", "bg3": "#0d0d22", "bg4": "#080818", "text": "#d0d0ee", "text2": "#b0b0d0", "text3": "#8888bb", "accent": "#6c63ff", "accent2": "#3ecfcf", "accent3": "#ffa36b", "border": "#6c63ff22", "card": "#12122a", "codeBg": "#080818", "sbBg": "#0f0f24", "hdrBg": "linear-gradient(135deg,#1a0a3e,#0f2027,#0a1628)"}, {"id": "light", "name": "Clean Light", "bg": "#f0f0f8", "bg2": "#ffffff", "bg3": "#f5f5ff", "bg4": "#eeeef8", "text": "#1a1a2e", "text2": "#333333", "text3": "#666666", "accent": "#5b54e6", "accent2": "#1aada0", "accent3": "#e8823a", "border": "#5b54e622", "card": "#ffffff", "codeBg": "#f0f0f8", "sbBg": "#ffffff", "hdrBg": "linear-gradient(135deg,#5b54e6,#1aada0)"}];

const TAGS = [
  {
    id: "py-1", title: "Variables & Data Types", badge: "BASICS", emoji: "📦", defaultCode: `x = 10
y = 3.14
name = 'Alice'`,
    content: `<h3>📌 Deep Dive: Variables & Data Types</h3>
  <p>Variables store data. Python is dynamically typed.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Types are checked at runtime.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nx = 10
y = 3.14
name = 'Alice'\n</code></pre>`
  },
  {
    id: "py-2", title: "Strings & String Methods", badge: "BASICS", emoji: "🔤", defaultCode: `s = 'hello'
print(s.upper())`,
    content: `<h3>📌 Deep Dive: Strings & String Methods</h3>
  <p>Strings represent text.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Strings are immutable sequences of Unicode points.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ns = 'hello'
print(s.upper())\n</code></pre>`
  },
  {
    id: "py-3", title: "Lists", badge: "DATA", emoji: "📋", defaultCode: `lst = [1, 2, 3]
lst.append(4)`,
    content: `<h3>📌 Deep Dive: Lists</h3>
  <p>Lists are ordered, mutable sequences.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Lists are dynamic arrays.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nlst = [1, 2, 3]
lst.append(4)\n</code></pre>`
  },
  {
    id: "py-4", title: "Tuples", badge: "DATA", emoji: "🔒", defaultCode: `t = (1, 2, 3)`,
    content: `<h3>📌 Deep Dive: Tuples</h3>
  <p>Tuples are ordered, immutable sequences.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Tuples provide performance and safety over lists.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nt = (1, 2, 3)\n</code></pre>`
  },
  {
    id: "py-5", title: "Dictionaries", badge: "DATA", emoji: "📖", defaultCode: `d = {'a': 1}`,
    content: `<h3>📌 Deep Dive: Dictionaries</h3>
  <p>Dictionaries store key-value pairs.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Implemented as highly optimized hash tables.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nd = {'a': 1}\n</code></pre>`
  },
  {
    id: "py-6", title: "Sets", badge: "DATA", emoji: "⭕", defaultCode: `s = {1, 2, 3}`,
    content: `<h3>📌 Deep Dive: Sets</h3>
  <p>Sets store unique elements.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Uses hash tables like dicts but only stores keys.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ns = {1, 2, 3}\n</code></pre>`
  },
  {
    id: "py-7", title: "Conditional Statements", badge: "CONTROL", emoji: "🔀", defaultCode: `if x > 0:
  print('pos')`,
    content: `<h3>📌 Deep Dive: Conditional Statements</h3>
  <p>If, elif, else for branching.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Evaluates truthiness of conditions.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nif x > 0:
  print('pos')\n</code></pre>`
  },
  {
    id: "py-8", title: "For Loops", badge: "CONTROL", emoji: "🔄", defaultCode: `for i in range(3):
  print(i)`,
    content: `<h3>📌 Deep Dive: For Loops</h3>
  <p>Iterate over iterables.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Calls iter() and next() behind the scenes.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nfor i in range(3):
  print(i)\n</code></pre>`
  },
  {
    id: "py-9", title: "While Loops", badge: "CONTROL", emoji: "🔁", defaultCode: `while x > 0:
  x -= 1`,
    content: `<h3>📌 Deep Dive: While Loops</h3>
  <p>Loop until false.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Evaluates condition before each iteration.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nwhile x > 0:
  x -= 1\n</code></pre>`
  },
  {
    id: "py-10", title: "Functions", badge: "CORE", emoji: "🛠️", defaultCode: `def add(a, b):
  return a+b`,
    content: `<h3>📌 Deep Dive: Functions</h3>
  <p>Reusable blocks of code.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Functions are first-class objects.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ndef add(a, b):
  return a+b\n</code></pre>`
  },
  {
    id: "py-11", title: "Lambda Functions", badge: "CORE", emoji: "λ", defaultCode: `f = lambda x: x*2`,
    content: `<h3>📌 Deep Dive: Lambda Functions</h3>
  <p>Anonymous inline functions.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Expression-only functions without statements.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nf = lambda x: x*2\n</code></pre>`
  },
  {
    id: "py-12", title: "List Comprehensions", badge: "PYTHONIC", emoji: "✨", defaultCode: `[x*2 for x in range(5)]`,
    content: `<h3>📌 Deep Dive: List Comprehensions</h3>
  <p>Concise way to build lists.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Often faster than equivalent for-loops.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\n[x*2 for x in range(5)]\n</code></pre>`
  },
  {
    id: "py-13", title: "Error Handling", badge: "CORE", emoji: "⚠️", defaultCode: `try:
  1/0
except ZeroDivisionError:
  pass`,
    content: `<h3>📌 Deep Dive: Error Handling</h3>
  <p>Try, except, finally.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Exceptions disrupt the normal flow of control.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ntry:
  1/0
except ZeroDivisionError:
  pass\n</code></pre>`
  },
  {
    id: "py-14", title: "File I/O", badge: "CORE", emoji: "📁", defaultCode: `with open('a.txt', 'w') as f:
  f.write('hi')`,
    content: `<h3>📌 Deep Dive: File I/O</h3>
  <p>Read and write files.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>File objects act as iterators of lines.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nwith open('a.txt', 'w') as f:
  f.write('hi')\n</code></pre>`
  },
  {
    id: "py-15", title: "Classes & Objects", badge: "OOP", emoji: "🏗️", defaultCode: `class A:
  def __init__(self):
    pass`,
    content: `<h3>📌 Deep Dive: Classes & Objects</h3>
  <p>Object-oriented programming.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Classes define type blueprints.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nclass A:
  def __init__(self):
    pass\n</code></pre>`
  },
  {
    id: "py-16", title: "Inheritance", badge: "OOP", emoji: "🧬", defaultCode: `class B(A):
  pass`,
    content: `<h3>📌 Deep Dive: Inheritance</h3>
  <p>Extend existing classes.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Python supports multiple inheritance with C3 MRO.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nclass B(A):
  pass\n</code></pre>`
  },
  {
    id: "py-17", title: "Decorators", badge: "ADVANCED", emoji: "🎀", defaultCode: `@timer
def slow(): pass`,
    content: `<h3>📌 Deep Dive: Decorators</h3>
  <p>Modify function behavior.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Higher-order functions applied with @ syntax.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\n@timer
def slow(): pass\n</code></pre>`
  },
  {
    id: "py-18", title: "Generators", badge: "ADVANCED", emoji: "⚡", defaultCode: `def gen():
  yield 1`,
    content: `<h3>📌 Deep Dive: Generators</h3>
  <p>Functions that yield.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>State is suspended between yields.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ndef gen():
  yield 1\n</code></pre>`
  },
  {
    id: "py-19", title: "Iterators", badge: "ADVANCED", emoji: "🔄", defaultCode: `it = iter([1])`,
    content: `<h3>📌 Deep Dive: Iterators</h3>
  <p>Objects with __next__.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>The protocol powering loops and comprehensions.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nit = iter([1])\n</code></pre>`
  },
  {
    id: "py-20", title: "Context Managers", badge: "ADVANCED", emoji: "📦", defaultCode: `with open('f') as f: pass`,
    content: `<h3>📌 Deep Dive: Context Managers</h3>
  <p>Manage resources with `with`.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Implemented via __enter__ and __exit__.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nwith open('f') as f: pass\n</code></pre>`
  },
  {
    id: "py-21", title: "Regular Expressions", badge: "CORE", emoji: "🔍", defaultCode: `import re
re.match(r'\d+', '123')`,
    content: `<h3>📌 Deep Dive: Regular Expressions</h3>
  <p>Pattern matching.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Engine uses an internal state machine (NFA/DFA).</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nimport re
re.match(r'\d+', '123')\n</code></pre>`
  },
  {
    id: "py-22", title: "Modules & Packages", badge: "ARCH", emoji: "📦", defaultCode: `import math`,
    content: `<h3>📌 Deep Dive: Modules & Packages</h3>
  <p>Organize code.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Modules are cached in sys.modules.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nimport math\n</code></pre>`
  },
  {
    id: "py-23", title: "Virtual Environments", badge: "TOOLS", emoji: "🛡️", defaultCode: `python -m venv env`,
    content: `<h3>📌 Deep Dive: Virtual Environments</h3>
  <p>Isolate dependencies.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Alters PATH and sys.prefix.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\npython -m venv env\n</code></pre>`
  },
  {
    id: "py-24", title: "pip & Packages", badge: "TOOLS", emoji: "📥", defaultCode: `pip install requests`,
    content: `<h3>📌 Deep Dive: pip & Packages</h3>
  <p>Install packages.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Downloads and unpacks from PyPI.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\npip install requests\n</code></pre>`
  },
  {
    id: "py-25", title: "async/await", badge: "ASYNC", emoji: "⏱️", defaultCode: `async def main(): pass`,
    content: `<h3>📌 Deep Dive: async/await</h3>
  <p>Concurrent IO.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Event loops schedule coroutines.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nasync def main(): pass\n</code></pre>`
  },
  {
    id: "py-26", title: "Type Hints", badge: "MODERN", emoji: "🏷️", defaultCode: `def add(a: int) -> int: return a`,
    content: `<h3>📌 Deep Dive: Type Hints</h3>
  <p>Static typing info.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Ignored at runtime, used by mypy.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ndef add(a: int) -> int: return a\n</code></pre>`
  },
  {
    id: "py-27", title: "dataclasses", badge: "MODERN", emoji: "📊", defaultCode: `@dataclass
class Point: x: int`,
    content: `<h3>📌 Deep Dive: dataclasses</h3>
  <p>Boilerplate-free classes.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Auto-generates __init__, __repr__, etc.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\n@dataclass
class Point: x: int\n</code></pre>`
  },
  {
    id: "py-28", title: "f-strings", badge: "MODERN", emoji: "📝", defaultCode: `f'{x=}'`,
    content: `<h3>📌 Deep Dive: f-strings</h3>
  <p>Interpolate strings.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Evaluated at runtime efficiently.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nf'{x=}'\n</code></pre>`
  },
  {
    id: "py-29", title: "Walrus Operator", badge: "MODERN", emoji: "🦭", defaultCode: `if (n := len(s)) > 0: pass`,
    content: `<h3>📌 Deep Dive: Walrus Operator</h3>
  <p>Assignment expressions.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Introduced in Python 3.8.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nif (n := len(s)) > 0: pass\n</code></pre>`
  },
  {
    id: "py-30", title: "Pattern Matching", badge: "MODERN", emoji: "🧩", defaultCode: `match x:
  case 1: pass`,
    content: `<h3>📌 Deep Dive: Pattern Matching</h3>
  <p>Structural matching.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Introduced in Python 3.10, not just a switch statement.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nmatch x:
  case 1: pass\n</code></pre>`
  },
  {
    id: "py-31", title: "Closures", badge: "ADVANCED", emoji: "🔒", defaultCode: `def make_mul(n):
  return lambda x: x * n`,
    content: `<h3>📌 Deep Dive: Closures</h3>
  <p>Functions that remember their enclosing scope.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Variables from the outer scope are captured by reference.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ndef make_mul(n):
  return lambda x: x * n\n</code></pre>`
  },
  {
    id: "py-32", title: "map/filter/reduce", badge: "PYTHONIC", emoji: "🗺️", defaultCode: `list(map(lambda x: x*2, [1,2]))`,
    content: `<h3>📌 Deep Dive: map/filter/reduce</h3>
  <p>Functional programming tools.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Built-in iterators for processing collections.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nlist(map(lambda x: x*2, [1,2]))\n</code></pre>`
  },
  {
    id: "py-33", title: "*args/**kwargs", badge: "CORE", emoji: "✨", defaultCode: `def f(*args, **kwargs): pass`,
    content: `<h3>📌 Deep Dive: *args/**kwargs</h3>
  <p>Variable length arguments.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Packed into tuple and dictionary respectively.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ndef f(*args, **kwargs): pass\n</code></pre>`
  },
  {
    id: "py-34", title: "Property decorators", badge: "OOP", emoji: "🏠", defaultCode: `@property
def x(self): return self._x`,
    content: `<h3>📌 Deep Dive: Property decorators</h3>
  <p>Managed attributes.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Provides getters and setters transparently.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\n@property
def x(self): return self._x\n</code></pre>`
  },
  {
    id: "py-35", title: "Abstract classes (ABC)", badge: "OOP", emoji: "📐", defaultCode: `class Shape(ABC):
  @abstractmethod
  def area(self): pass`,
    content: `<h3>📌 Deep Dive: Abstract classes (ABC)</h3>
  <p>Interfaces in Python.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Cannot be instantiated directly.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nclass Shape(ABC):
  @abstractmethod
  def area(self): pass\n</code></pre>`
  },
  {
    id: "py-36", title: "Metaclasses", badge: "ADVANCED", emoji: "🧠", defaultCode: `class Meta(type): pass`,
    content: `<h3>📌 Deep Dive: Metaclasses</h3>
  <p>Classes of classes.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Controls class creation logic.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nclass Meta(type): pass\n</code></pre>`
  },
  {
    id: "py-37", title: "Descriptors", badge: "ADVANCED", emoji: "📝", defaultCode: `def __get__(self, obj, type): pass`,
    content: `<h3>📌 Deep Dive: Descriptors</h3>
  <p>Managed class attributes.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>The mechanism behind properties and methods.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\ndef __get__(self, obj, type): pass\n</code></pre>`
  },
  {
    id: "py-38", title: "__slots__", badge: "ADVANCED", emoji: "🗄️", defaultCode: `class A:
  __slots__ = ['x']`,
    content: `<h3>📌 Deep Dive: __slots__</h3>
  <p>Memory optimization.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Prevents creation of instance dicts.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nclass A:
  __slots__ = ['x']\n</code></pre>`
  },
  {
    id: "py-39", title: "Collections module", badge: "LIBRARY", emoji: "📦", defaultCode: `from collections import Counter`,
    content: `<h3>📌 Deep Dive: Collections module</h3>
  <p>Specialized containers.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>Includes namedtuple, deque, Counter, etc.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nfrom collections import Counter\n</code></pre>`
  },
  {
    id: "py-40", title: "itertools module", badge: "LIBRARY", emoji: "🔄", defaultCode: `import itertools
itertools.cycle([1])`,
    content: `<h3>📌 Deep Dive: itertools module</h3>
  <p>Iterator building blocks.</p>
  <h4>⚙️ Under the Hood</h4>
  <p>High-performance iterators.</p>
  <div class="cb"><div class="cb-h"><span>💡 Pro Tip</span></div><div class="cb-b"><p>Follow PEP 8 and Pythonic idioms for best results.</p></div></div>
  <h4>💻 Code Examples</h4>
  <pre><code class="language-python">\nimport itertools
itertools.cycle([1])\n</code></pre>`
  }
];

function getRank(count) {
  if (count < 5) return { title: 'Python Novice', color: '#888' };
  if (count < 10) return { title: 'Script Apprentice', color: '#4ade80' };
  if (count < 15) return { title: 'Module Builder', color: '#3b82f6' };
  if (count < 20) return { title: 'OOP Expert', color: '#a855f7' };
  if (count < 25) return { title: 'Async Master', color: '#f59e0b' };
  return { title: 'Python Grandmaster', color: '#ef4444' };
}

let masteredTags = JSON.parse(localStorage.getItem('pythonMasteredTags')) || [];
let userXP = parseInt(localStorage.getItem('pythonUserXP')) || 0;
let favorites = JSON.parse(localStorage.getItem('pythonFavorites')) || [];

function init() {
    renderSidebar();
    updateStats();
    
    document.getElementById('search')?.addEventListener('input', (e) => {
        renderSidebar(e.target.value.toLowerCase());
    });
}

function renderSidebar(filter = '') {
    const list = document.getElementById('concept-list');
    if (!list) return;
    list.innerHTML = '';
    TAGS.filter(t => t.title.toLowerCase().includes(filter)).forEach(tag => {
        const li = document.createElement('li');
        li.innerHTML = `${tag.emoji} ${tag.title}`;
        li.onclick = () => loadConcept(tag);
        list.appendChild(li);
    });
}

function loadConcept(tag) {
    const ca = document.getElementById('content-area');
    if (ca) ca.innerHTML = tag.content;
    if (!masteredTags.includes(tag.id)) {
        masteredTags.push(tag.id);
        userXP += 100;
        localStorage.setItem('pythonMasteredTags', JSON.stringify(masteredTags));
        localStorage.setItem('pythonUserXP', userXP.toString());
        updateStats();
    }
}

function updateStats() {
    const mc = document.getElementById('mastered-count');
    if (mc) mc.innerText = `Mastered: ${masteredTags.length}/${TAGS.length}`;
    const pr = document.getElementById('progress');
    if (pr) pr.style.width = `${(masteredTags.length / TAGS.length) * 100}%`;
    const r = document.getElementById('rank');
    if (r) {
        const rankInfo = getRank(masteredTags.length);
        r.innerText = `XP: ${userXP} | Rank: ${rankInfo.title}`;
        r.style.color = rankInfo.color;
    }
}

window.onload = init;
