import * as vscode from 'vscode';

export interface JaonLanguageItem {
    name: string;
    kind: vscode.CompletionItemKind;
    detail: string;
    documentation: string;
    insertText?: string;
}

export const JAON_KEYWORDS: JaonLanguageItem[] = [
    {
        name: 'var',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '变量声明',
        documentation: '声明一个可变变量，例如 `var x = 10;`',
        insertText: 'var ',
    },
    {
        name: 'val',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '常量声明',
        documentation: '声明一个不可变常量，例如 `val pi = 3.14;`',
        insertText: 'val ',
    },
    {
        name: 'fun',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '函数声明',
        documentation: '声明一个函数，例如 `fun add(a: Int, b: Int): Int { return a + b; }`',
        insertText: 'fun ',
    },
    {
        name: 'return',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '返回值',
        documentation: '从函数返回一个值，例如 `return x;`',
        insertText: 'return ',
    },
    {
        name: 'if',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '条件判断',
        documentation: '条件判断语句，例如 `if (x > 0) { ... }`',
        insertText: 'if ',
    },
    {
        name: 'elif',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '否则如果',
        documentation: '条件判断的附加分支，例如 `elif (x < 0) { ... }`',
        insertText: 'elif ',
    },
    {
        name: 'else',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '否则',
        documentation: '条件判断的默认分支，例如 `else { ... }`',
        insertText: 'else ',
    },
    {
        name: 'while',
        kind: vscode.CompletionItemKind.Keyword,
        detail: 'while 循环',
        documentation: '当条件为真时重复执行，例如 `while (i < 10) { ... }`',
        insertText: 'while ',
    },
    {
        name: 'for',
        kind: vscode.CompletionItemKind.Keyword,
        detail: 'for 循环',
        documentation: '遍历集合，例如 `for (n in [1, 2, 3]) { ... }`',
        insertText: 'for ',
    },
    {
        name: 'in',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '属于',
        documentation: '用于 for 循环遍历集合，例如 `for (n in list) { ... }`',
        insertText: 'in ',
    },
    {
        name: 'class',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '类声明',
        documentation: '声明一个类，例如 `class Animal { ... }`',
        insertText: 'class ',
    },
    {
        name: 'extends',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '继承',
        documentation: '表示类继承关系，例如 `class Dog extends Animal { ... }`',
        insertText: 'extends ',
    },
    {
        name: 'public',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '公开访问',
        documentation: '公开访问修饰符，可用于字段和方法',
        insertText: 'public ',
    },
    {
        name: 'private',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '私有访问',
        documentation: '私有访问修饰符，仅类内部可访问',
        insertText: 'private ',
    },
    {
        name: 'static',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '静态成员',
        documentation: '声明静态字段或方法，属于类而非实例',
        insertText: 'static ',
    },
    {
        name: 'constructor',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '构造器',
        documentation: '类构造器，用于初始化对象',
        insertText: 'constructor',
    },
    {
        name: 'this',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '当前实例',
        documentation: '引用当前类实例，例如 `this.name = n;`',
        insertText: 'this',
    },
    {
        name: 'new',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '创建实例',
        documentation: '创建类的新实例，例如 `var dog = new Dog("Buddy");`',
        insertText: 'new ',
    },
    {
        name: 'throw',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '抛出异常',
        documentation: '抛出异常，例如 `throw "Division by zero";`',
        insertText: 'throw ',
    },
    {
        name: 'try',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '异常捕获块',
        documentation: '包裹可能抛出异常的代码，例如 `try { ... } catch (e) { ... }`',
        insertText: 'try ',
    },
    {
        name: 'catch',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '捕获异常',
        documentation: '捕获并处理异常，例如 `catch (e) { println(e); }`',
        insertText: 'catch ',
    },
    {
        name: 'finally',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '最终执行块',
        documentation: '无论是否发生异常都会执行，例如 `finally { ... }`',
        insertText: 'finally ',
    },
    {
        name: 'import',
        kind: vscode.CompletionItemKind.Keyword,
        detail: '导入模块',
        documentation: '导入其他模块，例如 `import math;`',
        insertText: 'import ',
    },
    {
        name: 'true',
        kind: vscode.CompletionItemKind.Constant,
        detail: '布尔真值',
        documentation: '布尔类型的真值',
        insertText: 'true',
    },
    {
        name: 'false',
        kind: vscode.CompletionItemKind.Constant,
        detail: '布尔假值',
        documentation: '布尔类型的假值',
        insertText: 'false',
    },
    {
        name: 'null',
        kind: vscode.CompletionItemKind.Constant,
        detail: '空值',
        documentation: '表示空引用',
        insertText: 'null',
    },
];

