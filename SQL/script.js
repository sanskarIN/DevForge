const tags = [
    { id: 1, title: 'SELECT Basics', badge: 'Beginner', emoji: '🔍', defaultCode: 'SELECT * FROM users;', content: '<h3>SELECT Basics</h3><p>The SELECT statement is used to select data from a database.</p>' },
    { id: 2, title: 'WHERE Clause', badge: 'Beginner', emoji: '🎯', defaultCode: 'SELECT * FROM users WHERE age > 18;', content: '<h3>WHERE Clause</h3><p>The WHERE clause is used to filter records.</p>' },
    { id: 3, title: 'AND/OR/NOT', badge: 'Beginner', emoji: '🔀', defaultCode: 'SELECT * FROM users WHERE age > 18 AND status = "active";', content: '<h3>AND, OR, NOT</h3><p>Operators used to combine multiple conditions in a WHERE clause.</p>' },
    { id: 4, title: 'ORDER BY', badge: 'Beginner', emoji: '⬇️', defaultCode: 'SELECT * FROM users ORDER BY name ASC;', content: '<h3>ORDER BY</h3><p>Sorts the result set in ascending or descending order.</p>' },
    { id: 5, title: 'INSERT INTO', badge: 'Beginner', emoji: '➕', defaultCode: 'INSERT INTO users (name, age) VALUES ("Alice", 25);', content: '<h3>INSERT INTO</h3><p>Used to insert new records in a table.</p>' },
    { id: 6, title: 'UPDATE', badge: 'Intermediate', emoji: '🔄', defaultCode: 'UPDATE users SET age = 26 WHERE name = "Alice";', content: '<h3>UPDATE</h3><p>Used to modify the existing records in a table.</p>' },
    { id: 7, title: 'DELETE', badge: 'Intermediate', emoji: '❌', defaultCode: 'DELETE FROM users WHERE name = "Alice";', content: '<h3>DELETE</h3><p>Used to delete existing records in a table.</p>' },
    { id: 8, title: 'DISTINCT', badge: 'Intermediate', emoji: '💎', defaultCode: 'SELECT DISTINCT country FROM users;', content: '<h3>DISTINCT</h3><p>Used to return only distinct (different) values.</p>' },
    { id: 9, title: 'LIMIT/OFFSET', badge: 'Intermediate', emoji: '⏭️', defaultCode: 'SELECT * FROM users LIMIT 10 OFFSET 5;', content: '<h3>LIMIT / OFFSET</h3><p>Used to restrict the number of rows returned and specify a starting point.</p>' },
    { id: 10, title: 'Aggregate Functions', badge: 'Intermediate', emoji: '📊', defaultCode: 'SELECT COUNT(*) FROM users;', content: '<h3>Aggregate Functions</h3><p>Functions like COUNT, SUM, AVG, MIN, MAX.</p>' },
    { id: 11, title: 'GROUP BY', badge: 'Intermediate', emoji: '🗂️', defaultCode: 'SELECT country, COUNT(*) FROM users GROUP BY country;', content: '<h3>GROUP BY</h3><p>Groups rows that have the same values into summary rows.</p>' },
    { id: 12, title: 'HAVING', badge: 'Intermediate', emoji: '⚖️', defaultCode: 'SELECT country, COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 5;', content: '<h3>HAVING</h3><p>Added to SQL because the WHERE keyword could not be used with aggregate functions.</p>' },
    { id: 13, title: 'JOINs (INNER, LEFT, RIGHT, FULL)', badge: 'Advanced', emoji: '🔗', defaultCode: 'SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;', content: '<h3>JOINs</h3><p>Used to combine rows from two or more tables, based on a related column between them.</p>' },
    { id: 14, title: 'Self JOIN', badge: 'Advanced', emoji: '🪞', defaultCode: 'SELECT A.name, B.name FROM employees A, employees B WHERE A.manager_id = B.id;', content: '<h3>Self JOIN</h3><p>A regular join, but the table is joined with itself.</p>' },
    { id: 15, title: 'Subqueries', badge: 'Advanced', emoji: '📦', defaultCode: 'SELECT name FROM users WHERE id IN (SELECT user_id FROM orders);', content: '<h3>Subqueries</h3><p>A query nested inside another query.</p>' },
    { id: 16, title: 'UNION/INTERSECT/EXCEPT', badge: 'Advanced', emoji: '🧮', defaultCode: 'SELECT city FROM customers UNION SELECT city FROM suppliers;', content: '<h3>UNION</h3><p>Combines the result sets of two or more SELECT statements.</p>' },
    { id: 17, title: 'CREATE TABLE', badge: 'Intermediate', emoji: '🏗️', defaultCode: 'CREATE TABLE users (id INT, name VARCHAR(255));', content: '<h3>CREATE TABLE</h3><p>Creates a new table in the database.</p>' },
    { id: 18, title: 'ALTER TABLE', badge: 'Intermediate', emoji: '🛠️', defaultCode: 'ALTER TABLE users ADD email VARCHAR(255);', content: '<h3>ALTER TABLE</h3><p>Used to add, delete, or modify columns in an existing table.</p>' },
    { id: 19, title: 'Primary Keys & Foreign Keys', badge: 'Advanced', emoji: '🔑', defaultCode: 'ALTER TABLE users ADD PRIMARY KEY (id);', content: '<h3>Keys</h3><p>Ensure data integrity and establish relationships between tables.</p>' },
    { id: 20, title: 'Indexes', badge: 'Advanced', emoji: '⚡', defaultCode: 'CREATE INDEX idx_name ON users (name);', content: '<h3>Indexes</h3><p>Used to retrieve data from the database more quickly than otherwise.</p>' },
    { id: 21, title: 'Views', badge: 'Advanced', emoji: '👁️', defaultCode: 'CREATE VIEW active_users AS SELECT * FROM users WHERE status = "active";', content: '<h3>Views</h3><p>A virtual table based on the result-set of an SQL statement.</p>' },
    { id: 22, title: 'Transactions', badge: 'Expert', emoji: '💼', defaultCode: 'BEGIN; UPDATE accounts SET balance = balance - 100; COMMIT;', content: '<h3>Transactions</h3><p>Sequences of operations performed as a single logical unit of work.</p>' },
    { id: 23, title: 'Stored Procedures', badge: 'Expert', emoji: '📜', defaultCode: 'CREATE PROCEDURE GetAllUsers() BEGIN SELECT * FROM users; END;', content: '<h3>Stored Procedures</h3><p>Prepared SQL code that you can save, so the code can be reused over and over again.</p>' },
    { id: 24, title: 'Triggers', badge: 'Expert', emoji: '🔫', defaultCode: 'CREATE TRIGGER before_insert_users BEFORE INSERT ON users FOR EACH ROW SET NEW.created_at = NOW();', content: '<h3>Triggers</h3><p>SQL code that is automatically executed in response to certain events on a particular table.</p>' },
    { id: 25, title: 'Window Functions', badge: 'Expert', emoji: '🪟', defaultCode: 'SELECT name, salary, RANK() OVER (ORDER BY salary DESC) as rank FROM employees;', content: '<h3>Window Functions</h3><p>Perform calculations across a set of table rows that are somehow related to the current row.</p>' },
    { id: 26, title: 'Common Table Expressions (CTE)', badge: 'Expert', emoji: '📝', defaultCode: 'WITH cte AS (SELECT * FROM users) SELECT * FROM cte;', content: '<h3>CTE</h3><p>A temporary named result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement.</p>' },
    { id: 27, title: 'CASE Expression', badge: 'Advanced', emoji: '🔠', defaultCode: 'SELECT name, CASE WHEN age >= 18 THEN "Adult" ELSE "Minor" END AS age_group FROM users;', content: '<h3>CASE</h3><p>Goes through conditions and returns a value when the first condition is met.</p>' },
    { id: 28, title: 'String Functions', badge: 'Intermediate', emoji: '🧵', defaultCode: 'SELECT CONCAT(first_name, " ", last_name) AS full_name FROM users;', content: '<h3>String Functions</h3><p>Functions that perform operations on character strings.</p>' },
    { id: 29, title: 'Date Functions', badge: 'Intermediate', emoji: '📅', defaultCode: 'SELECT CURRENT_DATE();', content: '<h3>Date Functions</h3><p>Functions that operate on date and time values.</p>' },
    { id: 30, title: 'Database Normalization', badge: 'Expert', emoji: '📐', defaultCode: '-- Conceptual topic, no direct syntax. E.g., 1NF, 2NF, 3NF', content: '<h3>Normalization</h3><p>The process of structuring a database to reduce data redundancy and improve data integrity.</p>' }
];

let xp = parseInt(localStorage.getItem('sqlUserXP')) || 0;
document.getElementById('xp-display').innerText = xp;

const topicList = document.getElementById('topic-list');
const contentArea = document.getElementById('content-area');
const editor = document.getElementById('code-editor');

tags.forEach(tag => {
    const li = document.createElement('li');
    li.innerHTML = `${tag.emoji} ${tag.title} <span style="font-size: 0.8em; color: #aaa;">[${tag.badge}]</span>`;
    li.onclick = () => loadTopic(tag);
    topicList.appendChild(li);
});

function loadTopic(tag) {
    contentArea.innerHTML = tag.content;
    editor.value = tag.defaultCode;
    // Basic gamification
    let mastered = JSON.parse(localStorage.getItem('sqlMasteredTags')) || [];
    if (!mastered.includes(tag.id)) {
        mastered.push(tag.id);
        localStorage.setItem('sqlMasteredTags', JSON.stringify(mastered));
        xp += 10;
        localStorage.setItem('sqlUserXP', xp);
        document.getElementById('xp-display').innerText = xp;
    }
}

document.getElementById('run-btn').addEventListener('click', () => {
    document.getElementById('output').innerHTML = '<p style="color: #0f0;">> Execution simulated successfully!</p>';
});
