<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:04:15
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-01 20:21:30
 * @Description: TypeScript 面试题
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\TypeScript.md
-->

#### TypeScript 和 JavaScript 的区别？

**JavaScript**：

- JavaScript 是一种轻量级的解释性脚本语言，可以嵌入到 HTML 页面中，在浏览器端执行，能够实现浏览器端丰富的交互功能，为用户带来流畅多样的用户体验。
- JavaScript 是基于对象和事件驱动的，无需特定的语言环境，只需在支持的浏览器上就能运行。
- JavaScript 语言具有以下特点：动态类型、灵活性、快速迭代和开发效率高。

**TypeScript**：

- TypeScript 是 Microsoft 开发和维护的一种面向对象的编程语言。它是 JavaScript 的超集，包含了 JavaScript 的所有元素，可以载入 JavaScript 代码运行，并扩展了 JavaScript 的语法。
- TypeScript 可以使用 JavaScript 中的所有代码和编码概念，TypeScript 是为了使 JavaScript 的开发变得更加容易而创建的。例如，TypeScript 使用类型和接口等概念来描述正在使用的数据，这使开发人员能够快速检测错误并调试应用程序。
- TypeScript 具有以下特点：静态类型、更好的可维护性、更好的可读性和更好的开发效率。

TypeScript 相比于 JavaScript 的优势：

- **静态输入**：静态类型化是一种功能，可以在开发人员编写脚本时检测错误。有了这项功能，就会允许开发人员编写更健壮的代码并对其进行维护，以便使得代码质量更好、更清晰。
- **大型的开发项目**：有时为了改进开发项目，需要对代码库进行小的增量更改。这些小小的变化可能会产生严重的、意想不到的后果，因此有必要撤销这些变化。使用 TypeScript 工具来进行重构更变的容易、快捷。
- **更好的协作**：当发开大型项目时，会有许多开发人员，此时乱码和错误的机也会增加。类型安全是一种在编码期间检测错误的功能，而不是在编译项目时检测错误。这为开发团队创建了一个更高效的编码和调试过程。
- **更强的生产力**：干净的 ECMAScript 6 代码，自动完成和动态输入等因素有助于提高开发人员的工作效率。这些功能也有助于编译器创建优化的代码。

JavaScript 相比于 TypeScript 的优势：

- 人气：JavaScript 的开发者社区仍然是巨大而活跃的，在社区中可以很方便地找到大量成熟的开发项目和可用资源

#### 为什么推荐使用 TypeScript？

TypeScript 相比于 JavaScript 的优势：

- **静态输入**：静态类型化是一种功能，可以在开发人员编写脚本时检测错误。有了这项功能，就会允许开发人员编写更健壮的代码并对其进行维护，以便使得代码质量更好、更清晰。
- **大型的开发项目**：有时为了改进开发项目，需要对代码库进行小的增量更改。这些小小的变化可能会产生严重的、意想不到的后果，因此有必要撤销这些变化。使用 TypeScript 工具来进行重构更变的容易、快捷。
- **更好的协作**：当发开大型项目时，会有许多开发人员，此时乱码和错误的机也会增加。类型安全是一种在编码期间检测错误的功能，而不是在编译项目时检测错误。这为开发团队创建了一个更高效的编码和调试过程。
- **更强的生产力**：干净的 ECMAScript 6 代码，自动完成和动态输入等因素有助于提高开发人员的工作效率。这些功能也有助于编译器创建优化的代码。

#### TypeScript 中的类型有哪些？

TypeScript 中的类型主要包括以下几类：

1. **基本类型**：包括布尔型（boolean）、数字型（number）、字符串型（string）、空值（void）、未定义（undefined）和空对象（null）等。
1. **数组类型**：可以定义数组中元素的类型和个数。
1. **元组类型**：表示已知元素数量和类型的数组。
1. **枚举类型**：用于定义具名常量。
1. **对象类型**：表示一个对象，可以定义对象中属性的类型。
1. **接口类型**：用于描述对象的形状，可以描述对象中属性的类型、方法签名等。
1. **函数类型**：用于定义函数的参数类型和返回值类型。
1. **类型别名**：用于给类型起一个新的名字。
1. **联合类型和交叉类型**：用于组合多个类型。

