// CSS Mastery Engine - script.js

let cssMasteredTags = JSON.parse(localStorage.getItem('cssMasteredTags')) || [];
let cssUserXP = parseInt(localStorage.getItem('cssUserXP')) || 0;
let favorites = JSON.parse(localStorage.getItem('cssFavorites')) || [];
let activeTheme = localStorage.getItem('activeTheme') || 'dark';

// CSS Gamification Ranks
function getRank(count) {
    if (count < 5) return { title: "CSS Novice", color: "#888" };
    if (count < 10) return { title: "Style Apprentice", color: "#4ade80" };
    if (count < 15) return { title: "Layout Intermediate", color: "#3b82f6" };
    if (count < 20) return { title: "Flexbox Expert", color: "#a855f7" };
    if (count < 25) return { title: "Animation Wizard", color: "#f59e0b" };
    return { title: "CSS Grandmaster", color: "#ef4444" };
}

// Top 20 CSS Properties Database
const TAGS = [
    {
        id: "prop-color",
        title: "color",
        badge: "TYPOGRAPHY",
        emoji: "🎨",
        demoHTML: `<h1 class="demo-text">Hello, CSS!</h1>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>color</code> property defines the foreground color of an element's text content, including its text decorations (like underlines) and the current color value (which cascades down to children). It is one of the most fundamental styling properties in CSS.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the color styling */
.color-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-background",
        title: "background",
        badge: "BOX MODEL",
        emoji: "🖼️",
        demoHTML: `<div class="demo-box">Background Demo</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>background</code> shorthand property is a powerhouse that sets all background style properties at once. Instead of writing multiple lines for colors, images, and repeating rules, you can compress them into a single declaration.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the background styling */
.background-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-margin",
        title: "margin",
        badge: "BOX MODEL",
        emoji: "↔️",
        demoHTML: `<div class="demo-box box-a">Box A</div><div class="demo-box box-b">Box B</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>margin</code> property creates invisible space *around* elements, outside of any defined borders. It is primarily used to push elements away from each other and position them within the layout.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the margin styling */
.margin-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-padding",
        title: "padding",
        badge: "BOX MODEL",
        emoji: "🗜️",
        demoHTML: `<div class="demo-box padding-box">Padded Content</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>padding</code> property generates space *inside* an element's container, pushing the content away from the element's inner borders. The background color or image of an element will always extend beneath its padding.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the padding styling */
.padding-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-border",
        title: "border",
        badge: "BOX MODEL",
        emoji: "🔳",
        demoHTML: `<div class="demo-box border-box">Border Box</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>border</code> shorthand property wraps the content and padding of an element with a line. It lets you simultaneously define the thickness (width), the design (style), and the color of the border.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the border styling */
.border-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-border-radius",
        title: "border-radius",
        badge: "DESIGN",
        emoji: "⏺️",
        demoHTML: `<div class="demo-box radius-box">Rounded</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>border-radius</code> property rounds the corners of an element's outer border edge. You can use it to create rounded rectangles, perfect circles, or even complex organic shapes.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the border-radius styling */
.border-radius-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-display",
        title: "display",
        badge: "LAYOUT",
        emoji: "🧱",
        demoHTML: `<span class="demo-inline">Inline 1</span><span class="demo-inline">Inline 2</span>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>display</code> property is the absolute foundation of CSS layout. It dictates whether an element acts as a block (taking up the full width), inline (flowing with text), or establishes a special layout container (like Flexbox or Grid) for its children.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the display styling */
.display-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-flex",
        title: "flex (Flexbox)",
        badge: "LAYOUT",
        emoji: "🥞",
        demoHTML: `<div class="flex-container"><div class="fb">1</div><div class="fb">2</div><div class="fb">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>Flexbox (Flexible Box Module) is a one-dimensional layout system designed for distributing space and aligning items within a container, either in a single row or a single column.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the flex styling */
.flex-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid",
        title: "grid",
        badge: "LAYOUT",
        emoji: "🧮",
        demoHTML: `<div class="grid-container"><div class="gb">1</div><div class="gb">2</div><div class="gb">3</div><div class="gb">4</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>CSS Grid Layout is the most powerful layout system available in CSS. Unlike Flexbox (which is one-dimensional), Grid is a two-dimensional system, meaning it can handle both rows and columns simultaneously.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid styling */
.grid-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-position",
        title: "position",
        badge: "LAYOUT",
        emoji: "📍",
        demoHTML: `<div class="relative-parent"><div class="absolute-child">Absolute</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>position</code> property removes an element from the normal document flow and allows you to place it exactly where you want using <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> coordinates.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the position styling */
.position-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-z-index",
        title: "z-index",
        badge: "LAYOUT",
        emoji: "📚",
        demoHTML: `<div class="z-container">
  <div class="z-box z1">Z-Index: 1 (Back)</div>
  <div class="z-box z2">Z-Index: 10 (Front)</div>
  <div class="z-box z3">Z-Index: 5 (Middle)</div>
</div>`,
        content: `
            <h3>📌 Deep Dive: z-index</h3>
            <p>The <code>z-index</code> property controls the vertical stacking order of elements that overlap. It only works on <strong>positioned elements</strong> (<code>position: absolute, relative, fixed, or sticky</code>) or children of CSS Flexbox and Grid containers.</p>
            <p><strong>Stacking Contexts:</strong> An element with a <code>z-index</code> other than <code>auto</code> creates a new <strong>stacking context</strong>. Elements inside a stacking context cannot overlap elements outside of it in a way that breaks the context's boundaries!</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.z-container { 
  position: relative; 
  height: 250px; 
  background: #1e293b;
  border-radius: 12px;
  padding: 20px;
}
.z-box {
  position: absolute;
  width: 150px; 
  height: 100px; 
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}
.z1 { 
  top: 20px; left: 20px; 
  background: #475569; 
  z-index: 1; /* Back layer */
}
.z3 { 
  top: 70px; left: 70px; 
  background: #3b82f6; 
  z-index: 5; /* Middle layer */
}
.z2 { 
  top: 120px; left: 120px; 
  background: #10b981; 
  z-index: 10; /* Front layer */
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-opacity",
        title: "opacity",
        badge: "DESIGN",
        emoji: "👻",
        demoHTML: `<div class="opacity-container">
  <div class="op-box solid">Opacity: 1.0</div>
  <div class="op-box half">Opacity: 0.5</div>
  <div class="op-box ghost">Opacity: 0.1</div>
</div>`,
        content: `
            <h3>📌 Deep Dive: opacity</h3>
            <p>The <code>opacity</code> property determines how transparent an element is. The value ranges from <code>0.0</code> (completely transparent/invisible) to <code>1.0</code> (completely opaque).</p>
            <p><strong>Important Difference from RGBA:</strong> When you set <code>opacity</code>, the element and <strong>ALL of its children</strong> become transparent! If you only want the background to be transparent but keep the text solid, use <code>background-color: rgba(...)</code> instead.</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.opacity-container {
  display: flex;
  gap: 20px;
  background: url('https://www.transparenttextures.com/patterns/cubes.png') #334155;
  padding: 30px;
  border-radius: 12px;
}
.op-box {
  width: 100px; 
  height: 100px; 
  background: #8b5cf6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  font-weight: 600;
  transition: opacity 0.3s;
}
.solid { opacity: 1; }
.half { opacity: 0.5; }
.ghost { opacity: 0.1; }

.op-box:hover {
  opacity: 1; /* Hovering restores full opacity! */
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-box-shadow",
        title: "box-shadow",
        badge: "DESIGN",
        emoji: "🌥️",
        demoHTML: `<div class="shadow-grid">
  <div class="s-box basic">Basic</div>
  <div class="s-box soft">Soft Floating</div>
  <div class="s-box inner">Inner Shadow</div>
  <div class="s-box neon">Neon Glow</div>
</div>`,
        content: `
            <h3>📌 Deep Dive: box-shadow</h3>
            <p>The <code>box-shadow</code> property attaches one or more shadows to an element. It is the secret ingredient behind modern UI design like Neumorphism and floating cards.</p>
            <p><strong>Syntax:</strong> <code>box-shadow: [offset-x] [offset-y] [blur-radius] [spread-radius] [color] [inset?];</code></p>
            <p>You can chain multiple shadows together by separating them with commas!</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.shadow-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px;
  background: #f1f5f9;
  border-radius: 16px;
}
.s-box {
  height: 100px;
  background: white; 
  color: #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 12px;
}

/* Hard, offset shadow */
.basic {
  box-shadow: 10px 10px 0px #0ea5e9;
}

/* Modern, smooth floating shadow */
.soft {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Inset (internal) shadow */
.inner {
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #e2e8f0;
}

/* Bright neon glowing shadow (no offset) */
.neon {
  background: #0f172a;
  color: #22d3ee;
  box-shadow: 0 0 15px #22d3ee, 
              0 0 30px #22d3ee;
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-text-align",
        title: "text-align",
        badge: "TYPOGRAPHY",
        emoji: "📑",
        demoHTML: `<div class="align-container">
  <div class="text-box left">Left Aligned: Clean and readable.</div>
  <div class="text-box center">Center Aligned: Perfect for headings.</div>
  <div class="text-box right">Right Aligned: Used for numbers or Arabic UI.</div>
  <div class="text-box justify">Justified Text: Stretches the lines so that each line has equal width (like a newspaper). It creates clean margins on both the left and right sides.</div>
</div>`,
        content: `
            <h3>📌 Deep Dive: text-align</h3>
            <p>The <code>text-align</code> property controls the horizontal alignment of inline content (like text or images) inside a block container.</p>
            <p>Note: It does <strong>not</strong> align block elements (like <code>&lt;div&gt;</code>) themselves. To center a block element, you use <code>margin: 0 auto;</code> or Flexbox.</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.align-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
}
.text-box {
  width: 100%; 
  padding: 15px; 
  background: #334155; 
  color: #e2e8f0;
  border-left: 4px solid #38bdf8;
  border-radius: 4px;
}

.left { text-align: left; }
.center { text-align: center; border-left: none; border-bottom: 4px solid #a855f7; }
.right { text-align: right; border-left: none; border-right: 4px solid #22c55e; }
.justify { 
  text-align: justify; 
  line-height: 1.6;
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-cursor",
        title: "cursor",
        badge: "INTERACTION",
        emoji: "👆",
        demoHTML: `<div class="cursor-grid">
  <div class="c-box ptr">pointer</div>
  <div class="c-box wait">wait</div>
  <div class="c-box help">help</div>
  <div class="c-box not-al">not-allowed</div>
  <div class="c-box zoom">zoom-in</div>
  <div class="c-box cross">crosshair</div>
</div>`,
        content: `
            <h3>📌 Deep Dive: cursor</h3>
            <p>The <code>cursor</code> property dictates what the mouse cursor should look like when hovering over an element. It is crucial for user experience (UX) to signal interactivity!</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.cursor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
}
.c-box {
  padding: 20px;
  background: #fff;
  border: 2px solid #cbd5e1;
  text-align: center;
  border-radius: 8px;
  font-weight: 600;
  color: #334155;
  transition: all 0.2s;
}
.c-box:hover {
  background: #e2e8f0;
  border-color: #94a3b8;
}

/* Cursor magic! */
.ptr { cursor: pointer; }      /* Links, buttons */
.wait { cursor: wait; }        /* Loading state */
.help { cursor: help; }        /* Tooltips */
.not-al { cursor: not-allowed;}/* Disabled elements */
.zoom { cursor: zoom-in; }     /* Image expanders */
.cross { cursor: crosshair; }  /* Selection/Games */
            </code></pre></div></div>
        `
    },
    {
        id: "prop-transition",
        title: "transition",
        badge: "ANIMATION",
        emoji: "⏱️",
        demoHTML: `<div class="trans-container">
  <button class="trans-btn">Hover Me Smoothly</button>
</div>`,
        content: `
            <h3>📌 Deep Dive: transition</h3>
            <p>The <code>transition</code> property allows you to change property values smoothly (from one value to another) over a given duration.</p>
            <p><strong>Syntax:</strong> <code>transition: [property] [duration] [timing-function] [delay];</code></p>
            <p><strong>Pro Tip:</strong> Never use <code>transition: all</code> in production if you can avoid it, as it forces the browser to calculate every single property. Transition specific properties like <code>transform</code> and <code>opacity</code> for high performance!</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.trans-container {
  display: flex;
  justify-content: center;
  padding: 40px;
}
.trans-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  
  /* The Transition! */
  /* We transition background-color and transform separately */
  transition: background-color 0.3s ease, 
              transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.trans-btn:hover {
  background: #f43f5e;
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 10px 20px rgba(244, 63, 94, 0.4);
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-animation",
        title: "animation",
        badge: "ANIMATION",
        emoji: "🎬",
        demoHTML: `<div class="anim-container">
  <div class="bouncing-ball"></div>
</div>`,
        content: `
            <h3>📌 Deep Dive: animation</h3>
            <p>The <code>animation</code> property lets you apply keyframe-based animations to elements. Unlike transitions which require an interaction (like hover), animations can run automatically!</p>
            <p>Animations require the <code>@keyframes</code> rule to define the specific states (waypoints) of the animation.</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.anim-container {
  height: 200px;
  background: #0f172a;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 12px;
  padding-bottom: 20px;
}
.bouncing-ball {
  width: 50px; 
  height: 50px; 
  background: radial-gradient(circle at 15px 15px, #fde047, #ca8a04);
  border-radius: 50%;
  
  /* animation: name duration timing-function delay iteration-count direction */
  animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0) scaleY(0.8) scaleX(1.1);
  }
  100% {
    transform: translateY(-120px) scaleY(1.1) scaleX(0.9);
  }
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-transform",
        title: "transform",
        badge: "DESIGN",
        emoji: "🔄",
        demoHTML: `<div class="tf-container">
  <div class="tf-card rotate">Rotate</div>
  <div class="tf-card scale">Scale</div>
  <div class="tf-card skew">Skew</div>
</div>`,
        content: `
            <h3>📌 Deep Dive: transform</h3>
            <p>The <code>transform</code> property applies a 2D or 3D transformation to an element. It is hardware-accelerated by the GPU, making it the most performant way to move and scale elements!</p>
            <ul>
              <li><code>translate(x, y)</code> moves the element.</li>
              <li><code>scale(x, y)</code> resizes the element.</li>
              <li><code>rotate(deg)</code> spins the element.</li>
              <li><code>skew(deg, deg)</code> tilts the element.</li>
            </ul>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.tf-container {
  display: flex;
  gap: 20px;
  padding: 30px;
  background: #f1f5f9;
  border-radius: 12px;
}
.tf-card {
  width: 80px; height: 80px;
  background: #8b5cf6;
  color: white; font-weight: bold;
  display: flex; align-items: center; justify-content: center;
  border-radius: 8px;
  transition: transform 0.4s ease;
}

/* Hover over the result to see the transforms! */
.rotate:hover {
  transform: rotate(1turn); /* 1turn = 360deg */
}
.scale:hover {
  transform: scale(1.5);
  background: #ef4444;
}
.skew:hover {
  transform: skewX(-20deg) translateX(20px);
  background: #10b981;
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-filter",
        title: "filter",
        badge: "DESIGN",
        emoji: "✨",
        demoHTML: `<div class="filter-container">
  <img src="../splash.png" alt="demo" class="f-img f-blur">
  <img src="../splash.png" alt="demo" class="f-img f-gray">
  <img src="../splash.png" alt="demo" class="f-img f-hue">
</div>`,
        content: `
            <h3>📌 Deep Dive: filter</h3>
            <p>The <code>filter</code> property provides graphical effects like blurring, color shifting, or adjusting brightness/contrast directly in CSS. No Photoshop required!</p>
            <div class="cb"><div class="cb-h"><span>Example</span><button class="copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button></div><div class="cb-b"><pre><code>
.filter-container {
  display: flex; gap: 15px;
  background: #000; padding: 20px;
  border-radius: 12px;
}
.f-img {
  width: 100px; height: 100px;
  object-fit: cover;
  border-radius: 8px;
  transition: filter 0.4s ease;
}

/* Initial States */
.f-blur { filter: blur(4px); }
.f-gray { filter: grayscale(100%); }
.f-hue  { filter: hue-rotate(90deg) contrast(150%); }

/* Remove filters on hover! */
.f-img:hover {
  filter: none;
}
            </code></pre></div></div>
        `
    },
    {
        id: "prop-z-index",
        title: "z-index",
        badge: "LAYOUT",
        emoji: "📚",
        demoHTML: `<div class="z-container"><div class="z1">Z-1</div><div class="z2">Z-2</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>z-index</code> property sets the z-order of a positioned element and its descendants. Overlapping elements with a larger z-index cover those with a smaller one.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the z-index styling */
.z-index-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-cursor",
        title: "cursor",
        badge: "INTERACTION",
        emoji: "👆",
        demoHTML: `<div class="cursor-box">Hover Me</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>cursor</code> property sets the mouse cursor, if any, to show when the mouse pointer is over an element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the cursor styling */
.cursor-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-float",
        title: "float",
        badge: "LAYOUT",
        emoji: "🎈",
        demoHTML: `<div class="demo-float"></div><p>Some text wrapping around the floated element. The float property is older but still used for text wrapping.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>float</code> property places an element on the left or right side of its container, allowing text and inline elements to wrap around it.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the float styling */
.float-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-overflow",
        title: "overflow",
        badge: "BOX MODEL",
        emoji: "🌊",
        demoHTML: `<div class="overflow-box">This text is way too long to fit in this tiny box and will trigger a scrollbar.</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>overflow</code> property sets what to do when an element's content is too big to fit in its block formatting context.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the overflow styling */
.overflow-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-visibility",
        title: "visibility",
        badge: "DESIGN",
        emoji: "👻",
        demoHTML: `<div class="visible-box">1</div><div class="hidden-box">2</div><div class="visible-box">3</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>visibility</code> property shows or hides an element without changing the layout of a document. Hidden elements still take up space!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the visibility styling */
.visibility-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-box-sizing",
        title: "box-sizing",
        badge: "BOX MODEL",
        emoji: "📦",
        demoHTML: `<div class="box-sizing-demo border-box">Border Box</div><div class="box-sizing-demo content-box">Content Box</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>box-sizing</code> property sets how the total width and height of an element is calculated. <code>border-box</code> includes padding and border in the element's total width and height.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the box-sizing styling */
.box-sizing-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-justify-content",
        title: "justify-content",
        badge: "FLEXBOX",
        emoji: "↔️",
        demoHTML: `<div class="flex-demo"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>justify-content</code> property defines how the browser distributes space between and around content items along the main-axis of a flex container.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the justify-content styling */
.justify-content-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-align-items",
        title: "align-items",
        badge: "FLEXBOX",
        emoji: "↕️",
        demoHTML: `<div class="flex-align"><div class="item" style="height:30px">1</div><div class="item" style="height:60px">2</div><div class="item" style="height:40px">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>align-items</code> property sets the align-self value on all direct children as a group. It controls alignment on the cross axis.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the align-items styling */
.align-items-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-gap",
        title: "gap",
        badge: "LAYOUT",
        emoji: "📏",
        demoHTML: `<div class="gap-demo"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>gap</code> property sets the gaps (gutters) between rows and columns in flex and grid layouts. It simplifies spacing without using margins!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the gap styling */
.gap-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-line-height",
        title: "line-height",
        badge: "TYPOGRAPHY",
        emoji: "📝",
        demoHTML: `<p class="line-height-demo">This is a paragraph of text. By increasing the line-height, we make the text much easier to read because there is more vertical space between the lines.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>line-height</code> property sets the height of a line box. It's commonly used to set the distance between lines of text.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the line-height styling */
.line-height-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-font-family",
        title: "font-family",
        badge: "TYPOGRAPHY",
        emoji: "🅰️",
        demoHTML: `<p class="font-demo">This text uses a monospace font.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>font-family</code> property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the font-family styling */
.font-family-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-transform",
        title: "text-transform",
        badge: "TYPOGRAPHY",
        emoji: "🔠",
        demoHTML: `<p class="transform-demo">this text was lowercase in the html</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-transform</code> property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-transform styling */
.text-transform-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-decoration",
        title: "text-decoration",
        badge: "TYPOGRAPHY",
        emoji: "<u>T</u>",
        demoHTML: `<a href="#" class="decoration-demo">No Underline Link</a>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-decoration</code> property is used to set or remove decorations from text, like underlines on links.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-decoration styling */
.text-decoration-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-letter-spacing",
        title: "letter-spacing",
        badge: "TYPOGRAPHY",
        emoji: "a b c",
        demoHTML: `<p class="spacing-demo">SPACED OUT</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>letter-spacing</code> property specifies the spacing behavior between text characters.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the letter-spacing styling */
.letter-spacing-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-word-break",
        title: "word-break",
        badge: "TYPOGRAPHY",
        emoji: "✂️",
        demoHTML: `<div class="word-demo">ThisIsAVeryLongWordThatWillNormallyOverflowItsContainerIfWordBreakIsNotSetToBreakAll</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>word-break</code> property specifies whether to break lines within words to prevent overflow.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the word-break styling */
.word-break-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-white-space",
        title: "white-space",
        badge: "TYPOGRAPHY",
        emoji: "⬜",
        demoHTML: `<div class="ws-demo">This text will not wrap     and keeps its    spaces.</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>white-space</code> property sets how white space inside an element is handled (e.g., preventing text from wrapping).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the white-space styling */
.white-space-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-max-width",
        title: "max-width",
        badge: "BOX MODEL",
        emoji: "📏",
        demoHTML: `<div class="max-width-demo">I shrink on small screens!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>max-width</code> property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified for max-width.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the max-width styling */
.max-width-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-object-fit",
        title: "object-fit",
        badge: "MEDIA",
        emoji: "🖼️",
        demoHTML: `<div style="width:100px; height:100px; background:teal;" class="object-demo">Image Stub</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>object-fit</code> property specifies how the contents of a replaced element, such as an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>, should be resized to fit its container.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the object-fit styling */
.object-fit-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-list-style",
        title: "list-style",
        badge: "TYPOGRAPHY",
        emoji: "•",
        demoHTML: `<ul class="list-demo"><li>Apples</li><li>Bananas</li></ul>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>list-style</code> property is a shorthand property that sets all the list properties. Commonly used to remove bullets from lists.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the list-style styling */
.list-style-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-pointer-events",
        title: "pointer-events",
        badge: "INTERACTION",
        emoji: "🖱️",
        demoHTML: `<div class="pointer-demo">You can't click me or hover me!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>pointer-events</code> property sets under what circumstances (if any) a particular graphic element can become the target of pointer events (like mouse clicks).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the pointer-events styling */
.pointer-events-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-transform",
        title: "transform",
        badge: "ANIMATION",
        emoji: "🔄",
        demoHTML: `<div class="transform-demo">Spin Me!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>transform</code> property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the transform styling */
.transform-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-transition",
        title: "transition",
        badge: "ANIMATION",
        emoji: "⏱️",
        demoHTML: `<div class="transition-demo">Hover for Magic</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>transition</code> property allows you to change property values smoothly (from one value to another), over a given duration.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When applied to transform or opacity, the browser offloads the animation to the GPU (compositor thread) ensuring smooth 60fps rendering without triggering main-thread repaints.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Only animate \`transform\` and \`opacity\` for best performance. Avoid animating layout-triggering properties like \`width\` or \`margin\`.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the transition styling */
.transition-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-animation",
        title: "animation",
        badge: "ANIMATION",
        emoji: "🎬",
        demoHTML: `<div class="anim-demo">Bouncing!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>animation</code> shorthand property applies an animation between styles. It requires <code>@keyframes</code> to define the animation sequence.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When applied to transform or opacity, the browser offloads the animation to the GPU (compositor thread) ensuring smooth 60fps rendering without triggering main-thread repaints.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Only animate \`transform\` and \`opacity\` for best performance. Avoid animating layout-triggering properties like \`width\` or \`margin\`.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the animation styling */
.animation-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-filter",
        title: "filter",
        badge: "EFFECTS",
        emoji: "🎨",
        demoHTML: `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100' height='100' fill='teal'/></svg>" class="filter-demo">`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>filter</code> property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the filter styling */
.filter-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-backdrop-filter",
        title: "backdrop-filter",
        badge: "EFFECTS",
        emoji: "🪟",
        demoHTML: `<div style="background: url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><circle cx=\\'50\\' cy=\\'50\\' r=\\'40\\' fill=\\'red\\'/></svg>'); padding: 30px;"><div class="backdrop-demo">Frosted Glass</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>backdrop-filter</code> property lets you apply graphical effects such as blurring or color shifting to the area <em>behind</em> an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the backdrop-filter styling */
.backdrop-filter-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-template-columns",
        title: "grid-template-columns",
        badge: "GRID",
        emoji: "🧮",
        demoHTML: `<div class="grid-cols"><div class="gi">1</div><div class="gi">2</div><div class="gi">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-template-columns</code> property defines the line names and track sizing functions of the grid columns.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-template-columns styling */
.grid-template-columns-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-template-rows",
        title: "grid-template-rows",
        badge: "GRID",
        emoji: "📊",
        demoHTML: `<div class="grid-rows"><div class="gi">Header</div><div class="gi">Content</div><div class="gi">Footer</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-template-rows</code> property defines the line names and track sizing functions of the grid rows.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-template-rows styling */
.grid-template-rows-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-column",
        title: "grid-column",
        badge: "GRID",
        emoji: "↔️",
        demoHTML: `<div class="g-container"><div class="gi span-col">Span 2 Columns</div><div class="gi">Normal</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-column</code> shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-column styling */
.grid-column-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-row",
        title: "grid-row",
        badge: "GRID",
        emoji: "↕️",
        demoHTML: `<div class="g-row-container"><div class="gi span-row">Span 2 Rows</div><div class="gi">Item 2</div><div class="gi">Item 3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-row</code> shorthand property specifies a grid item's size and location within the grid row.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-row styling */
.grid-row-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-box-shadow",
        title: "box-shadow",
        badge: "EFFECTS",
        emoji: "🌫️",
        demoHTML: `<div class="shadow-demo">Drop Shadow</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>box-shadow</code> property adds shadow effects around an element's frame. You can specify x-offset, y-offset, blur radius, spread radius, and color.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the box-shadow styling */
.box-shadow-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-shadow",
        title: "text-shadow",
        badge: "TYPOGRAPHY",
        emoji: "🔠",
        demoHTML: `<h2 class="text-shadow-demo">Glowing Text</h2>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-shadow</code> property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-shadow styling */
.text-shadow-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-opacity",
        title: "opacity",
        badge: "EFFECTS",
        emoji: "👻",
        demoHTML: `<div class="opacity-demo">Half Invisible</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>opacity</code> property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the opacity styling */
.opacity-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-mix-blend-mode",
        title: "mix-blend-mode",
        badge: "EFFECTS",
        emoji: "🔄",
        demoHTML: `<div style="background: linear-gradient(45deg, red, blue); padding: 20px;"><div class="blend-demo">BLEND</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>mix-blend-mode</code> property sets how an element's content should blend with the content of the element's parent and the element's background.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the mix-blend-mode styling */
.mix-blend-mode-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-clip-path",
        title: "clip-path",
        badge: "EFFECTS",
        emoji: "✂️",
        demoHTML: `<div class="clip-demo"></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>clip-path</code> property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the clip-path styling */
.clip-path-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-outline",
        title: "outline",
        badge: "BOX MODEL",
        emoji: "🖍️",
        demoHTML: `<input type="text" class="outline-demo" value="Focus me!">`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>outline</code> property is a line drawn outside the element's border edge. Unlike borders, outlines don't take up space in the box model!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the outline styling */
.outline-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-resize",
        title: "resize",
        badge: "INTERACTION",
        emoji: "↔️",
        demoHTML: `<textarea class="resize-demo">Drag the bottom right corner!</textarea>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>resize</code> property sets whether an element is resizable, and if so, in which directions.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the resize styling */
.resize-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-content",
        title: "content",
        badge: "PSEUDO-ELEMENT",
        emoji: "➕",
        demoHTML: `<p class="content-demo">Price</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>content</code> property replaces an element with a generated value. It is used with the <code>::before</code> and <code>::after</code> pseudo-elements.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the content styling */
.content-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-user-select",
        title: "user-select",
        badge: "INTERACTION",
        emoji: "🚫",
        demoHTML: `<p class="noselect-demo">Try highlighting this text. You can't!</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>user-select</code> property controls whether the user can select text. Great for UI elements that act like buttons where text highlighting is annoying.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the user-select styling */
.user-select-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-appearance",
        title: "appearance",
        badge: "STYLING",
        emoji: "🎭",
        demoHTML: `<input type="checkbox" class="appear-demo"> Checkbox turned into a circle!`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>appearance</code> property is used to control native UI controls (like checkboxes and dropdowns) based on operating system's theme. Setting it to <code>none</code> lets you build fully custom inputs!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the appearance styling */
.appearance-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-list-style-type",
        title: "list-style-type",
        badge: "TYPOGRAPHY",
        emoji: "📝",
        demoHTML: `<ul class="list-type-demo"><li>First</li><li>Second</li></ul>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>list-style-type</code> property sets the marker (such as a disc, character, or custom counter style) of a list item element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the list-style-type styling */
.list-style-type-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-word-spacing",
        title: "word-spacing",
        badge: "TYPOGRAPHY",
        emoji: "🔠",
        demoHTML: `<p class="word-space-demo">Space between words</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>word-spacing</code> property sets the length of space between words and between tags.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the word-spacing styling */
.word-spacing-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-align-last",
        title: "text-align-last",
        badge: "TYPOGRAPHY",
        emoji: "🔚",
        demoHTML: `<p class="align-last-demo">This is a paragraph of text. Watch how the very last line behaves differently than the rest of the lines in this block.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-align-last</code> property sets how the last line of a block or a line, right before a forced line break, is aligned.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-align-last styling */
.text-align-last-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-background-attachment",
        title: "background-attachment",
        badge: "BACKGROUND",
        emoji: "📌",
        demoHTML: `<div class="bg-attach-demo"><h2>Scroll Me</h2><br><br><br><br><br><br></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>background-attachment</code> property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the background-attachment styling */
.background-attachment-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-background-blend-mode",
        title: "background-blend-mode",
        badge: "BACKGROUND",
        emoji: "🎭",
        demoHTML: `<div class="bg-blend-demo"></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>background-blend-mode</code> property sets how an element's background images should blend with each other and with the element's background color.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the background-blend-mode styling */
.background-blend-mode-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-background-clip",
        title: "background-clip",
        badge: "BACKGROUND",
        emoji: "✂️",
        demoHTML: `<h1 class="bg-clip-demo">Text Gradient</h1>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>background-clip</code> property sets whether an element's background extends underneath its border box, padding box, or content box. When set to <code>text</code>, it clips the background to the text (great for gradient text!).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the background-clip styling */
.background-clip-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-mask-image",
        title: "mask-image",
        badge: "EFFECTS",
        emoji: "🎭",
        demoHTML: `<div class="mask-demo"></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>mask-image</code> property specifies an image to be used as a mask layer for an element. Where the mask is transparent, the element will be transparent.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the mask-image styling */
.mask-image-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-shape-outside",
        title: "shape-outside",
        badge: "LAYOUT",
        emoji: "🟡",
        demoHTML: `<div class="shape-demo"></div><p style="font-size:12px;">This text wraps beautifully around the circular floated element instead of wrapping in a boring square box.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>shape-outside</code> property defines a shape around which adjacent inline content (like text) should wrap.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the shape-outside styling */
.shape-outside-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-aspect-ratio",
        title: "aspect-ratio",
        badge: "LAYOUT",
        emoji: "📐",
        demoHTML: `<div class="aspect-demo">Perfect 16:9</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>aspect-ratio</code> property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the aspect-ratio styling */
.aspect-ratio-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-column-count",
        title: "column-count",
        badge: "LAYOUT",
        emoji: "📰",
        demoHTML: `<div class="columns-demo">This is some text that will be split into multiple columns, just like a newspaper article! CSS makes this incredibly easy.</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>column-count</code> property divides an element's content into the specified number of columns.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the column-count styling */
.column-count-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-column-gap",
        title: "column-gap",
        badge: "LAYOUT",
        emoji: "📏",
        demoHTML: `<div class="col-gap-demo">First column text here. The gap property pushes the second column away.</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>column-gap</code> property sets the size of the gap (gutter) between an element's columns (used in flex, grid, and multi-column layouts).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the column-gap styling */
.column-gap-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-writing-mode",
        title: "writing-mode",
        badge: "TYPOGRAPHY",
        emoji: "📜",
        demoHTML: `<p class="writing-demo">Vertical Text</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>writing-mode</code> property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the writing-mode styling */
.writing-mode-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-orientation",
        title: "text-orientation",
        badge: "TYPOGRAPHY",
        emoji: "🅰️",
        demoHTML: `<p class="orientation-demo">HELLO</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-orientation</code> property sets the orientation of the text characters in a line. It only affects text in vertical mode (when writing-mode is not horizontal-tb).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-orientation styling */
.text-orientation-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-scroll-behavior",
        title: "scroll-behavior",
        badge: "INTERACTION",
        emoji: "📜",
        demoHTML: `<div class="scroll-b-demo">Try scrolling inside a container with anchor links!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>scroll-behavior</code> property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the scroll-behavior styling */
.scroll-behavior-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-scroll-snap-type",
        title: "scroll-snap-type",
        badge: "INTERACTION",
        emoji: "🧲",
        demoHTML: `<div class="snap-container"><div class="snap-item">1</div><div class="snap-item">2</div><div class="snap-item">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>scroll-snap-type</code> property sets how strictly snap points are enforced on the scroll container in case there is one.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the scroll-snap-type styling */
.scroll-snap-type-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-underline-offset",
        title: "text-underline-offset",
        badge: "TYPOGRAPHY",
        emoji: "📏",
        demoHTML: `<a href="#" class="underline-offset-demo">Spaced Underline</a>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-underline-offset</code> property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-underline-offset styling */
.text-underline-offset-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-caret-color",
        title: "caret-color",
        badge: "INTERACTION",
        emoji: "✍️",
        demoHTML: `<input type="text" class="caret-demo" value="Click here!">`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>caret-color</code> property sets the color of the insertion caret, the visible marker where the next character typed will be inserted.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the caret-color styling */
.caret-color-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-accent-color",
        title: "accent-color",
        badge: "STYLING",
        emoji: "🎨",
        demoHTML: `<input type="radio" class="accent-demo" checked> <input type="checkbox" class="accent-demo" checked>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>accent-color</code> property sets the accent color for user-interface controls generated by some elements (like checkboxes, radio buttons, and range sliders).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the accent-color styling */
.accent-color-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-all",
        title: "all",
        badge: "GLOBAL",
        emoji: "💣",
        demoHTML: `<div class="all-demo">I forgot all my styles!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>all</code> shorthand property resets all of an element's properties except unicode-bidi, direction, and custom properties.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the all styling */
.all-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-will-change",
        title: "will-change",
        badge: "PERFORMANCE",
        emoji: "⚡",
        demoHTML: `<div class="will-change-demo">Fast Animation</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>will-change</code> property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the will-change styling */
.will-change-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-perspective",
        title: "perspective",
        badge: "3D ANIMATION",
        emoji: "👀",
        demoHTML: `<div class="perspective-demo"><div class="p-card">3D</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>perspective</code> property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the perspective styling */
.perspective-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-perspective-origin",
        title: "perspective-origin",
        badge: "3D ANIMATION",
        emoji: "🎯",
        demoHTML: `<div class="po-demo"><div class="po-card">Look up!</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>perspective-origin</code> property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the perspective-origin styling */
.perspective-origin-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-transform-origin",
        title: "transform-origin",
        badge: "ANIMATION",
        emoji: "📍",
        demoHTML: `<div class="to-demo">Rotate</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>transform-origin</code> property sets the origin for an element's transformations (like where a rotation pivots from).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the transform-origin styling */
.transform-origin-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-transform-style",
        title: "transform-style",
        badge: "3D ANIMATION",
        emoji: "🧊",
        demoHTML: `<div class="ts-demo"><div class="ts-card">Flat vs 3D</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>transform-style</code> property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the transform-style styling */
.transform-style-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-backface-visibility",
        title: "backface-visibility",
        badge: "3D ANIMATION",
        emoji: "🎴",
        demoHTML: `<div class="bv-demo">Front</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>backface-visibility</code> property sets whether the back face of an element is visible when turned towards the user.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the backface-visibility styling */
.backface-visibility-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-place-items",
        title: "place-items",
        badge: "GRID/FLEX",
        emoji: "🎯",
        demoHTML: `<div class="place-demo"><div>Centered</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>place-items</code> shorthand property allows you to align items along both the block and inline directions at once (i.e. align-items and justify-items).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the place-items styling */
.place-items-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-place-content",
        title: "place-content",
        badge: "GRID/FLEX",
        emoji: "📦",
        demoHTML: `<div class="pc-demo"><div>1</div><div>2</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>place-content</code> shorthand property allows you to align a flex or grid container's lines within it when there is extra space in the cross-axis and main-axis.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the place-content styling */
.place-content-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-zoom",
        title: "zoom",
        badge: "EFFECTS",
        emoji: "🔍",
        demoHTML: `<div class="zoom-demo">Big Text</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The non-standard <code>zoom</code> property scales the rendered size of an element. (Note: use <code>transform: scale()</code> for modern web dev).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the zoom styling */
.zoom-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-contain",
        title: "contain",
        badge: "PERFORMANCE",
        emoji: "🔒",
        demoHTML: `<div class="contain-demo">Isolated Component</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>contain</code> property allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree. Great for rendering performance.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the contain styling */
.contain-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-content-visibility",
        title: "content-visibility",
        badge: "PERFORMANCE",
        emoji: "🚀",
        demoHTML: `<div class="cv-demo">Fast render!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>content-visibility</code> property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing browsers to skip the element's rendering work until it is needed.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the content-visibility styling */
.content-visibility-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-hyphens",
        title: "hyphens",
        badge: "TYPOGRAPHY",
        emoji: "➖",
        demoHTML: `<div class="hyphen-demo">Supercalifragilisticexpialidocious</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>hyphens</code> property tells the browser how to go about splitting words to improve the layout of text when line-wrapping.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the hyphens styling */
.hyphens-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-tab-size",
        title: "tab-size",
        badge: "TYPOGRAPHY",
        emoji: "⌨️",
        demoHTML: `<pre class="tab-demo">	Indented with 1 tab</pre>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>tab-size</code> property is used to customize the width of tab characters (U+0009) in the document.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the tab-size styling */
.tab-size-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-indent",
        title: "text-indent",
        badge: "TYPOGRAPHY",
        emoji: "👉",
        demoHTML: `<p class="indent-demo">This paragraph has a huge indent on its first line, commonly seen in books and newspapers.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-indent</code> property sets the length of empty space (indentation) that is put before lines of text in a block.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-indent styling */
.text-indent-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-column-rule",
        title: "column-rule",
        badge: "LAYOUT",
        emoji: "📏",
        demoHTML: `<div class="rule-demo">First column text goes here. Second column text goes here.</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>column-rule</code> shorthand property sets the width, style, and color of the line drawn between columns in a multi-column layout.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the column-rule styling */
.column-rule-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-break-inside",
        title: "break-inside",
        badge: "LAYOUT",
        emoji: "🚫",
        demoHTML: `<div class="break-demo">Do not split me across columns!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>break-inside</code> property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the break-inside styling */
.break-inside-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-empty-cells",
        title: "empty-cells",
        badge: "TABLE",
        emoji: "🔲",
        demoHTML: `<table class="empty-cells-demo"><tr><td>Data</td><td></td></tr></table>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>empty-cells</code> property sets whether borders and backgrounds appear around table cells that have no visible content.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the empty-cells styling */
.empty-cells-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-caption-side",
        title: "caption-side",
        badge: "TABLE",
        emoji: "🏷️",
        demoHTML: `<table class="caption-demo"><caption>Sales Data</caption><tr><td>$100</td></tr></table>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>caption-side</code> property puts the content of a table's <code>&lt;caption&gt;</code> on the specified side.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the caption-side styling */
.caption-side-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-table-layout",
        title: "table-layout",
        badge: "TABLE",
        emoji: "📊",
        demoHTML: `<table class="layout-demo"><tr><td>Really long word that normally stretches the cell</td><td>Normal</td></tr></table>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>table-layout</code> property sets the algorithm used to lay out table cells, rows, and columns.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the table-layout styling */
.table-layout-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-image-rendering",
        title: "image-rendering",
        badge: "MEDIA",
        emoji: "🖼️",
        demoHTML: `<div class="pixel-demo">Pixel Art</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>image-rendering</code> property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the image-rendering styling */
.image-rendering-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-isolation",
        title: "isolation",
        badge: "EFFECTS",
        emoji: "🛡️",
        demoHTML: `<div style="background: red;"><div class="isolation-demo">Isolated <div style="mix-blend-mode: difference; color: white;">Blend</div></div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>isolation</code> property determines whether an element must create a new stacking context. It's especially useful in conjunction with mix-blend-mode to prevent blending with background layers.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the isolation styling */
.isolation-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-object-fit",
        title: "object-fit",
        badge: "MEDIA",
        emoji: "🖼️",
        demoHTML: `<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=300&fit=crop" class="of-demo">`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>object-fit</code> property sets how the content of a replaced element, such as an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>, should be resized to fit its container.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the object-fit styling */
.object-fit-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-object-position",
        title: "object-position",
        badge: "MEDIA",
        emoji: "📍",
        demoHTML: `<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=300&fit=crop" class="op-demo">`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>object-position</code> property specifies the alignment of the selected replaced element's contents within the element's box.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the object-position styling */
.object-position-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-font-family",
        title: "font-family",
        badge: "TYPOGRAPHY",
        emoji: "🔤",
        demoHTML: `<p class="font-demo">Elegant Serif Text</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>font-family</code> property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the font-family styling */
.font-family-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-font-size",
        title: "font-size",
        badge: "TYPOGRAPHY",
        emoji: "📏",
        demoHTML: `<p class="fz-demo">Huge Text</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>font-size</code> property sets the size of the font. It can be set in pixels, rem, em, percentages, or keywords.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the font-size styling */
.font-size-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-font-weight",
        title: "font-weight",
        badge: "TYPOGRAPHY",
        emoji: "🏋️",
        demoHTML: `<p class="fw-demo">Extra Bold Text</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>font-weight</code> property sets the weight (or boldness) of the font. The weights range from 100 (thin) to 900 (black).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the font-weight styling */
.font-weight-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-line-height",
        title: "line-height",
        badge: "TYPOGRAPHY",
        emoji: "↕️",
        demoHTML: `<p class="lh-demo">This paragraph has a lot of breathing room between the lines, making it incredibly easy to read for the user.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>line-height</code> property sets the height of a line box. It's commonly used to set the distance between lines of text.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the line-height styling */
.line-height-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-letter-spacing",
        title: "letter-spacing",
        badge: "TYPOGRAPHY",
        emoji: "↔️",
        demoHTML: `<p class="ls-demo">S P A C E D</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>letter-spacing</code> property specifies the spacing behavior between text characters.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the letter-spacing styling */
.letter-spacing-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-align",
        title: "text-align",
        badge: "TYPOGRAPHY",
        emoji: "📑",
        demoHTML: `<p class="ta-demo">Centered perfectly.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-align</code> CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-align styling */
.text-align-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-decoration",
        title: "text-decoration",
        badge: "TYPOGRAPHY",
        emoji: "🖍️",
        demoHTML: `<p class="td-demo">Strikethrough and underlined!</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-decoration</code> shorthand property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, text-decoration-style, and text-decoration-thickness.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-decoration styling */
.text-decoration-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-transform",
        title: "text-transform",
        badge: "TYPOGRAPHY",
        emoji: "🔠",
        demoHTML: `<p class="tt-demo">this was typed in lowercase</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-transform</code> CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-transform styling */
.text-transform-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-vertical-align",
        title: "vertical-align",
        badge: "LAYOUT",
        emoji: "↕️",
        demoHTML: `<p class="va-demo">X<span class="super">2</span> + Y<span class="sub">2</span></p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>vertical-align</code> CSS property sets vertical alignment of an inline, inline-block or table-cell box.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the vertical-align styling */
.vertical-align-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-white-space",
        title: "white-space",
        badge: "TYPOGRAPHY",
        emoji: "📏",
        demoHTML: `<div class="ws-demo">This very long text will absolutely not wrap to the next line no matter how small the box gets!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>white-space</code> CSS property sets how white space inside an element is handled.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the white-space styling */
.white-space-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-word-break",
        title: "word-break",
        badge: "TYPOGRAPHY",
        emoji: "🔨",
        demoHTML: `<div class="wb-demo">supercalifragilisticexpialidocious</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>word-break</code> CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the word-break styling */
.word-break-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-word-wrap",
        title: "word-wrap",
        badge: "TYPOGRAPHY",
        emoji: "🌯",
        demoHTML: `<div class="ww-demo">pneumonoultramicroscopicsilicovolcanoconiosis</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>word-wrap</code> (now officially <code>overflow-wrap</code>) property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the word-wrap styling */
.word-wrap-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-clear",
        title: "clear",
        badge: "LAYOUT",
        emoji: "🧹",
        demoHTML: `<div class="clear-container"><div style="float:left; background:red; padding:10px;">Floated</div><div class="clear-demo">I cleared the float!</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>clear</code> CSS property sets whether an element must be moved below (cleared) floating elements that precede it.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the clear styling */
.clear-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-float",
        title: "float",
        badge: "LAYOUT",
        emoji: "🎈",
        demoHTML: `<div class="float-container"><div class="float-demo">Floated Left</div><p>Text wraps around the floated element!</p></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>float</code> CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the float styling */
.float-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-border-collapse",
        title: "border-collapse",
        badge: "TABLE",
        emoji: "🖇️",
        demoHTML: `<table class="bc-demo"><tr><td>Cell 1</td><td>Cell 2</td></tr></table>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>border-collapse</code> CSS property sets whether table borders should collapse into a single border or be separated as in standard HTML.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the border-collapse styling */
.border-collapse-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-min-height",
        title: "min-height",
        badge: "BOX MODEL",
        emoji: "📏",
        demoHTML: `<div class="minh-demo">I'm guaranteed to be at least 100px tall even with little text.</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>min-height</code> CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the min-height styling */
.min-height-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-max-width",
        title: "max-width",
        badge: "BOX MODEL",
        emoji: "📐",
        demoHTML: `<div class="maxw-demo">I will never be wider than 200px!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>max-width</code> CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified for max-width.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the max-width styling */
.max-width-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-scroll-padding",
        title: "scroll-padding",
        badge: "INTERACTION",
        emoji: "🛡️",
        demoHTML: `<div class="sp-demo">Has breathing room when you snap to it!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>scroll-padding</code> property sets scroll padding on all sides of an element at once, much like the padding property does for padding on an element. Useful for sticky headers blocking anchor links!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the scroll-padding styling */
.scroll-padding-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-flex-direction",
        title: "flex-direction",
        badge: "FLEXBOX",
        emoji: "🔄",
        demoHTML: `<div class="fd-demo"><div class="fb-item">1</div><div class="fb-item">2</div><div class="fb-item">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>flex-direction</code> CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the flex-direction styling */
.flex-direction-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-flex-wrap",
        title: "flex-wrap",
        badge: "FLEXBOX",
        emoji: "🌯",
        demoHTML: `<div class="fw-demo"><div class="fb-item">A</div><div class="fb-item">B</div><div class="fb-item">C</div><div class="fb-item">D</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>flex-wrap</code> CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the flex-wrap styling */
.flex-wrap-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-flex-flow",
        title: "flex-flow",
        badge: "FLEXBOX",
        emoji: "🌊",
        demoHTML: `<div class="ff-demo"><div class="fb-item">X</div><div class="fb-item">Y</div><div class="fb-item">Z</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>flex-flow</code> property is a shorthand for <code>flex-direction</code> and <code>flex-wrap</code>.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the flex-flow styling */
.flex-flow-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-flex-grow",
        title: "flex-grow",
        badge: "FLEXBOX",
        emoji: "📈",
        demoHTML: `<div style="display:flex; gap:5px;"><div class="fb-item" style="flex-grow:1;">1</div><div class="fb-item fg-demo">2</div><div class="fb-item" style="flex-grow:1;">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>flex-grow</code> CSS property sets the flex grow factor of a flex item main size. It dictates what amount of the available space inside the flex container the item should take up.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the flex-grow styling */
.flex-grow-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-flex-shrink",
        title: "flex-shrink",
        badge: "FLEXBOX",
        emoji: "📉",
        demoHTML: `<div style="display:flex; width: 150px; gap:5px;"><div class="fb-item" style="width: 100px;">1</div><div class="fb-item fs-demo" style="width: 100px;">2</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>flex-shrink</code> CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the flex-shrink styling */
.flex-shrink-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-flex-basis",
        title: "flex-basis",
        badge: "FLEXBOX",
        emoji: "📏",
        demoHTML: `<div style="display:flex; gap:5px;"><div class="fb-item fbase-demo">Item</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>flex-basis</code> CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the flex-basis styling */
.flex-basis-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-align-content",
        title: "align-content",
        badge: "FLEX/GRID",
        emoji: "📑",
        demoHTML: `<div class="ac-demo"><div class="fb-item">1</div><div class="fb-item">2</div><div class="fb-item">3</div><div class="fb-item">4</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>align-content</code> property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the align-content styling */
.align-content-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-order",
        title: "order",
        badge: "FLEX/GRID",
        emoji: "🔄",
        demoHTML: `<div style="display:flex; gap:5px;"><div class="fb-item" style="order:2;">First in HTML</div><div class="fb-item order-demo">Second in HTML</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>order</code> CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the order styling */
.order-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-background-size",
        title: "background-size",
        badge: "BACKGROUND",
        emoji: "🖼️",
        demoHTML: `<div class="bgs-demo"></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>background-size</code> CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the background-size styling */
.background-size-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-border-radius",
        title: "border-radius",
        badge: "BOX MODEL",
        emoji: "⭕",
        demoHTML: `<div class="br-demo">Rounded</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>border-radius</code> CSS property rounds the corners of an element's outer border edge.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the border-radius styling */
.border-radius-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-counter-reset",
        title: "counter-reset",
        badge: "CONTENT",
        emoji: "🔢",
        demoHTML: `<div class="creset-demo"><p>Item</p><p>Item</p></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>counter-reset</code> CSS property resets a CSS counter to a given value (default 0). It is used alongside counter-increment and the content property.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the counter-reset styling */
.counter-reset-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-counter-increment",
        title: "counter-increment",
        badge: "CONTENT",
        emoji: "➕",
        demoHTML: `<div style="counter-reset: myCounter;"><p class="cinc-demo">Chapter</p><p class="cinc-demo">Chapter</p></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>counter-increment</code> CSS property increases or decreases the value of a CSS counter by a given value.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the counter-increment styling */
.counter-increment-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-cursor",
        title: "cursor",
        badge: "INTERACTION",
        emoji: "🖱️",
        demoHTML: `<div class="cursor-demo">Hover over me!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>cursor</code> CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the cursor styling */
.cursor-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-overflow",
        title: "text-overflow",
        badge: "TYPOGRAPHY",
        emoji: "✂️",
        demoHTML: `<div class="tover-demo">This text is way too long to fit in this tiny box.</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-overflow</code> CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-overflow styling */
.text-overflow-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-outline-offset",
        title: "outline-offset",
        badge: "BOX MODEL",
        emoji: "📏",
        demoHTML: `<div class="ooffset-demo">Focus Me</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>outline-offset</code> CSS property sets the amount of space between an outline and the edge or border of an element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the outline-offset styling */
.outline-offset-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-border-spacing",
        title: "border-spacing",
        badge: "TABLE",
        emoji: "🖇️",
        demoHTML: `<table class="bspacing-demo"><tr><td>A</td><td>B</td></tr></table>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>border-spacing</code> CSS property sets the distance between the borders of adjacent table cells (only applies when border-collapse is separate).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the border-spacing styling */
.border-spacing-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-list-style-position",
        title: "list-style-position",
        badge: "TYPOGRAPHY",
        emoji: "📝",
        demoHTML: `<ul class="lsp-demo"><li>Multi-line list item text that wraps to show the effect</li></ul>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>list-style-position</code> CSS property sets the position of the <code>::marker</code> relative to a list item.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the list-style-position styling */
.list-style-position-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-justify",
        title: "text-justify",
        badge: "TYPOGRAPHY",
        emoji: "📑",
        demoHTML: `<p class="tjustify-demo">This text is perfectly justified.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-justify</code> CSS property sets what type of justification should be applied to text when text-align is set to justify.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-justify styling */
.text-justify-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-scroll-margin",
        title: "scroll-margin",
        badge: "INTERACTION",
        emoji: "🛡️",
        demoHTML: `<div class="smargin-demo">Snap target</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>scroll-margin</code> property sets all of the scroll margins of an element at once. It adjusts the snap area of the element for scroll snapping.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the scroll-margin styling */
.scroll-margin-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-padding-inline",
        title: "padding-inline",
        badge: "BOX MODEL",
        emoji: "📏",
        demoHTML: `<div class="pinline-demo">Logical Padding</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>padding-inline</code> CSS logical property defines the logical inline start and end padding of an element, mapping to physical padding depending on the element's writing mode, directionality, and text orientation.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the padding-inline styling */
.padding-inline-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-inset",
        title: "inset",
        badge: "LAYOUT",
        emoji: "📍",
        demoHTML: `<div style="position:relative; height:100px; background:#1e293b;"><div class="inset-demo">Pinned!</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>inset</code> CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. It sets the logical block and inline start and end offsets of an element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the inset styling */
.inset-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-padding-block",
        title: "padding-block",
        badge: "BOX MODEL",
        emoji: "↕️",
        demoHTML: `<div class="pblock-demo">Vertical padding via logical property</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>padding-block</code> CSS logical property defines the logical block start and end padding of an element. It maps to padding-top and padding-bottom in a default horizontal writing mode.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the padding-block styling */
.padding-block-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-margin-block",
        title: "margin-block",
        badge: "BOX MODEL",
        emoji: "↕️",
        demoHTML: `<div style="background:#1e293b;"><div class="mblock-demo">Spaced out!</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>margin-block</code> CSS logical property defines the logical block start and end margins of an element, mapping to top and bottom margins.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the margin-block styling */
.margin-block-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-margin-inline",
        title: "margin-inline",
        badge: "BOX MODEL",
        emoji: "↔️",
        demoHTML: `<div class="minline-demo">Centered via logical margin</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>margin-inline</code> CSS logical property defines the logical inline start and end margins of an element. Setting it to <code>auto</code> is the modern way to center a block horizontally.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the margin-inline styling */
.margin-inline-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-outline-style",
        title: "outline-style",
        badge: "BOX MODEL",
        emoji: "🖍️",
        demoHTML: `<div class="ostyle-demo">Dotted Outline</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>outline-style</code> CSS property sets the style of an element's outline. Unlike borders, outlines do not take up space.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the outline-style styling */
.outline-style-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-outline-width",
        title: "outline-width",
        badge: "BOX MODEL",
        emoji: "📏",
        demoHTML: `<div class="owidth-demo">Thick Outline</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>outline-width</code> CSS property sets the thickness of an element's outline.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the outline-width styling */
.outline-width-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-outline-color",
        title: "outline-color",
        badge: "BOX MODEL",
        emoji: "🎨",
        demoHTML: `<input type="text" class="ocolor-demo" value="Focus me!">`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>outline-color</code> CSS property sets the color of an element's outline.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the outline-color styling */
.outline-color-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-indent",
        title: "text-indent",
        badge: "TYPOGRAPHY",
        emoji: "➡️",
        demoHTML: `<p class="tindent-demo">This paragraph starts with a noticeable indentation on its very first line, just like you would see in a printed book or formal essay.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-indent</code> CSS property sets the length of empty space (indentation) that is put before lines of text in a block.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-indent styling */
.text-indent-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-word-spacing",
        title: "word-spacing",
        badge: "TYPOGRAPHY",
        emoji: "↔️",
        demoHTML: `<p class="wspacing-demo">The words in this sentence are far apart.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>word-spacing</code> CSS property sets the length of space between words and between tags.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the word-spacing styling */
.word-spacing-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-list-style-type",
        title: "list-style-type",
        badge: "TYPOGRAPHY",
        emoji: "📝",
        demoHTML: `<ul class="lstype-demo"><li>One</li><li>Two</li><li>Three</li></ul>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>list-style-type</code> CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the list-style-type styling */
.list-style-type-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-list-style-image",
        title: "list-style-image",
        badge: "TYPOGRAPHY",
        emoji: "🖼️",
        demoHTML: `<ul class="lsimage-demo"><li>Custom</li><li>Bullet</li></ul>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>list-style-image</code> CSS property sets an image to be used as the list item marker.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the list-style-image styling */
.list-style-image-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-caption-side",
        title: "caption-side",
        badge: "TABLE",
        emoji: "📑",
        demoHTML: `<table class="cside-demo"><caption>Table Title</caption><tr><td>Data</td></tr></table>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>caption-side</code> CSS property puts the content of a table's <code>&lt;caption&gt;</code> on the specified side.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the caption-side styling */
.caption-side-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-underline-position",
        title: "text-underline-position",
        badge: "TYPOGRAPHY",
        emoji: "🖍️",
        demoHTML: `<p class="tup-demo">Chemical formula H₂O</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-underline-position</code> CSS property specifies the position of the underline which is set using the text-decoration property.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-underline-position styling */
.text-underline-position-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-emphasis",
        title: "text-emphasis",
        badge: "TYPOGRAPHY",
        emoji: "✨",
        demoHTML: `<p class="temph-demo">Important</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-emphasis</code> CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for text-emphasis-style and text-emphasis-color.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-emphasis styling */
.text-emphasis-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-orientation",
        title: "text-orientation",
        badge: "TYPOGRAPHY",
        emoji: "↕️",
        demoHTML: `<div class="torient-demo">HELLO</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-orientation</code> CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-orientation styling */
.text-orientation-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-direction",
        title: "direction",
        badge: "TYPOGRAPHY",
        emoji: "⬅️",
        demoHTML: `<p class="dir-demo">This text reads right to left.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>direction</code> CSS property sets the direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Hebrew or Arabic).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the direction styling */
.direction-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-unicode-bidi",
        title: "unicode-bidi",
        badge: "TYPOGRAPHY",
        emoji: "🔀",
        demoHTML: `<p class="bidi-demo">Hello World</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>unicode-bidi</code> CSS property, together with the direction property, determines how bidirectional text in a document is handled.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the unicode-bidi styling */
.unicode-bidi-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-line-break",
        title: "line-break",
        badge: "TYPOGRAPHY",
        emoji: "🔨",
        demoHTML: `<p class="lbreak-demo">This property controls how strict the browser is when deciding where to break Chinese, Japanese, or Korean (CJK) text.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>line-break</code> CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the line-break styling */
.line-break-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-quotes",
        title: "quotes",
        badge: "CONTENT",
        emoji: "💬",
        demoHTML: `<q class="quotes-demo">I am quoting someone</q>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>quotes</code> CSS property sets how the browser should render quotation marks that are added via the <code>open-quote</code> or <code>close-quote</code> values of the content property.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the quotes styling */
.quotes-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-color-scheme",
        title: "color-scheme",
        badge: "ACCESSIBILITY",
        emoji: "🌓",
        demoHTML: `<div class="cscheme-demo"><input type="checkbox" checked><input type="range"></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>color-scheme</code> CSS property allows an element to indicate which color schemes it can comfortably be rendered in (e.g., forcing default form controls to be dark mode).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the color-scheme styling */
.color-scheme-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-overscroll-behavior",
        title: "overscroll-behavior",
        badge: "INTERACTION",
        emoji: "🚫",
        demoHTML: `<div class="osb-demo">Scroll inside me to the end!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>overscroll-behavior</code> CSS property sets what a browser does when reaching the boundary of a scrolling area (prevents the parent from scrolling).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the overscroll-behavior styling */
.overscroll-behavior-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-touch-action",
        title: "touch-action",
        badge: "INTERACTION",
        emoji: "👆",
        demoHTML: `<div class="taction-demo">Pan me horizontally only</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>touch-action</code> CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming or panning).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the touch-action styling */
.touch-action-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-pointer-events",
        title: "pointer-events",
        badge: "INTERACTION",
        emoji: "👻",
        demoHTML: `<div style="position:relative;"><button>Click me</button><div class="pe-demo">Ghost box</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>pointer-events</code> CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the pointer-events styling */
.pointer-events-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-user-select",
        title: "user-select",
        badge: "INTERACTION",
        emoji: "🚫",
        demoHTML: `<p class="uselect-demo">Try to highlight this text!</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>user-select</code> CSS property controls whether the user can select text. This can have a significant effect on the user experience when interacting with apps.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the user-select styling */
.user-select-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-will-change",
        title: "will-change",
        badge: "PERFORMANCE",
        emoji: "🚀",
        demoHTML: `<div class="wchange-demo">Fast Animation</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>will-change</code> CSS property hints to browsers how an element is expected to change, allowing them to optimize rendering before the element actually changes.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the will-change styling */
.will-change-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-contain-intrinsic-size",
        title: "contain-intrinsic-size",
        badge: "PERFORMANCE",
        emoji: "📦",
        demoHTML: `<div class="cis-demo">I render fast!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>contain-intrinsic-size</code> property sets the intrinsic size of an element that is subject to size containment (e.g. using content-visibility).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the contain-intrinsic-size styling */
.contain-intrinsic-size-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-font-variant",
        title: "font-variant",
        badge: "TYPOGRAPHY",
        emoji: "🔤",
        demoHTML: `<p class="fvariant-demo">Small Caps Text</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>font-variant</code> CSS property is a shorthand for various font variant properties like font-variant-caps.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the font-variant styling */
.font-variant-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-font-variant-numeric",
        title: "font-variant-numeric",
        badge: "TYPOGRAPHY",
        emoji: "🔢",
        demoHTML: `<p class="fnum-demo">0123456789</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>font-variant-numeric</code> CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the font-variant-numeric styling */
.font-variant-numeric-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-font-kerning",
        title: "font-kerning",
        badge: "TYPOGRAPHY",
        emoji: "↔️",
        demoHTML: `<p class="fkern-demo">WAVE</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>font-kerning</code> CSS property sets the use of the kerning information stored in a font.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the font-kerning styling */
.font-kerning-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-tab-size",
        title: "tab-size",
        badge: "TYPOGRAPHY",
        emoji: "➡️",
        demoHTML: `<pre class="tsize-demo">Code	Indented	Here</pre>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>tab-size</code> CSS property is used to customize the width of tab characters (U+0009).</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the tab-size styling */
.tab-size-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-align-last",
        title: "text-align-last",
        badge: "TYPOGRAPHY",
        emoji: "📑",
        demoHTML: `<p class="talast-demo">This is a paragraph of text. Watch how the very last line behaves differently than the rest of the lines in this block.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-align-last</code> CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-align-last styling */
.text-align-last-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-decoration-color",
        title: "text-decoration-color",
        badge: "TYPOGRAPHY",
        emoji: "🎨",
        demoHTML: `<p class="tdcolor-demo">Colored underline</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-decoration-color</code> CSS property sets the color of decorations added to text by text-decoration-line.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-decoration-color styling */
.text-decoration-color-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-decoration-style",
        title: "text-decoration-style",
        badge: "TYPOGRAPHY",
        emoji: "〰️",
        demoHTML: `<p class="tdstyle-demo">Wavy underline</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-decoration-style</code> CSS property sets the style of the lines specified by text-decoration-line.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-decoration-style styling */
.text-decoration-style-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-text-decoration-thickness",
        title: "text-decoration-thickness",
        badge: "TYPOGRAPHY",
        emoji: "📏",
        demoHTML: `<p class="tdthick-demo">Thick underline</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>text-decoration-thickness</code> CSS property sets the stroke thickness of the decoration line that is used on text in an element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the text-decoration-thickness styling */
.text-decoration-thickness-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-box-decoration-break",
        title: "box-decoration-break",
        badge: "BOX MODEL",
        emoji: "✂️",
        demoHTML: `<span class="bdb-demo">This is some text<br>that breaks across<br>multiple lines!</span>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>box-decoration-break</code> CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the box-decoration-break styling */
.box-decoration-break-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-page-break-before",
        title: "page-break-before",
        badge: "PRINT",
        emoji: "📄",
        demoHTML: `<div class="pbb-demo">I will always start on a new page when printed!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>page-break-before</code> CSS property sets whether a page break should be inserted before the element when generating a PDF or printing.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the page-break-before styling */
.page-break-before-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-page-break-after",
        title: "page-break-after",
        badge: "PRINT",
        emoji: "📄",
        demoHTML: `<div class="pba-demo">I am the last thing on this page!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>page-break-after</code> CSS property sets whether a page break should be inserted after the element when printing.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the page-break-after styling */
.page-break-after-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-page-break-inside",
        title: "page-break-inside",
        badge: "PRINT",
        emoji: "📄",
        demoHTML: `<div class="pbi-demo">Do not cut me in half when printing!</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>page-break-inside</code> CSS property sets whether a page break is allowed inside the element when printing.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the page-break-inside styling */
.page-break-inside-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-orphans",
        title: "orphans",
        badge: "PRINT",
        emoji: "📖",
        demoHTML: `<p class="orphans-demo">Prevents a single line of a paragraph from being left behind at the bottom of a page.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>orphans</code> CSS property sets the minimum number of lines in a block container that must be left at the bottom of a page before a page break.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the orphans styling */
.orphans-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-widows",
        title: "widows",
        badge: "PRINT",
        emoji: "📖",
        demoHTML: `<p class="widows-demo">Prevents a single line of a paragraph from being pushed alone to the top of the next page.</p>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>widows</code> CSS property sets the minimum number of lines in a block container that must be left at the top of a page after a page break.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the widows styling */
.widows-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-transform-origin",
        title: "transform-origin",
        badge: "ANIMATION",
        emoji: "📍",
        demoHTML: `<div class="torigin-demo">Spinning</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>transform-origin</code> CSS property sets the origin for an element's transformations.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the transform-origin styling */
.transform-origin-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-transform-style",
        title: "transform-style",
        badge: "ANIMATION",
        emoji: "🧊",
        demoHTML: `<div class="tstyle-demo">3D Box</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>transform-style</code> CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the transform-style styling */
.transform-style-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-perspective-origin",
        title: "perspective-origin",
        badge: "ANIMATION",
        emoji: "👁️",
        demoHTML: `<div class="porigin-demo">3D View</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>perspective-origin</code> CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the perspective-origin styling */
.perspective-origin-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-template-areas",
        title: "grid-template-areas",
        badge: "GRID",
        emoji: "🗺️",
        demoHTML: `<div class="gta-demo"><header>Header</header><main>Content</main><aside>Sidebar</aside></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-template-areas</code> CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-template-areas styling */
.grid-template-areas-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-auto-columns",
        title: "grid-auto-columns",
        badge: "GRID",
        emoji: "📐",
        demoHTML: `<div class="gac-demo"><div>Auto 1</div><div>Auto 2</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-auto-columns</code> CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-auto-columns styling */
.grid-auto-columns-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-auto-rows",
        title: "grid-auto-rows",
        badge: "GRID",
        emoji: "📐",
        demoHTML: `<div class="gar-demo"><div>Auto 1</div><div>Auto 2</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-auto-rows</code> CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-auto-rows styling */
.grid-auto-rows-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-grid-auto-flow",
        title: "grid-auto-flow",
        badge: "GRID",
        emoji: "🌊",
        demoHTML: `<div class="gaf-demo"><div>1</div><div>2</div><div>3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>grid-auto-flow</code> CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>Modern layout engines handle this by calculating available space and intrinsically sizing items before the final layout pass, which is highly optimized.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Prefer this over older layout methods like floats. Use relative units (fr, %) for responsive design.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the grid-auto-flow styling */
.grid-auto-flow-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-justify-content",
        title: "justify-content",
        badge: "FLEX/GRID",
        emoji: "↔️",
        demoHTML: `<div class="jc-demo"><div class="fb">A</div><div class="fb">B</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>justify-content</code> CSS property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the justify-content styling */
.justify-content-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-justify-items",
        title: "justify-items",
        badge: "GRID",
        emoji: "↔️",
        demoHTML: `<div class="ji-demo"><div class="gi">Centered</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>justify-items</code> CSS property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the justify-items styling */
.justify-items-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-justify-self",
        title: "justify-self",
        badge: "GRID",
        emoji: "📍",
        demoHTML: `<div class="jself-container"><div class="jself-demo">Right</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>justify-self</code> CSS property sets the way a box is justified inside its alignment container along the appropriate axis.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the justify-self styling */
.justify-self-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-align-items",
        title: "align-items",
        badge: "FLEX/GRID",
        emoji: "↕️",
        demoHTML: `<div class="ai-demo"><div class="fb" style="font-size:2rem;">A</div><div class="fb">B</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>align-items</code> CSS property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the align-items styling */
.align-items-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-align-self",
        title: "align-self",
        badge: "FLEX/GRID",
        emoji: "📍",
        demoHTML: `<div class="as-demo"><div class="fb">1</div><div class="fb as-item">2</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>align-self</code> CSS property overrides a grid or flex item's align-items value. In Flexbox, it aligns the item on the cross axis.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the align-self styling */
.align-self-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-gap",
        title: "gap",
        badge: "FLEX/GRID",
        emoji: "📏",
        demoHTML: `<div class="gap-demo"><div class="fb">A</div><div class="fb">B</div><div class="fb">C</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>gap</code> CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the gap styling */
.gap-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-row-gap",
        title: "row-gap",
        badge: "FLEX/GRID",
        emoji: "↕️",
        demoHTML: `<div class="rgap-demo"><div class="fb">1</div><div class="fb">2</div><div class="fb">3</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>row-gap</code> CSS property sets the size of the gap (gutter) between an element's grid rows.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the row-gap styling */
.row-gap-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-column-gap",
        title: "column-gap",
        badge: "FLEX/GRID",
        emoji: "↔️",
        demoHTML: `<div class="cgap-demo"><div class="fb">Left</div><div class="fb">Right</div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>column-gap</code> CSS property sets the size of the gap (gutter) between an element's columns.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the column-gap styling */
.column-gap-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-empty-cells",
        title: "empty-cells",
        badge: "TABLE",
        emoji: "👻",
        demoHTML: `<table class="ec-demo"><tr><td>Data</td><td></td></tr></table>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>empty-cells</code> CSS property sets whether borders and backgrounds appear around table cells that have no visible content.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the empty-cells styling */
.empty-cells-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-background-blend-mode",
        title: "background-blend-mode",
        badge: "BACKGROUND",
        emoji: "🎨",
        demoHTML: `<div class="bbm-demo"></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>background-blend-mode</code> CSS property sets how an element's background images should blend with each other and with the element's background color.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the background-blend-mode styling */
.background-blend-mode-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-isolation",
        title: "isolation",
        badge: "EFFECTS",
        emoji: "🛡️",
        demoHTML: `<div style="background:teal;"><div class="iso-demo">Safe <span class="blend">Blend</span></div></div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>isolation</code> CSS property determines whether an element must create a new stacking context. It prevents blending modes from bleeding out into the background!</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the isolation styling */
.isolation-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-image-rendering",
        title: "image-rendering",
        badge: "MEDIA",
        emoji: "👾",
        demoHTML: `<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=30&h=30&fit=crop" class="ir-demo">`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>image-rendering</code> CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the image-rendering styling */
.image-rendering-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    },
    {
        id: "prop-all",
        title: "all",
        badge: "GLOBAL",
        emoji: "🧹",
        demoHTML: `<button class="all-demo">Clean Button</button>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>all</code> shorthand CSS property resets all of an element's properties except unicode-bidi, direction, and custom properties. It can set properties to their initial or inherited values.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser parses this CSS, the rendering engine creates a render tree and computes layout and paint layers, optimizing for hardware acceleration where possible.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use this property judiciously to ensure optimal performance and maintain accessibility. Avoid deep selector nesting.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Initialize and execute the all styling */
.all-example {
    /* Review the default code panel for interactive usage! */
}
    </code></pre>
        
        `
    }
];

// PRESET THEMES (Keeping the extensive themes from HTML Mastery)
const PRESET_THEMES = [
  { id: "dark", name: "Midnight Dark", bg: "#0a0a1a", bg2: "#12122a", bg3: "#0d0d22", bg4: "#080818", text: "#d0d0ee", text2: "#b0b0d0", text3: "#8888bb", accent: "#6c63ff", accent2: "#3ecfcf", accent3: "#ffa36b", border: "#6c63ff22", card: "#12122a", codeBg: "#080818", sbBg: "#0f0f24", hdrBg: "linear-gradient(135deg,#1a0a3e,#0f2027,#0a1628)" },
  { id: "light", name: "Clean Light", bg: "#f0f0f8", bg2: "#ffffff", bg3: "#f5f5ff", bg4: "#eeeef8", text: "#1a1a2e", text2: "#333333", text3: "#666666", accent: "#5b54e6", accent2: "#1aada0", accent3: "#e8823a", border: "#5b54e622", card: "#ffffff", codeBg: "#f0f0f8", sbBg: "#ffffff", hdrBg: "linear-gradient(135deg,#5b54e6,#1aada0)" },
  { id: "ocean", name: "Deep Ocean", bg: "#0a192f", bg2: "#112240", bg3: "#0d1b33", bg4: "#0a1628", text: "#ccd6f6", text2: "#8892b0", text3: "#5a6a8a", accent: "#64ffda", accent2: "#57cbff", accent3: "#f5a623", border: "#64ffda22", card: "#112240", codeBg: "#0a1628", sbBg: "#0d1d38", hdrBg: "linear-gradient(135deg,#0a192f,#112240,#1a365d)" },
  { id: "purple", name: "Neon Purple", bg: "#13091f", bg2: "#1c1030", bg3: "#170d28", bg4: "#100820", text: "#e0d0ff", text2: "#b8a0dd", text3: "#8877aa", accent: "#bf5af2", accent2: "#ff6bcb", accent3: "#ffd60a", border: "#bf5af222", card: "#1c1030", codeBg: "#100820", sbBg: "#150b25", hdrBg: "linear-gradient(135deg,#2d1b52,#1c1030,#13091f)" },
  { id: "green", name: "Forest Green", bg: "#0a1a0f", bg2: "#122a18", bg3: "#0d220f", bg4: "#081808", text: "#d0eeda", text2: "#a0c0a8", text3: "#6a8a70", accent: "#4ade80", accent2: "#22d3ee", accent3: "#fbbf24", border: "#4ade8022", card: "#122a18", codeBg: "#081808", sbBg: "#0f2414", hdrBg: "linear-gradient(135deg,#0a2e14,#122a18,#1a3e22)" },
  { id: "dracula", name: "Dracula", bg: "#282a36", bg2: "#44475a", bg3: "#3b3d4d", bg4: "#21222c", text: "#f8f8f2", text2: "#e2e2dc", text3: "#6272a4", accent: "#bd93f9", accent2: "#ff79c6", accent3: "#f1fa8c", border: "#bd93f933", card: "#44475a", codeBg: "#21222c", sbBg: "#282a36", hdrBg: "linear-gradient(135deg,#282a36,#44475a,#6272a4)" },
  { id: "monokai", name: "Monokai", bg: "#272822", bg2: "#3e3d32", bg3: "#33332d", bg4: "#1e1f1c", text: "#f8f8f2", text2: "#cfcfc2", text3: "#75715e", accent: "#f92672", accent2: "#a6e22e", accent3: "#fd971f", border: "#f9267233", card: "#3e3d32", codeBg: "#1e1f1c", sbBg: "#272822", hdrBg: "linear-gradient(135deg,#1e1f1c,#272822,#3e3d32)" },
  { id: "solarized_dark", name: "Solarized Dark", bg: "#002b36", bg2: "#073642", bg3: "#04303c", bg4: "#001e26", text: "#839496", text2: "#93a1a1", text3: "#586e75", accent: "#b58900", accent2: "#2aa198", accent3: "#cb4b16", border: "#b5890033", card: "#073642", codeBg: "#001e26", sbBg: "#002b36", hdrBg: "linear-gradient(135deg,#001e26,#002b36,#073642)" },
  { id: "nord", name: "Nordic Frost", bg: "#2e3440", bg2: "#3b4252", bg3: "#343b48", bg4: "#242933", text: "#eceff4", text2: "#e5e9f0", text3: "#4c566a", accent: "#88c0d0", accent2: "#81a1c1", accent3: "#ebcb8b", border: "#88c0d033", card: "#3b4252", codeBg: "#242933", sbBg: "#2e3440", hdrBg: "linear-gradient(135deg,#242933,#2e3440,#3b4252)" },
  { id: "synthwave", name: "Synthwave 84", bg: "#262335", bg2: "#34294f", bg3: "#2d2642", bg4: "#1d1a29", text: "#f3eee8", text2: "#dfd6ce", text3: "#848bbd", accent: "#ff7edb", accent2: "#36f9f6", accent3: "#fede5d", border: "#ff7edb33", card: "#34294f", codeBg: "#1d1a29", sbBg: "#262335", hdrBg: "linear-gradient(135deg,#1d1a29,#262335,#34294f)" },
  { id: "gruvbox", name: "Gruvbox Dark", bg: "#282828", bg2: "#3c3836", bg3: "#32302f", bg4: "#1d2021", text: "#ebdbb2", text2: "#d5c4a1", text3: "#928374", accent: "#fabd2f", accent2: "#b8bb26", accent3: "#fe8019", border: "#fabd2f33", card: "#3c3836", codeBg: "#1d2021", sbBg: "#282828", hdrBg: "linear-gradient(135deg,#1d2021,#282828,#3c3836)" },
  { id: "tokyo_night", name: "Tokyo Night", bg: "#1a1b26", bg2: "#24283b", bg3: "#1f2231", bg4: "#16161e", text: "#c0caf5", text2: "#a9b1d6", text3: "#565f89", accent: "#7aa2f7", accent2: "#bb9af7", accent3: "#ff9e64", border: "#7aa2f733", card: "#24283b", codeBg: "#16161e", sbBg: "#1a1b26", hdrBg: "linear-gradient(135deg,#16161e,#1a1b26,#24283b)" },
  { id: "matrix", name: "The Matrix", bg: "#0d1112", bg2: "#131a18", bg3: "#101515", bg4: "#090c0c", text: "#d1f1e2", text2: "#a4debe", text3: "#4b7a63", accent: "#00ff41", accent2: "#008f11", accent3: "#003b00", border: "#00ff4133", card: "#131a18", codeBg: "#090c0c", sbBg: "#0d1112", hdrBg: "linear-gradient(135deg,#090c0c,#0d1112,#131a18)" },
  { id: "cherry", name: "Cherry Blossom", bg: "#2a1e26", bg2: "#3d2833", bg3: "#33232c", bg4: "#21151c", text: "#ffeef6", text2: "#f4d1e2", text3: "#a37c96", accent: "#ffb3d9", accent2: "#e18bb3", accent3: "#ff7eb6", border: "#ffb3d933", card: "#3d2833", codeBg: "#21151c", sbBg: "#2a1e26", hdrBg: "linear-gradient(135deg,#21151c,#2a1e26,#3d2833)" },
  { id: "cafe", name: "Cozy Cafe", bg: "#f4ece1", bg2: "#fffdfa", bg3: "#eee3d4", bg4: "#e6d6c3", text: "#4a3f35", text2: "#665a4c", text3: "#998b7e", accent: "#8c5e39", accent2: "#bc8054", accent3: "#d6a57c", border: "#8c5e3933", card: "#fffdfa", codeBg: "#e6d6c3", sbBg: "#f4ece1", hdrBg: "linear-gradient(135deg,#bc8054,#8c5e39)" },
  { id: "sunset", name: "Outrun Sunset", bg: "#190b24", bg2: "#2a1338", bg3: "#210e2e", bg4: "#120718", text: "#fceeff", text2: "#e0c4eb", text3: "#8a659e", accent: "#ff4a8b", accent2: "#ff952b", accent3: "#ffc62b", border: "#ff4a8b33", card: "#2a1338", codeBg: "#120718", sbBg: "#190b24", hdrBg: "linear-gradient(135deg,#2a1338,#ff4a8b,#ff952b)" },
  { id: "cyber", name: "Cyber Neon", bg: "#0b0c10", bg2: "#1f2833", bg3: "#161c24", bg4: "#050608", text: "#c5c6c7", text2: "#9ba1a6", text3: "#4a545c", accent: "#66fcf1", accent2: "#45a29e", accent3: "#ffffff", border: "#66fcf133", card: "#1f2833", codeBg: "#050608", sbBg: "#0b0c10", hdrBg: "linear-gradient(135deg,#050608,#0b0c10,#1f2833)" },
  { id: "hacker", name: "Term Hacker", bg: "#000000", bg2: "#111111", bg3: "#080808", bg4: "#000000", text: "#33ff00", text2: "#2cbd00", text3: "#166000", accent: "#33ff00", accent2: "#ffffff", accent3: "#88ff88", border: "#33ff0033", card: "#111111", codeBg: "#000000", sbBg: "#000000", hdrBg: "linear-gradient(135deg,#000000,#080808,#111111)" },
  { id: "vue", name: "Vue Green", bg: "#34495e", bg2: "#41b883", bg3: "#3b7b62", bg4: "#2c3e50", text: "#ffffff", text2: "#e2f0e9", text3: "#a1ccb8", accent: "#41b883", accent2: "#34495e", accent3: "#f1c40f", border: "#41b88333", card: "#41b883", codeBg: "#2c3e50", sbBg: "#34495e", hdrBg: "linear-gradient(135deg,#2c3e50,#34495e,#41b883)" },
  { id: "blood", name: "Blood Moon", bg: "#1a0404", bg2: "#2b0a0a", bg3: "#210707", bg4: "#100202", text: "#ffd6d6", text2: "#d69c9c", text3: "#8f4e4e", accent: "#e62e2e", accent2: "#ff6b6b", accent3: "#facc15", border: "#e62e2e33", card: "#2b0a0a", codeBg: "#100202", sbBg: "#1a0404", hdrBg: "linear-gradient(135deg,#100202,#1a0404,#2b0a0a)" },
  { id: "halloween", name: "Halloween", bg: "#18181b", bg2: "#27272a", bg3: "#202023", bg4: "#0f0f11", text: "#f4f4f5", text2: "#d4d4d8", text3: "#71717a", accent: "#f97316", accent2: "#a855f7", accent3: "#84cc16", border: "#f9731633", card: "#27272a", codeBg: "#0f0f11", sbBg: "#18181b", hdrBg: "linear-gradient(135deg,#0f0f11,#18181b,#f97316)" },
  { id: "ice", name: "Arctic Ice", bg: "#e0f2fe", bg2: "#ffffff", bg3: "#dcf0fd", bg4: "#cce6f8", text: "#082f49", text2: "#0c4a6e", text3: "#38bdf8", accent: "#0284c7", accent2: "#0284c7", accent3: "#fbbf24", border: "#0284c733", card: "#ffffff", codeBg: "#cce6f8", sbBg: "#e0f2fe", hdrBg: "linear-gradient(135deg,#cce6f8,#0284c7)" },
  { id: "lava", name: "Magma Lair", bg: "#220000", bg2: "#3a1010", bg3: "#2d0707", bg4: "#160000", text: "#ffebeb", text2: "#ffb0b0", text3: "#b35050", accent: "#ff3d3d", accent2: "#ffa600", accent3: "#ffff00", border: "#ff3d3d33", card: "#3a1010", codeBg: "#160000", sbBg: "#220000", hdrBg: "linear-gradient(135deg,#160000,#ff3d3d,#ffa600)" },
  { id: "discord", name: "Gamer Dark", bg: "#36393f", bg2: "#2f3136", bg3: "#32353b", bg4: "#202225", text: "#dcddde", text2: "#b9bbbe", text3: "#72767d", accent: "#5865F2", accent2: "#eb459f", accent3: "#fee75c", border: "#5865F233", card: "#2f3136", codeBg: "#202225", sbBg: "#36393f", hdrBg: "linear-gradient(135deg,#202225,#36393f,#5865F2)" },
  { id: "rose", name: "Rose Pine", bg: "#191724", bg2: "#1f1d2e", bg3: "#1c1a29", bg4: "#121019", text: "#e0def4", text2: "#908caa", text3: "#6e6a86", accent: "#ebbcba", accent2: "#31748f", accent3: "#f6c177", border: "#ebbcba33", card: "#1f1d2e", codeBg: "#121019", sbBg: "#191724", hdrBg: "linear-gradient(135deg,#121019,#191724,#1f1d2e)" },
  {
        id: "prop-container-queries",
        title: "container queries",
        badge: "LAYOUT",
        emoji: "📦",
        demoHTML: `<div class="demo-text" style="padding:20px;text-align:center;">Demo: container queries</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>@container</code> property/feature is a modern CSS capability that enables developers to create more powerful, maintainable, and performant stylesheets. It represents the cutting edge of CSS evolution.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser processes <code>@container</code>, the rendering engine creates optimized paint and composite layers. This modern CSS feature leverages hardware acceleration where possible for smooth, jank-free rendering.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use <code>@container</code> with progressive enhancement in mind. Always provide fallbacks for browsers that don't yet support this feature. Check caniuse.com for current browser support.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Using @container */
.example {
    /* @container implementation */
    /* Check the interactive demo panel for live usage! */
}
    </code></pre>
        `
    }
,
  {
        id: "prop-has",
        title: ":has() selector",
        badge: "SELECTORS",
        emoji: "🎯",
        demoHTML: `<div class="demo-text" style="padding:20px;text-align:center;">Demo: :has() selector</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>:has()</code> property/feature is a modern CSS capability that enables developers to create more powerful, maintainable, and performant stylesheets. It represents the cutting edge of CSS evolution.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser processes <code>:has()</code>, the rendering engine creates optimized paint and composite layers. This modern CSS feature leverages hardware acceleration where possible for smooth, jank-free rendering.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use <code>:has()</code> with progressive enhancement in mind. Always provide fallbacks for browsers that don't yet support this feature. Check caniuse.com for current browser support.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Using :has() */
.example {
    /* :has() implementation */
    /* Check the interactive demo panel for live usage! */
}
    </code></pre>
        `
    }
,
  {
        id: "prop-subgrid",
        title: "subgrid",
        badge: "LAYOUT",
        emoji: "📐",
        demoHTML: `<div class="demo-text" style="padding:20px;text-align:center;">Demo: subgrid</div>`,
        content: `

    <h3>📌 Deep Dive: Advanced Concept</h3>
    <p>The <code>subgrid</code> property/feature is a modern CSS capability that enables developers to create more powerful, maintainable, and performant stylesheets. It represents the cutting edge of CSS evolution.</p>
    <h4>⚙️ Under the Hood</h4>
    <p>When the browser processes <code>subgrid</code>, the rendering engine creates optimized paint and composite layers. This modern CSS feature leverages hardware acceleration where possible for smooth, jank-free rendering.</p>
    <div class="cb">
      <div class="cb-h"><span>💡 Pro Tip & Best Practice</span></div>
      <div class="cb-b"><p>Use <code>subgrid</code> with progressive enhancement in mind. Always provide fallbacks for browsers that don't yet support this feature. Check caniuse.com for current browser support.</p></div>
    </div>
    <h4>💻 Advanced Implementation Example</h4>
    <pre><code class="language-css">
/* Using subgrid */
.example {
    /* subgrid implementation */
    /* Check the interactive demo panel for live usage! */
}
    </code></pre>
        `
    }

];

// UI Interactions
function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('overlay');
    if (sb.classList.contains('open')) {
        sb.classList.remove('open');
        ov.style.opacity = '0';
        setTimeout(() => ov.style.display = 'none', 300);
    } else {
        sb.classList.add('open');
        ov.style.display = 'block';
        setTimeout(() => ov.style.opacity = '1', 10);
    }
}

function updateMasteryUI() {
    const count = cssMasteredTags.length;
    document.getElementById('masteryCountStat').innerText = count;
    document.getElementById('sbMasteryCount').innerText = count;
    
    // Level Math
    let level = Math.floor(cssUserXP / 500) + 1;
    document.getElementById('masteryLevel').innerText = level;

    // Progress Bar
    const progress = (count / TAGS.length) * 100;
    document.getElementById('masteryProgressBar').style.width = progress + '%';

    // Ranks
    const rankInfo = getRank(count);
    const rankEl = document.getElementById('userRank');
    if(rankEl) {
        rankEl.innerText = rankInfo.title;
        rankEl.style.color = rankInfo.color;
    }
}

function toggleMastery(id, btn) {
    if (cssMasteredTags.includes(id)) {
        cssMasteredTags = cssMasteredTags.filter(t => t !== id);
        cssUserXP -= 50;
        btn.classList.remove('mastered');
        btn.innerHTML = '🎓 Mark Mastered';
    } else {
        cssMasteredTags.push(id);
        cssUserXP += 50;
        btn.classList.add('mastered');
        btn.innerHTML = '✅ Mastered (+50 XP)';
    }
    
    try {
        localStorage.setItem('cssMasteredTags', JSON.stringify(cssMasteredTags));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
    
    try {
        localStorage.setItem('cssUserXP', cssUserXP.toString());
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
    updateMasteryUI();
}

function toggleFavorite(id, btn) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(t => t !== id);
        btn.innerHTML = '☆';
    } else {
        favorites.push(id);
        btn.innerHTML = '⭐';
    }
    
    try {
        localStorage.setItem('cssFavorites', JSON.stringify(favorites));
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
}

// Global Editor Instance
let pgEditorInstance = null;

function renderAll() {
    const nav = document.getElementById("sbNav");
    const content = document.getElementById("content");
    let navHTML = "";
    let contentHTML = "";

    // Set totals
    if(document.getElementById('totalTagsStat')) document.getElementById('totalTagsStat').innerText = TAGS.length;
    if(document.getElementById('totalTagsDesc')) document.getElementById('totalTagsDesc').innerText = TAGS.length;

    TAGS.forEach((tag, idx) => {
        navHTML += `<a href="#${tag.id}" data-badge="${tag.badge}">
            <span>${tag.emoji} ${tag.title}</span>
            <span class="badge ${tag.badge.toLowerCase()}">${tag.badge}</span>
        </a>`;

        contentHTML += `<section id="${tag.id}" class="tag-card">
            <div class="tc-header">
                <h2>${tag.emoji} ${tag.title}</h2>
                <div style="display:flex; gap:10px; align-items:center;">
                    <span class="badge ${tag.badge.toLowerCase()}">${tag.badge}</span>
                    <button class="fav-btn" onclick="toggleFavorite('${tag.id}', this)" aria-label="Add to favorites">
                        ${favorites.includes(tag.id) ? '⭐' : '☆'}
                    </button>
                </div>
            </div>
            <div class="tc-body">
                ${tag.content}
                <div style="margin-top: 15px; text-align:right;">
                    <button class="cp-btn" onclick="openPlayground('${tag.id}')">▶️ Try it in Live Editor</button>
                </div>
            </div>
            <div class="tc-footer">
                <button class="mastery-btn ${cssMasteredTags.includes(tag.id) ? 'mastered' : ''}" 
                    onclick="toggleMastery('${tag.id}', this)">
                    ${cssMasteredTags.includes(tag.id) ? '✅ Mastered (+50 XP)' : '🎓 Mark Mastered'}
                </button>
            </div>
        </section>`;
    });

    if(nav) nav.innerHTML = navHTML;
    if(content) content.innerHTML = contentHTML;
    
    updateMasteryUI();
    applyTheme(activeTheme);
}

function applyTheme(themeId) {
    activeTheme = themeId;
    
    try {
        localStorage.setItem('activeTheme', themeId);
    } catch(e) {
        console.warn('localStorage not available for saving theme');
    }
    document.documentElement.setAttribute('data-theme', themeId);
    
    const theme = PRESET_THEMES.find(t => t.id === themeId) || PRESET_THEMES[0];
    const root = document.documentElement;
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--bg2', theme.bg2);
    root.style.setProperty('--bg3', theme.bg3);
    root.style.setProperty('--bg4', theme.bg4);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--text2', theme.text2);
    root.style.setProperty('--text3', theme.text3);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent2', theme.accent2);
    root.style.setProperty('--accent3', theme.accent3);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--codeBg', theme.codeBg);
    root.style.setProperty('--sbBg', theme.sbBg);
    root.style.setProperty('--hdrBg', theme.hdrBg);
}

// Playground Logic Custom-Built for CSS
let currentDemoHTML = "";

function openPlayground(tagId) {
    const tag = TAGS.find(t => t.id === tagId);
    if(!tag) return;
    
    currentDemoHTML = tag.demoHTML;
    
    // Extract the CSS from the code block
    const codeMatch = tag.content.match(/<pre><code>([\s\S]*?)<\/code><\/pre>/);
    let initialCSS = codeMatch ? codeMatch[1].trim() : "/* Write your CSS here */\n";

    document.getElementById('playgroundModal').showModal();

    if (!pgEditorInstance) {
        const ta = document.getElementById('pg-editor');
        pgEditorInstance = CodeMirror.fromTextArea(ta, {
            mode: 'css',
            theme: 'monokai',
            lineNumbers: true,
            autoCloseBrackets: true,
            matchBrackets: true,
            indentUnit: 2,
            tabSize: 2
        });
        
        pgEditorInstance.on('change', () => {
            updatePgPreview();
        });
    }

    pgEditorInstance.setValue(initialCSS);
    setTimeout(() => pgEditorInstance.refresh(), 100);
    updatePgPreview();
}

function updatePgPreview() {
    if (!pgEditorInstance) return;
    const userCSS = pgEditorInstance.getValue();
    const iframe = document.getElementById('playground-frame');
    
    // Build a sandbox containing the specific tag's demo HTML, and inject the user's CSS
    const srcdoc = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                    background-color: #f8fafc; 
                    color: #0f172a; 
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                }
                /* INJECTED USER CSS */
                ${userCSS}
            </style>
        </head>
        <body>
            ${currentDemoHTML}
        </body>
        </html>
    `;
    
    iframe.srcdoc = srcdoc;
}

function closePlayground() {
    document.getElementById('playgroundModal').close();
}

// Init
window.onload = () => {
    renderAll();
    
    // Scroll progress
    window.onscroll = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        const pb = document.getElementById("progress-bar");
        if(pb) pb.style.width = scrolled + "%";
    };
    
    // Bind search
    const sbSearch = document.getElementById('sbSearch');
    if(sbSearch) {
        sbSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const links = document.querySelectorAll('#sbNav a');
            links.forEach(l => {
                if(l.innerText.toLowerCase().includes(term)) l.style.display = 'flex';
                else l.style.display = 'none';
            });
        });
    }

    // Bind Sidebar Close
    const sbClose = document.getElementById('sbClose');
    if(sbClose) {
        sbClose.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            if(sidebar) sidebar.classList.remove('open');
        });
    }
};

// Copy code function
function copyCode(btn) {
    const code = btn.parentElement.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    const og = btn.innerHTML;
    btn.innerHTML = "✅ Copied";
    setTimeout(() => btn.innerHTML = og, 2000);
}
// Splash Screen Logic
setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 800);
    }
}, 1500);

// Code optimized and documented by Sanskar Developer
