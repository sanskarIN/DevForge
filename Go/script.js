const TAGS = [
    { id: 1, title: 'Variables & Constants', badge: 'Basics', emoji: '📦', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    var x int = 10\n    const y = "Hello"\n    fmt.Println(x, y)\n}', content: '<div class="concept-content"><h2>Variables & Constants</h2><p>In Go, variables are explicitly declared and used by the compiler to e.g. check type-correctness of function calls.</p><pre><code>var a = "initial"\nvar b, c int = 1, 2\nd := true</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>The <code>:=</code> syntax is shorthand for declaring and initializing a variable.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Constants cannot be declared using the <code>:=</code> syntax.</p></div></div>' },
    { id: 2, title: 'Data Types', badge: 'Basics', emoji: '🔤', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    var i int = 42\n    var f float64 = 3.14\n    var b bool = true\n    var s string = "Go"\n    fmt.Println(i, f, b, s)\n}', content: '<div class="concept-content"><h2>Data Types</h2><p>Go statically types variables. Basic types include numeric, string, and boolean types.</p><pre><code>int, float64, string, bool</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Go has specific sized integers like int8, int16, int32, int64 to optimize memory.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use float64 over float32 unless you have strict memory constraints.</p></div></div>' },
    { id: 3, title: 'Functions', badge: 'Core', emoji: '🔧', defaultCode: 'package main\n\nimport "fmt"\n\nfunc add(x int, y int) int {\n    return x + y\n}\n\nfunc main() {\n    fmt.Println(add(5, 7))\n}', content: '<div class="concept-content"><h2>Functions</h2><p>Functions are central to Go. They are declared with the <code>func</code> keyword.</p><pre><code>func name(params) returnType {\n    // body\n}</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Functions are first-class citizens in Go.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>When two or more consecutive named function parameters share a type, you can omit the type from all but the last.</p></div></div>' },
    { id: 4, title: 'Multiple Return Values', badge: 'Core', emoji: '🔄', defaultCode: 'package main\n\nimport "fmt"\n\nfunc swap(x, y string) (string, string) {\n    return y, x\n}\n\nfunc main() {\n    a, b := swap("hello", "world")\n    fmt.Println(a, b)\n}', content: '<div class="concept-content"><h2>Multiple Return Values</h2><p>Go has built-in support for multiple return values, often used to return both result and error.</p><pre><code>func doSomething() (int, error)</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>Named return values treat variables as defined at the top of the function.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use the blank identifier <code>_</code> to discard unwanted return values.</p></div></div>' },
    { id: 5, title: 'Control Flow', badge: 'Core', emoji: '🔀', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    for i := 0; i < 5; i++ {\n        if i%2 == 0 {\n            fmt.Println(i, "is even")\n        } else {\n            fmt.Println(i, "is odd")\n        }\n    }\n}', content: '<div class="concept-content"><h2>Control Flow (if/switch/for)</h2><p>Go has only one looping construct, the <code>for</code> loop. <code>if</code> statements do not need parentheses.</p><pre><code>for i := 0; i < 10; i++ {}</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Go switch cases break automatically; you do not need a break statement.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use <code>fallthrough</code> in a switch to execute the next case block.</p></div></div>' },
    { id: 6, title: 'Arrays & Slices', badge: 'Data', emoji: '📚', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    primes := [6]int{2, 3, 5, 7, 11, 13}\n    var s []int = primes[1:4]\n    fmt.Println(s)\n}', content: '<div class="concept-content"><h2>Arrays & Slices</h2><p>Arrays have fixed size. Slices are dynamically-sized, flexible views into elements of an array.</p><pre><code>var a [5]int\ns := make([]int, 0, 5)</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>A slice is a descriptor containing a pointer to the array, the length, and the capacity.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use <code>append</code> to add elements to a slice, it manages capacity automatically.</p></div></div>' },
    { id: 7, title: 'Maps', badge: 'Data', emoji: '🗺️', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    m := make(map[string]int)\n    m["Answer"] = 42\n    fmt.Println(m["Answer"])\n}', content: '<div class="concept-content"><h2>Maps</h2><p>Maps map keys to values. They are equivalent to dictionaries or hash tables in other languages.</p><pre><code>m := map[string]Vertex{\n    "Bell Labs": {40.6, -74.3},\n}</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Maps in Go are not safe for concurrent use. Use <code>sync.Map</code> or mutexes.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Check if a key exists using two values: <code>v, ok := m[key]</code>.</p></div></div>' },
    { id: 8, title: 'Structs', badge: 'Types', emoji: '🏗️', defaultCode: 'package main\n\nimport "fmt"\n\ntype Vertex struct {\n    X, Y int\n}\n\nfunc main() {\n    v := Vertex{1, 2}\n    v.X = 4\n    fmt.Println(v)\n}', content: '<div class="concept-content"><h2>Structs</h2><p>A struct is a collection of fields, used to group data together to form records.</p><pre><code>type Person struct {\n    Name string\n    Age  int\n}</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>Struct fields are accessed using a dot.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Exported fields must start with a capital letter.</p></div></div>' },
    { id: 9, title: 'Pointers', badge: 'Memory', emoji: '👉', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    i := 42\n    p := &i\n    *p = 21\n    fmt.Println(i)\n}', content: '<div class="concept-content"><h2>Pointers</h2><p>Go has pointers. A pointer holds the memory address of a value.</p><pre><code>var p *int\ni := 42\np = &i</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Unlike C, Go has no pointer arithmetic.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use pointers to modify values in a function or to avoid copying large structs.</p></div></div>' },
    { id: 10, title: 'Methods', badge: 'OOP', emoji: '🛠️', defaultCode: 'package main\n\nimport "fmt"\n\ntype Rect struct {\n    width, height int\n}\n\nfunc (r *Rect) area() int {\n    return r.width * r.height\n}\n\nfunc main() {\n    r := Rect{10, 5}\n    fmt.Println(r.area())\n}', content: '<div class="concept-content"><h2>Methods</h2><p>A method is a function with a special receiver argument.</p><pre><code>func (s *StructName) MethodName() {}</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>You can declare methods with pointer or value receivers.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use pointer receivers to modify the receiver or avoid copying large values.</p></div></div>' },
    { id: 11, title: 'Interfaces', badge: 'OOP', emoji: '🔌', defaultCode: 'package main\n\nimport "fmt"\n\ntype Speaker interface {\n    Speak() string\n}\n\ntype Dog struct{}\n\nfunc (d Dog) Speak() string {\n    return "Woof!"\n}\n\nfunc main() {\n    var s Speaker = Dog{}\n    fmt.Println(s.Speak())\n}', content: '<div class="concept-content"><h2>Interfaces</h2><p>An interface type is defined as a set of method signatures. Interfaces are implemented implicitly.</p><pre><code>type Abser interface {\n    Abs() float64\n}</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Interface values can be thought of as a tuple of a value and a concrete type: (value, type).</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>The empty interface <code>interface{}</code> (or <code>any</code> in newer Go versions) may hold values of any type.</p></div></div>' },
    { id: 12, title: 'Error Handling', badge: 'Core', emoji: '⚠️', defaultCode: 'package main\n\nimport (\n    "errors"\n    "fmt"\n)\n\nfunc f(arg int) (int, error) {\n    if arg == 42 {\n        return -1, errors.New("can\'t work with 42")\n    }\n    return arg + 3, nil\n}\n\nfunc main() {\n    if r, e := f(42); e != nil {\n        fmt.Println("Failed:", e)\n    }\n}', content: '<div class="concept-content"><h2>Error Handling</h2><p>In Go it is idiomatic to communicate errors via an explicit, separate return value.</p><pre><code>if err != nil {\n    return err\n}</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>The error type is a built-in interface.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use <code>fmt.Errorf</code> with <code>%w</code> to wrap errors.</p></div></div>' },
    { id: 13, title: 'Goroutines', badge: 'Concurrency', emoji: '🚀', defaultCode: 'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc say(s string) {\n    for i := 0; i < 3; i++ {\n        time.Sleep(100 * time.Millisecond)\n        fmt.Println(s)\n    }\n}\n\nfunc main() {\n    go say("world")\n    say("hello")\n}', content: '<div class="concept-content"><h2>Goroutines</h2><p>A goroutine is a lightweight thread managed by the Go runtime.</p><pre><code>go f(x, y, z)</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Goroutines run in the same address space, so access to shared memory must be synchronized.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Goroutines are very cheap. It\'s common to have thousands or even hundreds of thousands running concurrently.</p></div></div>' },
    { id: 14, title: 'Channels', badge: 'Concurrency', emoji: '🚰', defaultCode: 'package main\n\nimport "fmt"\n\nfunc sum(s []int, c chan int) {\n    sum := 0\n    for _, v := range s {\n        sum += v\n    }\n    c <- sum\n}\n\nfunc main() {\n    s := []int{7, 2, 8, -9, 4, 0}\n    c := make(chan int)\n    go sum(s[:len(s)/2], c)\n    go sum(s[len(s)/2:], c)\n    x, y := <-c, <-c\n    fmt.Println(x, y, x+y)\n}', content: '<div class="concept-content"><h2>Channels</h2><p>Channels are a typed conduit through which you can send and receive values with the channel operator, <code>&lt;-</code>.</p><pre><code>ch := make(chan int)</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use buffered channels for asynchronous message passing.</p></div></div>' },
    { id: 15, title: 'Select Statement', badge: 'Concurrency', emoji: '🚦', defaultCode: 'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    c1 := make(chan string)\n    c2 := make(chan string)\n    go func() { time.Sleep(1 * time.Second); c1 <- "one" }()\n    go func() { time.Sleep(2 * time.Second); c2 <- "two" }()\n    for i := 0; i < 2; i++ {\n        select {\n        case msg1 := <-c1:\n            fmt.Println("received", msg1)\n        case msg2 := <-c2:\n            fmt.Println("received", msg2)\n        }\n    }\n}', content: '<div class="concept-content"><h2>Select Statement</h2><p>The select statement lets a goroutine wait on multiple communication operations.</p><pre><code>select {\ncase c <- x:\ncase <-quit:\n}</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>A select blocks until one of its cases can run, then it executes that case. It chooses one at random if multiple are ready.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use a <code>default</code> case in a select to run non-blocking receives/sends.</p></div></div>' },
    { id: 16, title: 'WaitGroups & Mutex', badge: 'Concurrency', emoji: '🔒', defaultCode: 'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    var mu sync.Mutex\n    count := 0\n    for i := 0; i < 5; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            mu.Lock()\n            count++\n            mu.Unlock()\n        }()\n    }\n    wg.Wait()\n    fmt.Println("Count:", count)\n}', content: '<div class="concept-content"><h2>WaitGroups & Mutex</h2><p>sync.WaitGroup waits for a collection of goroutines to finish. sync.Mutex provides mutual exclusion locks.</p><pre><code>var mu sync.Mutex\nmu.Lock()\n// critical section\nmu.Unlock()</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>Mutexes ensure that only one goroutine accesses a variable at a time to avoid conflicts.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Always use <code>defer wg.Done()</code> and <code>defer mu.Unlock()</code> to ensure they execute even if a panic occurs.</p></div></div>' },
    { id: 17, title: 'Packages & Imports', badge: 'Structure', emoji: '📦', defaultCode: 'package main\n\nimport (\n    "fmt"\n    "math/rand"\n)\n\nfunc main() {\n    fmt.Println("My favorite number is", rand.Intn(10))\n}', content: '<div class="concept-content"><h2>Packages & Imports</h2><p>Every Go program is made up of packages. Programs start running in package <code>main</code>.</p><pre><code>import (\n    "fmt"\n    "math"\n)</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Packages provide encapsulation and organizational structure.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>By convention, the package name is the same as the last element of the import path.</p></div></div>' },
    { id: 18, title: 'Modules (go.mod)', badge: 'Structure', emoji: '📄', defaultCode: '// No runnable code for go.mod\n// run: go mod init example.com/my-module', content: '<div class="concept-content"><h2>Modules (go.mod)</h2><p>Go modules are the standard way to manage dependencies in Go.</p><pre><code>module example.com/hello\n\ngo 1.20\n\nrequire rsc.io/quote v1.5.2</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>The <code>go.sum</code> file contains the expected cryptographic hashes of the content of specific module versions.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use <code>go mod tidy</code> to add missing and remove unused modules.</p></div></div>' },
    { id: 19, title: 'Defer/Panic/Recover', badge: 'Advanced', emoji: '🚨', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println("Recovered from", r)\n        }\n    }()\n    fmt.Println("Calling panic...")\n    panic("A severe error occurred!")\n}', content: '<div class="concept-content"><h2>Defer/Panic/Recover</h2><p>Go uses panic and recover for handling unexpected runtime errors, and defer for cleanup.</p><pre><code>defer fmt.Println("world")\nfmt.Println("hello")</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Deferred function calls are pushed onto a stack and executed in LIFO order when the surrounding function returns.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use defer for closing files and releasing mutexes.</p></div></div>' },
    { id: 20, title: 'Type Assertions', badge: 'Types', emoji: '🔍', defaultCode: 'package main\n\nimport "fmt"\n\nfunc main() {\n    var i interface{} = "hello"\n\n    s, ok := i.(string)\n    fmt.Println(s, ok)\n\n    f, ok := i.(float64)\n    fmt.Println(f, ok)\n}', content: '<div class="concept-content"><h2>Type Assertions</h2><p>A type assertion provides access to an interface value\'s underlying concrete value.</p><pre><code>t := i.(T)</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>If the interface does not hold a T, the statement will trigger a panic. Use the comma-ok idiom to test safely.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use a type switch <code>switch v := i.(type)</code> to handle multiple possible types.</p></div></div>' },
    { id: 21, title: 'Embedding', badge: 'OOP', emoji: '🔗', defaultCode: 'package main\n\nimport "fmt"\n\ntype Base struct {\n    Num int\n}\n\nfunc (b Base) Describe() string {\n    return fmt.Sprintf("base with num=%v", b.Num)\n}\n\ntype Container struct {\n    Base\n    Str string\n}\n\nfunc main() {\n    co := Container{\n        Base: Base{Num: 1},\n        Str:  "some name",\n    }\n    fmt.Println(co.Describe())\n}', content: '<div class="concept-content"><h2>Embedding</h2><p>Go does not have inheritance. Instead, it uses composition via embedding structs.</p><pre><code>type ReadWriter interface {\n    Reader\n    Writer\n}</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Methods of the embedded type come along for free, acting as if they were methods of the outer type.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>You can still access the embedded struct directly via its type name.</p></div></div>' },
    { id: 22, title: 'Generics', badge: 'Advanced', emoji: '🧬', defaultCode: 'package main\n\nimport "fmt"\n\nfunc Index[T comparable](s []T, x T) int {\n    for i, v := range s {\n        if v == x {\n            return i\n        }\n    }\n    return -1\n}\n\nfunc main() {\n    si := []int{10, 20, 15, -10}\n    fmt.Println(Index(si, 15))\n}', content: '<div class="concept-content"><h2>Generics</h2><p>Generics (added in Go 1.18) allow writing functions and data structures that work with any type.</p><pre><code>func Map[T1, T2 any](s []T1, f func(T1) T2) []T2</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>Type parameters are specified in square brackets <code>[T any]</code>.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use the <code>comparable</code> constraint when you need to use <code>==</code> or <code>!=</code> operators on the generic type.</p></div></div>' },
    { id: 23, title: 'Testing (go test)', badge: 'Tools', emoji: '🧪', defaultCode: '// file: math_test.go\npackage main\n\nimport "testing"\n\nfunc TestAdd(t *testing.T) {\n    if Add(2, 2) != 4 {\n        t.Error("Expected 2 + 2 to equal 4")\n    }\n}', content: '<div class="concept-content"><h2>Testing (go test)</h2><p>Go has a built-in testing framework via the <code>testing</code> package and the <code>go test</code> command.</p><pre><code>go test ./...</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Test functions must start with <code>Test</code> and take a pointer to <code>testing.T</code>.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use table-driven tests for comprehensive coverage with minimal code repetition.</p></div></div>' },
    { id: 24, title: 'HTTP Server', badge: 'Web', emoji: '🌐', defaultCode: 'package main\n\nimport (\n    "fmt"\n    "net/http"\n)\n\nfunc hello(w http.ResponseWriter, req *http.Request) {\n    fmt.Fprintf(w, "hello\\n")\n}\n\nfunc main() {\n    http.HandleFunc("/hello", hello)\n    http.ListenAndServe(":8090", nil)\n}', content: '<div class="concept-content"><h2>HTTP Server</h2><p>The <code>net/http</code> package provides HTTP client and server implementations.</p><pre><code>http.ListenAndServe(":8080", nil)</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>Handlers are objects implementing the <code>http.Handler</code> interface.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use <code>http.NewServeMux()</code> for better control over routing instead of the default global mux.</p></div></div>' },
    { id: 25, title: 'JSON Encoding/Decoding', badge: 'Web', emoji: '📝', defaultCode: 'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n)\n\ntype User struct {\n    Name string `json:"name"`\n    Age  int    `json:"age"`\n}\n\nfunc main() {\n    u := User{Name: "Alice", Age: 30}\n    b, _ := json.Marshal(u)\n    fmt.Println(string(b))\n}', content: '<div class="concept-content"><h2>JSON Encoding/Decoding</h2><p>The <code>encoding/json</code> package makes it easy to read and write JSON data from Go code.</p><pre><code>json.Marshal(struct)\njson.Unmarshal(bytes, &struct)</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>Struct tags like <code>\`json:"name"\`</code> dictate how fields are serialized.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Only exported (capitalized) fields can be marshaled or unmarshaled.</p></div></div>' },
    { id: 26, title: 'File I/O', badge: 'System', emoji: '📁', defaultCode: 'package main\n\nimport (\n    "fmt"\n    "os"\n)\n\nfunc main() {\n    d1 := []byte("hello\\ngo\\n")\n    err := os.WriteFile("/tmp/dat1", d1, 0644)\n    if err != nil { panic(err) }\n    fmt.Println("File written.")\n}', content: '<div class="concept-content"><h2>File I/O</h2><p>Go provides functions to work with files via the <code>os</code> and <code>io</code> packages.</p><pre><code>os.ReadFile(filename)\nos.WriteFile(filename, data, perm)</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>For large files, use buffered I/O with the <code>bufio</code> package to avoid high memory consumption.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Always use <code>defer file.Close()</code> immediately after successfully opening a file.</p></div></div>' },
    { id: 27, title: 'Context Package', badge: 'Advanced', emoji: '⏱️', defaultCode: 'package main\n\nimport (\n    "context"\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    ctx, cancel := context.WithTimeout(context.Background(), 50*time.Millisecond)\n    defer cancel()\n\n    select {\n    case <-time.After(1 * time.Second):\n        fmt.Println("overslept")\n    case <-ctx.Done():\n        fmt.Println(ctx.Err()) // context deadline exceeded\n    }\n}', content: '<div class="concept-content"><h2>Context Package</h2><p>Context carries deadlines, cancellation signals, and other request-scoped values across API boundaries.</p><pre><code>ctx, cancel := context.WithCancel(context.Background())</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>It is standard practice to pass a Context as the first parameter to functions that do I/O or network calls.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Never store Contexts inside a struct type; pass them explicitly to each function that needs them.</p></div></div>' },
    { id: 28, title: 'Reflection', badge: 'Advanced', emoji: '🪞', defaultCode: 'package main\n\nimport (\n    "fmt"\n    "reflect"\n)\n\nfunc main() {\n    var x float64 = 3.4\n    v := reflect.ValueOf(x)\n    fmt.Println("type:", v.Type())\n    fmt.Println("value:", v.Float())\n}', content: '<div class="concept-content"><h2>Reflection</h2><p>Reflection allows a program to inspect its own structure, particularly through types; it\'s powerful but should be used sparingly.</p><pre><code>reflect.TypeOf(x)\nreflect.ValueOf(x)</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p>The <code>encoding/json</code> package heavily relies on reflection to map JSON keys to struct fields.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Reflection is slower than statically typed code. Use interfaces when possible instead.</p></div></div>' },
    { id: 29, title: 'Build Tags', badge: 'Tools', emoji: '🏷️', defaultCode: '// +build linux,386 darwin\n\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Specific OS Build")\n}', content: '<div class="concept-content"><h2>Build Tags</h2><p>Build tags specify conditions under which a file should be included in the package during the build process.</p><pre><code>//go:build linux || darwin</code></pre><div class="deep-dive"><h3>Under the Hood</h3><p>The older syntax <code>// +build</code> is still supported but <code>//go:build</code> is preferred in modern Go.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Use build tags to create OS-specific implementations of functions.</p></div></div>' },
    { id: 30, title: 'Go Tools (fmt, vet, lint)', badge: 'Tools', emoji: '🧰', defaultCode: '// No runnable code. Run in terminal:\n// go fmt ./...\n// go vet ./...', content: '<div class="concept-content"><h2>Go Tools (fmt, vet, lint)</h2><p>Go comes with a rich set of tools to format, analyze, and maintain code.</p><pre><code>go fmt\ngo vet</code></pre><div class="deep-dive"><h3>Deep Dive</h3><p><code>go fmt</code> automatically formats Go source code. <code>go vet</code> examines Go source code and reports suspicious constructs.</p></div><div class="pro-tip"><h3>Pro Tip</h3><p>Configure your editor to run <code>go fmt</code> and <code>goimports</code> on save.</p></div></div>' }
];