需要注意的是，TypeScript 是一种强类型语言，对变量类型有严格的限制。因此在 TypeScript 中，变量的类型必须在声明时就确定，并且一旦确定就不能改变。

#### TypeScript 中类的访问类型有哪些？

在 TypeScript 中，类的访问类型指的是成员属性和成员方法的访问权限。主要有以下几种访问类型：

1. **public**：公共访问类型，默认的访问类型，没有任何限制。
1. **private**：私有访问类型，只能在类内部被访问。
1. **protected**：受保护访问类型，只能在类内部和继承类中被访问。
1. **readonly**：只读访问类型，表示只能读取，不能修改。

以下是一个示例：

```
class Animal {
  public name: string; // 公共访问类型
  private age: number; // 私有访问类型
  protected type: string; // 受保护访问类型
  readonly gender: string = 'male'; // 只读访问类型

  constructor(name: string, age: number, type: string) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  public sayName() {
    console.log(`My name is ${this.name}`);
  }

  private sayAge() {
    console.log(`I am ${this.age} years old`);
  }

  protected sayType() {
    console.log(`My type is ${this.type}`);
  }

  public sayGender() {
    console.log(`My gender is ${this.gender}`);
  }
}

class Dog extends Animal {
  public sayType() {
    super.sayType();
    console.log('I am a dog');
  }
}

const animal = new Animal('Tom', 2, 'mammal');
animal.sayName(); // My name is Tom
animal.sayAge(); // error: Property 'sayAge' is private and only accessible within class 'Animal'.
animal.sayType(); // error: Property 'sayType' is protected and only accessible within class 'Animal' and its subclasses.
console.log(animal.gender); // male
animal.gender = 'female'; // error: Cannot assign to 'gender' because it is a read-only property.

const dog = new Dog('Spike', 3, 'mammal');
dog.sayType(); // My type is mammal, I am a dog
```

上面的代码中，Animal 类中定义了不同的访问类型，Dog 类继承了 Animal 类，并重写了 sayType() 方法。在 Animal 实例中，只有公共成员可以被访问，而私有成员和受保护成员只能在类内部被访问。在子类中，可以使用 super 关键字调用父类中的受保护成员方法。

#### TS 中 any 和 unknown 的区别？

1. any 类型可以分配给任何类型，它完全绕过了类型检查，因此它的使用会导致代码不稳定，难以维护。
1. unknown 类型也可以分配给任何类型，但是在对 unknown 类型的值执行操作之前，我们必须进行某种形式的检查（可以通过类型断言、类型守卫和 instanceof 运算符等方式来实现。）。这是因为 unknown 类型的值是未知的，我们不能确定它们的类型。

总结：any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查。因此，在编写 TypeScript 代码时，应该尽可能地避免使用 any 类型，而是使用更严格的类型，例如 unknown。

#### TS 中 never 和 void 的区别？

在 TypeScript 中，never 和 void 是两种不同的类型。

void 表示没有任何返回值的类型，通常用在函数返回值的类型注解中。例如：

```
function log(message: string): void {
  console.log(message);
}
```

这里 void 表示函数 log 没有返回值。

而 never 表示那些永远不会返回值的类型，通常用在那些总是抛出异常或无限循环的函数中。例如：

```
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

这里 never 表示函数 throwError 会抛出异常并且永远不会返回，函数 infiniteLoop 则是一个无限循环的函数，也永远不会返回。

因此，void 表示函数没有返回值，never 表示函数永远不会返回。

#### TS 中 Interface 和 type 的区别？

在 TypeScript 中，interface 和 type 都用于定义类型，它们有一些共同点，也有一些区别。

共同点：

1. 都可以用来定义对象类型、函数类型等。
1. 都可以被扩展（extends）。

区别：

1. interface 可以被合并（merge），而 type 不行。也就是说，当你定义同名的 interface 时，它们会自动合并为一个，而当你定义同名的 type 时，它们会报错。
1. type 可以定义更多种类型。例如，它可以定义联合类型（Union Types）、交叉类型（Intersection Types）、元组类型（Tuple Types）等，而 interface 不行。
1. interface 可以定义类（Class）和函数（Function）类型，而 type 不行。

interface 使用示例如下：

```
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  name: 'Alice',
  age: 18,
  grade: 90,
  sayHello() {
    console.log('Hello, my name is', this.name);
  }
};
```

type 使用示例如下：

```
type Age = number;