export const JAON_TYPES: JaonLanguageItem[] = [
    { name: 'Int', kind: vscode.CompletionItemKind.TypeParameter, detail: '整数类型', documentation: '整数类型，例如 `var x: Int = 10;`' },
    { name: 'Float', kind: vscode.CompletionItemKind.TypeParameter, detail: '浮点类型', documentation: '浮点类型，例如 `var y: Float = 3.14;`' },
    { name: 'Bool', kind: vscode.CompletionItemKind.TypeParameter, detail: '布尔类型', documentation: '布尔类型，取值为 `true` 或 `false`' },
    { name: 'String', kind: vscode.CompletionItemKind.TypeParameter, detail: '字符串类型', documentation: '字符串类型，例如 `var s: String = "hello";`' },
    { name: 'List', kind: vscode.CompletionItemKind.TypeParameter, detail: '列表类型', documentation: '列表类型，例如 `var nums: List<Int> = [1, 2, 3];`' },
    { name: 'Dict', kind: vscode.CompletionItemKind.TypeParameter, detail: '字典类型', documentation: '字典类型，例如 `var m: Dict<String, Int> = {"a": 1};`' },
    { name: 'Any', kind: vscode.CompletionItemKind.TypeParameter, detail: '任意类型', documentation: '可表示任意类型' },
];

export const JAON_BUILTINS: JaonLanguageItem[] = [
    {
        name: 'print',
        kind: vscode.CompletionItemKind.Function,
        detail: '输出（不换行）',
        documentation: '将内容输出到控制台，不带换行符。\n\n示例：`print("Hello");`',
        insertText: 'print(${1:value})',
    },
    {
        name: 'println',
        kind: vscode.CompletionItemKind.Function,
        detail: '输出（换行）',
        documentation: '将内容输出到控制台，末尾带换行符。\n\n示例：`println("Hello, Jaon!");`',
        insertText: 'println(${1:value})',
    },
    {
        name: 'input',
        kind: vscode.CompletionItemKind.Function,
        detail: '读取输入',
        documentation: '从标准输入读取一行字符串。\n\n示例：`var name = input();`',
        insertText: 'input()',
    },
    {
        name: 'len',
        kind: vscode.CompletionItemKind.Function,
        detail: '获取长度',
        documentation: '返回字符串、列表或字典的长度。\n\n示例：`len("abc")`、`len([1, 2, 3])`',
        insertText: 'len(${1:collection})',
    },
    {
        name: 'range',
        kind: vscode.CompletionItemKind.Function,
        detail: '生成整数序列',
        documentation: '生成从 0 到 n-1 的整数序列。\n\n示例：`for (i in range(5)) { ... }`',
        insertText: 'range(${1:n})',
    },
    {
        name: 'str',
        kind: vscode.CompletionItemKind.Function,
        detail: '转为字符串',
        documentation: '将值转换为字符串。\n\n示例：`str(42)`',
        insertText: 'str(${1:value})',
    },
    {
        name: 'int',
        kind: vscode.CompletionItemKind.Function,
        detail: '转为整数',
        documentation: '将值转换为整数。\n\n示例：`int("42")`',
        insertText: 'int(${1:value})',
    },
    {
        name: 'float',
        kind: vscode.CompletionItemKind.Function,
        detail: '转为浮点数',
        documentation: '将值转换为浮点数。\n\n示例：`float("3.14")`',
        insertText: 'float(${1:value})',
    },
    {
        name: 'type',
        kind: vscode.CompletionItemKind.Function,
        detail: '获取类型',
        documentation: '返回值的类型名称。\n\n示例：`type(42)`',
        insertText: 'type(${1:value})',
    },
];