let xp = parseInt(localStorage.getItem('goUserXP')) || 0;
let masteredTags = JSON.parse(localStorage.getItem('goMasteredTags')) || [];
let favorites = JSON.parse(localStorage.getItem('goFavorites')) || [];

const themes = [
    { name: 'Dark Glass (Default)', bg: '#0b0f19', text: '#f8fafc', a1: '#6c63ff', a2: '#3ecfcf' },
    { name: 'Gopher Blue', bg: '#00add8', text: '#ffffff', a1: '#f1c40f', a2: '#e74c3c' },
    { name: 'Midnight Green', bg: '#0b1914', text: '#f8fafc', a1: '#00add8', a2: '#2ecc71' },
    { name: 'Dracula', bg: '#282a36', text: '#f8f8f2', a1: '#bd93f9', a2: '#ff79c6' },
    { name: 'Monokai', bg: '#272822', text: '#f8f8f2', a1: '#f92672', a2: '#a6e22e' },
    { name: 'Nord', bg: '#2e3440', text: '#d8dee9', a1: '#88c0d0', a2: '#81a1c1' },
    { name: 'Solarized Dark', bg: '#002b36', text: '#839496', a1: '#268bd2', a2: '#2aa198' },
    { name: 'Oceanic Next', bg: '#1b2b34', text: '#d8dee9', a1: '#6699cc', a2: '#99c794' },
    { name: 'Material Palenight', bg: '#292d3e', text: '#a6accd', a1: '#c792ea', a2: '#82aaff' },
    { name: 'Gruvbox Dark', bg: '#282828', text: '#ebdbb2', a1: '#cc241d', a2: '#98971a' },
    { name: 'Synthwave 84', bg: '#262335', text: '#ffffff', a1: '#ff7edb', a2: '#36f9f6' },
    { name: 'Shades of Purple', bg: '#2d2b55', text: '#a599e9', a1: '#fad000', a2: '#ff2c70' },
    { name: 'Tokyo Night', bg: '#1a1b26', text: '#a9b1d6', a1: '#7aa2f7', a2: '#9ece6a' },
    { name: 'Cobalt2', bg: '#193549', text: '#ffffff', a1: '#ffc600', a2: '#0088ff' },
    { name: 'Ayu Dark', bg: '#0f1419', text: '#e6e1cf', a1: '#ffb454', a2: '#c2d94c' },
    { name: 'Night Owl', bg: '#011627', text: '#d6deeb', a1: '#c792ea', a2: '#addb67' },
    { name: 'Winter is Coming', bg: '#011627', text: '#d6deeb', a1: '#82aaff', a2: '#c792ea' },
    { name: 'Cyberpunk', bg: '#000000', text: '#ff003c', a1: '#fcee0a', a2: '#00ffff' },
    { name: 'Matrix', bg: '#000000', text: '#00ff00', a1: '#00ff00', a2: '#003300' },
    { name: 'Vampire', bg: '#0f0f0f', text: '#ffffff', a1: '#ff0000', a2: '#880000' },
    { name: 'Forest', bg: '#1e2d24', text: '#e2f1e2', a1: '#4a7c59', a2: '#8fc0a9' },
    { name: 'Sunset', bg: '#2b193d', text: '#f5d5cb', a1: '#e85d04', a2: '#f48c06' },
    { name: 'Ocean', bg: '#0f2027', text: '#ffffff', a1: '#203a43', a2: '#2c5364' },
    { name: 'Coffee', bg: '#3e2723', text: '#d7ccc8', a1: '#795548', a2: '#ffcc80' },
    { name: 'Neon', bg: '#000000', text: '#ffffff', a1: '#ff00ff', a2: '#00ffff' },
    { name: 'Go Pro', bg: '#1e1e1e', text: '#cccccc', a1: '#007acc', a2: '#4ec9b0' }
];

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => document.getElementById('splash').style.display = 'none', 500);
    }, 1000);

    initThemes();
    renderSidebar();
    updateXP(0);
});