type Name = string;

type Person = {
  name: Name;
  age: Age;
  sayHello(): void;
}

type Student = Person & {
  grade: number;
}

const student: Student = {
  name: 'Alice',
  age: 18,
  grade: 90,
  sayHello() {
    console.log('Hello, my name is', this.name);
  }
};
```

一般来说，如果要定义一个对象类型，建议使用 interface；如果要定义其他类型，例如联合类型、交叉类型等，建议使用 type。不过这只是一种通用的规则，具体还要根据实际情况来选择。

#### TS 中 命名空间与模块的理解和区别？

在 TypeScript 中，命名空间和模块都可以用来组织代码，但它们的设计目的和使用场景不同。

命名空间（Namespace）是为了解决在全局作用域内命名冲突问题而设计的，它将具有相似功能的类、接口、函数等有关联的内容包裹在一起，形成一个独立的作用域，从而避免了命名冲突的问题。

模块（Module）则是为了解决代码组织和复用问题而设计的，一个模块就是一个独立的文件或文件夹，通过导入和导出暴露它的接口来实现对外部的代码复用。模块在实现上可以使用命名空间和 ES6 模块等方式来实现。

在实际开发中，我们通常会使用模块来组织代码，而命名空间则主要用来解决第三方库中的命名冲突问题。

需要注意的是，命名空间和模块虽然是不同的概念，但是在 TypeScript 中，命名空间也可以使用 export 关键字导出它的内容，并在其他地方使用 import 来引入这些内容，这也意味着命名空间也可以像模块一样用来组织和复用代码。但是在实际应用中，建议使用模块来组织和复用代码。

#### TypeScript 支持的访问修饰符有哪些？

TypeScript 支持以下访问修饰符：

1. **public**：默认情况下，类中的所有属性和方法都是 public，可以被该类的实例和其他类访问。
1. **private**：私有属性和方法只能在类内部访问，不能在外部或子类中访问。
1. **protected**：受保护属性和方法只能在类内部和其子类中访问，不能在外部访问。
1. **readonly**：只读属性不能被修改，只能被赋值一次。

访问修饰符可以应用于类的成员变量、成员方法、构造函数、

以及存取器（getter 和 setter）。下面是一些使用访问修饰符的示例：

```
class Person {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  private getAge() {
    return this.age;
  }

  protected getGender() {
    return this.gender;
  }
}

class Student extends Person {
  public getGenderFromParent() {
    return this.getGender();
  }
}

const person = new Person('Alice', 18, 'female');
console.log(person.name); // 'Alice'
// console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(person.gender); // Error: Property 'gender' is protected and only accessible within class 'Person' and its subclasses.

person.sayHello(); // 'Hello, my name is Alice.'
// console.log(person.getAge()); // Error: Property 'getAge' is private and only accessible within class 'Person'.

const student = new Student('Bob', 20, 'male');
console.log(student.getGenderFromParent()); // 'male'
// console.log(student.getGender()); // Error: Property 'getGender' is protected and only accessible within class 'Person' and its subclasses.
```

在上面的代码中，Person 类中有 3 个成员变量和 3 个成员方法，分别使用了不同的访问修饰符。其中，public 表示公共的，可以在任何地方访问；private 表示私有的，只有在类的内部才能访问；protected 表示受保护的，只有在类的内部和继承该类的子类中才能访问。在 Person 类的实例中，我们只能访问公共的 name 属性和公共的 sayHello 方法，而不能访问私有的 age 属性和受保护的 gender 属性以及私有的 getAge 方法和受保护的 getGender 方法。在 Student 类中，由于它继承了 Person 类，因此可以通过调用 getGender 方法访问到 Person 类中受保护的 gender 属性。

#### 解释一下 TypeScript 中的枚举？

在 TypeScript 中，枚举（Enum）是一种类型，用于将一组有名字的常量定义为一个类型，比如颜色、状态等常量值。枚举常量可以是数字或字符串类型。

下面是一个简单的数字枚举的示例：

```
enum Color {
  Red,
  Green,
  Blue
}
```

上面的代码中，我们定义了一个名为 Color 的枚举类型，它包含三个常量 Red、Green 和 Blue，它们的值分别为 0、1、2。

如果需要指定每个枚举成员的值，则可以通过赋值操作进行设置，如下所示：

```
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
```

上面的代码中，我们指定了每个枚举成员的值，Red 的值为 1，Green 的值为 2，Blue 的值为 4。

在使用枚举时，可以通过枚举名和成员名来访问枚举成员，如下所示：

```
let c: Color = Color.Red;
console.log(c); // 1