export const JAON_SNIPPETS: JaonLanguageItem[] = [
    {
        name: 'fun',
        kind: vscode.CompletionItemKind.Snippet,
        detail: '函数模板',
        documentation: '插入一个函数模板',
        insertText: 'fun ${1:name}(${2:params}): ${3:ReturnType} {\n\t${0:// body}\n}',
    },
    {
        name: 'class',
        kind: vscode.CompletionItemKind.Snippet,
        detail: '类模板',
        documentation: '插入一个类模板',
        insertText: 'class ${1:Name} {\n\tconstructor(${2:params}) {\n\t\t${0:// init}\n\t}\n}',
    },
    {
        name: 'if',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'if-elif-else 模板',
        documentation: '插入完整的 if-elif-else 模板',
        insertText: 'if (${1:condition}) {\n\t${2:// if body}\n} elif (${3:condition}) {\n\t${4:// elif body}\n} else {\n\t${0:// else body}\n}',
    },
    {
        name: 'for',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'for 循环模板',
        documentation: '插入 for-in 循环模板',
        insertText: 'for (${1:item} in ${2:collection}) {\n\t${0:// body}\n}',
    },
    {
        name: 'while',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'while 循环模板',
        documentation: '插入 while 循环模板',
        insertText: 'while (${1:condition}) {\n\t${0:// body}\n}',
    },
    {
        name: 'try',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'try-catch 模板',
        documentation: '插入 try-catch 异常处理模板',
        insertText: 'try {\n\t${1:// try body}\n} catch (${2:e}) {\n\t${0:// handle}\n}',
    },
];

const ALL_ITEMS: JaonLanguageItem[] = [
    ...JAON_KEYWORDS,
    ...JAON_TYPES,
    ...JAON_BUILTINS,
    ...JAON_SNIPPETS,
];

function toCompletionItem(item: JaonLanguageItem): vscode.CompletionItem {
    const completion = new vscode.CompletionItem(item.name, item.kind);
    completion.detail = item.detail;
    completion.documentation = new vscode.MarkdownString(item.documentation);
    if (item.insertText) {
        completion.insertText = new vscode.SnippetString(item.insertText);
    }
    return completion;
}

function findItem(word: string): JaonLanguageItem | undefined {
    return ALL_ITEMS.find(
        (item) => item.name.toLowerCase() === word.toLowerCase()
    );
}

export function createCompletionProvider(): vscode.CompletionItemProvider {
    return {
        provideCompletionItems(
            document: vscode.TextDocument,
            position: vscode.Position,
            _token: vscode.CancellationToken,
            context: vscode.CompletionContext
        ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
            if (document.languageId !== 'jaon') {
                return [];
            }

            const items = ALL_ITEMS.map(toCompletionItem);

            // Provide method completions after dot.
            const lineText = document.lineAt(position).text.substring(0, position.character);
            const dotMatch = /(\w+)\.$/.exec(lineText);
            if (dotMatch) {
                const objectName = dotMatch[1];
                return buildMethodCompletions(objectName);
            }

            return items;
        },
    };
}