function initThemes() {
    const sel = document.getElementById('theme-select');
    themes.forEach((t, i) => {
        let opt = document.createElement('option');
        opt.value = i;
        opt.textContent = t.name;
        sel.appendChild(opt);
    });
    sel.addEventListener('change', (e) => {
        const t = themes[e.target.value];
        document.documentElement.style.setProperty('--bg', t.bg);
        document.documentElement.style.setProperty('--text', t.text);
        document.documentElement.style.setProperty('--accent1', t.a1);
        document.documentElement.style.setProperty('--accent2', t.a2);
    });
}

function renderSidebar() {
    const list = document.getElementById('concept-list');
    list.innerHTML = '';
    const query = document.getElementById('search').value.toLowerCase();
    
    TAGS.filter(t => t.title.toLowerCase().includes(query)).forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'concept-btn glass-panel';
        const isMastered = masteredTags.includes(tag.id) ? '✅ ' : '';
        const isFav = favorites.includes(tag.id) ? '⭐ ' : '';
        btn.innerHTML = `${isMastered}${isFav}${tag.emoji} ${tag.title}`;
        btn.onclick = () => loadConcept(tag);
        list.appendChild(btn);
    });
}

document.getElementById('search').addEventListener('input', renderSidebar);
document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== document.getElementById('search')) {
        e.preventDefault();
        document.getElementById('search').focus();
    }
});