let colorName: string = Color[2];
console.log(colorName); // Green
```

上面的代码中，我们通过枚举名和成员名来访问枚举成员。在第一行代码中，我们将 Color.Red 赋值给变量 c，由于 Color.Red 的值为 1，因此变量 c 的值也为 1。在第三行代码中，我们将枚举值为 2 的成员名赋值给变量 colorName，由于枚举成员 Green 的值为 2，因此变量 colorName 的值为 "Green"。

枚举还支持反向映射，可以通过枚举值找到对应的枚举成员名称。例如，上面的例子中，Color[2] 的值为 "Green"。

#### TypeScript 中的模块是什么？

在 TypeScript 中，模块（module）是指一段具有独立功能的代码。模块可以在其它模块中引用，从而实现代码的复用和分离。

在 TypeScript 中，可以使用 export 和 import 关键字来导出和导入模块。

下面是一个示例，展示了如何在 TypeScript 中使用模块：

```
// person.ts
export interface Person {
  name: string;
  age: number;
}

// main.ts
import { Person } from "./person";

const person: Person = {
  name: "Alice",
  age: 30
};
console.log(person);
```

在上述代码中，person.ts 中定义了 Person 接口，并使用 export 关键字将其导出。在 main.ts 中，使用 import 关键字导入 Person 接口，从而可以在 main.ts 中使用 Person 接口的定义。

#### TypeScript 中的类型断言是什么？

在 TypeScript 中，类型断言是一种类型转换机制，用于在编译期间告诉编译器变量的类型，也就是将一个变量强制转换成指定类型。

类型断言有两种形式：

1. 尖括号语法：

```
let someValue: any = "hello world";
let strLength: number = (<string>someValue).length;
```

2. as 语法：

```
let someValue: any = "hello world";
let strLength: number = (someValue as string).length;
```

这两种形式在功能上是等价的，但在 React 中使用时，推荐使用 as 语法。

#### TS 中的泛型是什么？

TypeScript 中的泛型（Generics）是指在定义函数、类、接口时使用类型参数来描述函数参数类型、返回值类型、类成员类型、接口成员类型等的一种方式，使得代码更加灵活和通用。

在 TypeScript 中，泛型使用尖括号 <T> 或其他字母作为类型占位符来表示未知的类型，这个类型占位符可以在函数、类、接口中作为参数来使用，而这些参数类型可以根据实际情况被具体指定。

下面是一个使用泛型的例子：

```
function reverse<T>(items: T[]): T[] {
  const result = [];
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
}

const nums = [1, 2, 3, 4, 5];
const reversedNums = reverse(nums); // [5, 4, 3, 2, 1]

const words = ['apple', 'banana', 'orange'];
const reversedWords = reverse(words); // ['orange', 'banana', 'apple']
```

在上面的例子中，reverse 函数使用了一个类型参数 T 来表示一个未知的类型，然后在参数中使用了 T[] 表示一个元素类型为 T 的数组，函数返回值也是一个元素类型为 T 的数组。在调用 reverse 函数时，我们可以传入任何类型的数组，并且返回的结果也是一个相同类型的数组。

除了在函数中使用泛型，我们还可以在类、接口、类型别名等中使用泛型，这样可以使代码更加通用和灵活。

#### 如何检查 TS 中的 null 和 undefiend？

在 TypeScript 中，可以使用类型联合（Union Types）来检查 null 和 undefined。

例如，一个字符串类型的变量可能是一个字符串，也可能是 null 或 undefined，可以使用类型联合来声明这个变量的类型：

```
let str: string | null | undefined;
```

这样，当使用这个变量时，就需要进行 null 或 undefined 的检查：

```
if (str !== null && str !== undefined) {
  // 进行操作
}
```

也可以使用非空断言操作符（!）来告诉 TypeScript 这个变量一定有值：

```
let str: string | null | undefined;
// 假设已经确定 str 不为 null 或 undefined
console.log(str!.length); // 非空断言操作符
```

需要注意的是，在使用非空断言操作符时，如果这个变量确实为 null 或 undefined，就会导致运行时错误，因此要慎重使用。

#### TypeScript 中 const 和 readonly 的区别是什么？

在 TypeScript 中，const 和 readonly 都用于定义不可变的变量，但它们的作用略有不同。

const 声明的变量是常量，不仅值不能改变，而且类型也不能改变。常量一般在声明时就要被初始化，因为之后就不能再改变它们的值。

readonly 声明的变量是只读的，值只能在声明时或构造函数内赋值，之后不能再修改。与 const 不同的是，readonly 可以在对象属性上使用，表示该属性只读，不能被修改。

下面是一个例子，说明 const 和 readonly 的区别：

```
const foo = "bar";
foo = "baz"; // 报错，const 变量的值不能改变