function buildMethodCompletions(objectName: string): vscode.CompletionItem[] {
    const methods: Record<string, JaonLanguageItem[]> = {
        String: [
            { name: 'length', kind: vscode.CompletionItemKind.Method, detail: '字符串长度', documentation: '返回字符串长度。' },
            { name: 'contains', kind: vscode.CompletionItemKind.Method, detail: '是否包含子串', documentation: '返回是否包含指定子串。' },
            { name: 'startsWith', kind: vscode.CompletionItemKind.Method, detail: '是否以某前缀开头', documentation: '返回是否以指定前缀开头。' },
            { name: 'endsWith', kind: vscode.CompletionItemKind.Method, detail: '是否以某后缀结尾', documentation: '返回是否以指定后缀结尾。' },
            { name: 'substring', kind: vscode.CompletionItemKind.Method, detail: '截取子串', documentation: '截取从 start 开始、长度为 length 的子串。' },
            { name: 'indexOf', kind: vscode.CompletionItemKind.Method, detail: '查找子串位置', documentation: '返回子串第一次出现的位置，未找到返回 -1。' },
            { name: 'split', kind: vscode.CompletionItemKind.Method, detail: '分割字符串', documentation: '按分隔符分割字符串并返回列表。' },
            { name: 'trim', kind: vscode.CompletionItemKind.Method, detail: '去除两端空白', documentation: '返回去除首尾空白后的字符串。' },
            { name: 'toUpper', kind: vscode.CompletionItemKind.Method, detail: '转为大写', documentation: '返回全大写字符串。' },
            { name: 'toLower', kind: vscode.CompletionItemKind.Method, detail: '转为小写', documentation: '返回全小写字符串。' },
        ],
        List: [
            { name: 'length', kind: vscode.CompletionItemKind.Method, detail: '列表长度', documentation: '返回列表元素个数。' },
            { name: 'append', kind: vscode.CompletionItemKind.Method, detail: '追加元素', documentation: '在列表末尾追加元素。' },
            { name: 'pop', kind: vscode.CompletionItemKind.Method, detail: '移除并返回末尾元素', documentation: '移除并返回列表最后一个元素。' },
            { name: 'contains', kind: vscode.CompletionItemKind.Method, detail: '是否包含元素', documentation: '返回列表是否包含指定元素。' },
            { name: 'indexOf', kind: vscode.CompletionItemKind.Method, detail: '查找元素位置', documentation: '返回元素第一次出现的位置，未找到返回 -1。' },
            { name: 'sort', kind: vscode.CompletionItemKind.Method, detail: '排序', documentation: '对列表进行原地排序。' },
            { name: 'reverse', kind: vscode.CompletionItemKind.Method, detail: '反转', documentation: '原地反转列表。' },
            { name: 'clear', kind: vscode.CompletionItemKind.Method, detail: '清空列表', documentation: '清空列表所有元素。' },
        ],
        Dict: [
            { name: 'length', kind: vscode.CompletionItemKind.Method, detail: '字典键值对数量', documentation: '返回字典键值对数量。' },
            { name: 'containsKey', kind: vscode.CompletionItemKind.Method, detail: '是否包含键', documentation: '返回字典是否包含指定键。' },
            { name: 'keys', kind: vscode.CompletionItemKind.Method, detail: '所有键', documentation: '返回包含所有键的列表。' },
            { name: 'values', kind: vscode.CompletionItemKind.Method, detail: '所有值', documentation: '返回包含所有值的列表。' },
            { name: 'remove', kind: vscode.CompletionItemKind.Method, detail: '移除键值对', documentation: '移除指定键对应的键值对。' },
            { name: 'clear', kind: vscode.CompletionItemKind.Method, detail: '清空字典', documentation: '清空字典所有键值对。' },
        ],
    };

    const key = objectName.charAt(0).toUpperCase() + objectName.slice(1).toLowerCase();
    const list = methods[key] || methods[objectName] || [];
    return list.map(toCompletionItem);
}

export function createHoverProvider(): vscode.HoverProvider {
    return {
        provideHover(
            document: vscode.TextDocument,
            position: vscode.Position,
            _token: vscode.CancellationToken
        ): vscode.ProviderResult<vscode.Hover> {
            if (document.languageId !== 'jaon') {
                return;
            }

            const range = document.getWordRangeAtPosition(position, /[A-Za-z_][A-Za-z0-9_]*/);
            if (!range) {
                return;
            }

            const word = document.getText(range);
            const item = findItem(word);
            if (!item) {
                return;
            }

            const contents = new vscode.MarkdownString();
            contents.appendCodeblock(item.name, 'jaon');
            contents.appendMarkdown(`**${item.detail}**\n\n${item.documentation}`);
            return new vscode.Hover(contents, range);
        },
    };
}