function loadConcept(tag) {
    const disp = document.getElementById('content-display');
    const isFav = favorites.includes(tag.id) ? 'Remove Favorite' : 'Add Favorite';
    const isMastered = masteredTags.includes(tag.id) ? 'Mastered!' : 'Mark as Mastered';
    
    disp.innerHTML = `
        <div class="glass-panel">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2>${tag.emoji} ${tag.title} <span style="font-size:0.5em; background:var(--accent1); padding:3px 8px; border-radius:10px;">${tag.badge}</span></h2>
                <div>
                    <button class="action-btn" onclick="toggleFav(${tag.id})">${isFav}</button>
                    <button class="action-btn" onclick="markMastered(${tag.id})" ${masteredTags.includes(tag.id)?'disabled':''}>${isMastered}</button>
                </div>
            </div>
            ${tag.content}
        </div>
    `;
    document.getElementById('code-editor').value = tag.defaultCode;
    document.getElementById('code-output').textContent = '';
}

function toggleFav(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('goFavorites', JSON.stringify(favorites));
    renderSidebar();
    loadConcept(TAGS.find(t => t.id === id));
}

function markMastered(id) {
    if (!masteredTags.includes(id)) {
        masteredTags.push(id);
        localStorage.setItem('goMasteredTags', JSON.stringify(masteredTags));
        updateXP(100);
        renderSidebar();
        loadConcept(TAGS.find(t => t.id === id));
    }
}

function updateXP(amount) {
    xp += amount;
    localStorage.setItem('goUserXP', xp);
    document.getElementById('xp-display').textContent = xp;
    
    let rank = 'Go Novice';
    if (xp >= 500) rank = 'Gopher';
    if (xp >= 1000) rank = 'Channel Expert';
    if (xp >= 2000) rank = 'Concurrency Master';
    if (xp >= 3000) rank = 'Go Grandmaster';
    
    document.getElementById('rank-display').textContent = rank;
    
    let fill = (xp % 1000) / 10; 
    if (xp >= 3000) fill = 100;
    document.getElementById('xp-fill').style.width = fill + '%';
}

function runCode() {
    const out = document.getElementById('code-output');
    out.style.color = '#0f0';
    out.innerHTML = "Compiling...<br>Running...<br>";
    setTimeout(() => {
        out.innerHTML += "Output generated (Simulated in browser)<br>Program exited successfully.";
    }, 800);
}