class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");
person.name = "Bob"; // 报错，readonly 变量的值不能改变
```

总之，const 用于声明常量，readonly 用于声明只读的变量或属性。

#### TS 类型断言 in typeof instanecof 语法的区别？

in 和 typeof 是 TypeScript 中的类型保护机制，用于在运行时判断一个值的类型并对其进行不同的操作。

typeof 关键字是 JavaScript 中的操作符，用于获取一个值的类型信息。在 TypeScript 中，typeof 关键字还可以用于类型保护。例如，我们可以使用 typeof 判断一个变量是否为字符串类型：

```
function foo(bar: string | number) {
  if (typeof bar === 'string') {
    console.log('bar is a string');
  } else {
    console.log('bar is not a string');
  }
}
```

instanceof 关键字是 JavaScript 中的操作符，用于检查一个对象是否是某个类的实例。在 TypeScript 中，instanceof 关键字也可以用于类型保护。例如，我们可以使用 instanceof 判断一个变量是否为 Date 类型：

```
function bar(baz: unknown) {
  if (baz instanceof Date) {
    console.log('baz is a Date object');
  } else {
    console.log('baz is not a Date object');
  }
}
```

需要注意的是，typeof 和 instanceof 只能检查基本类型和类类型，不能检查接口和类型别名等自定义类型。此时，我们可以使用 in 关键字进行类型保护。

in 关键字可以用于检查一个对象是否具有某个属性。在 TypeScript 中，可以使用 in 关键字进行类型保护，判断一个变量是否包含某个属性，例如：

```
interface Foo {
  name: string;
  age: number;
}

function baz(obj: unknown) {
  if ('name' in obj) {
    console.log(obj.name);
  } else {
    console.log('obj does not have a name property');
  }
}
```

这样，我们就可以在运行时对一个变量进行类型判断并进行不同的操作了。

#### tsconfig.json 有哪些常用配置？

tsconfig.json 是 TypeScript 中用来配置编译选项的文件，其中包含了编译 TypeScript 代码的各种设置。以下是一些常用的 tsconfig.json 配置选项：

1. **compilerOptions**：该选项下包含了 TypeScript 编译器的各种选项，如输出目录、是否开启源映射等。
1. **include**：用来指定要编译的文件或目录。
1. **exclude**：用来指定不需要编译的文件或目录。
1. **extends**：用来继承一个已有的 tsconfig.json 文件的配置选项。
1. **files**：指定要编译的文件列表。
1. **exclude**：指定不需要编译的文件或目录列表。
1. **strict**：用来开启或关闭严格类型检查。
1. **module**：指定模块系统的类型，如 commonjs、amd、es6 等。
1. **target**：指定目标 ECMAScript 版本，如 es5、es6 等。
1. **lib**：指定可用的类型声明文件，如 dom、es6 等。
1. **noImplicitAny**：开启该选项后，TypeScript 编译器将会在发现有隐含的 any 类型时报错。
1. **allowJs**：开启该选项后，TypeScript 编译器将会编译 .js 文件。
1. **sourceMap**：是否开启源映射。
1. **declaration**：是否生成类型声明文件。

这些是常用的 tsconfig.json 配置选项，不同的项目会有不同的需求，可以根据实际情况进行调整和修改。
