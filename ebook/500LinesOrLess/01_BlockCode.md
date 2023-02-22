# BlockCode: 可视化编程工具
## Dethe Elza

[Dethe](https://twitter.com/dethe)
是一名极客父亲，具有审美趣味的程序员，导师以及[ WaterBear 可视化编程工具](http://waterbearlang.com/)
的作者。他与人合办温哥华制作教育沙龙，想要兔子折纸机器人火遍全世界。

[Dethe](https://twitter.com/dethe) is a geek dad, aesthetic programmer, mentor, and creator of
the [WaterBear](http://waterbearlang.com/) visual programming tool. He co-hosts the Vancouver Make Education Salons and
wants to fill the world with robotic origami rabbits.

在基于块的编程语言中，你通过拖动连接表示程序不同部分的块编写程序的。块编程语言不同于传统编程语言，在常规编程语言中你需要输入字符。

In block-based programming languages, you write programs by dragging and connecting blocks that represent parts of the
program. Block-based languages differ from conventional programming languages, in which you type words and symbols.

学习一门编程语言可能会很难，因为它们不能容忍丝毫的错别字。大多数的编程语言是区分大小写的, 语法晦涩难懂,
并且如果在错误的地方多写了一个分号程序就会拒绝执行，更糟糕的是少写了一个分号。更有甚者, 现在的大多数编程语言是基于英语的，并且它们的语法不能本地化。

Learning a programming language can be difficult because they are extremely sensitive to even the slightest of typos.
Most programming languages are case-sensitive, have obscure syntax, and will refuse to run if you get so much as a
semicolon in the wrong place or worse leave one out. Further, most programming languages in use today are based on
English and their syntax cannot be localized.

相反，一个出色的块编程语言可以完全消除语法错误。块语言不会出现语法错误：你仍然会创建一个执行错误的程序，但不能创建一个语法错误的程序。块语言也更加直观：你可以在语言的块列表中看到所有的结构和软件库。而且，块语言可以在不改变编程语言含义的情况下本地化为任何人类语言。

In contrast, a well-done block language can eliminate syntax errors completely. You can still create a program which
does the wrong thing, but you cannot create one with the wrong syntax: the blocks just won't fit that way. Block
languages are more discoverable: you can see all the constructs and libraries of the language right in the list of
blocks. Further, blocks can be localized into any human language without changing the meaning of the programming
language.

![Figure 1.1 - The BlockCode IDE in use](_media/figure_1-1.png)
<center>Figure 1.1 - The BlockCode IDE in use</center>


基于块的编程语言有着悠久的历史，其中一些突出的有 [Lego Mindstorms](http://www.lego.com/en-us/mindstorms/) ，[Alice3D](https://www.alice.org/)，[StarLogo](https://education.mit.edu/project/starlogo-tng/)
，尤其是 [Scratch](http://scratch.mit.edu/)
。在网络上也有一些基于块语言的工具：[Blockly](https://developers.google.com/blockly/)，[AppInventor](http://appinventor.mit.edu/)，[Tynker](https://www.tynker.com/)
，以及[更多](https://zh.wikipedia.org/wiki/%E8%A6%96%E8%A6%BA%E5%8C%96%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88%E8%AA%9E%E8%A8%80)。

Block-based languages have a long history, with some of the prominent ones
being [Lego Mindstorms](http://www.lego.com/en-us/mindstorms/) , [Alice3D](https://www.alice.org/), [StarLogo](https://education.mit.edu/project/starlogo-tng/),
and especially [Scratch](http://scratch.mit.edu/). There are several tools for block-based programming on the web as
well: [Blockly](https://developers.google.com/blockly/), [AppInventor](http://appinventor.mit.edu/), [Tynker](https://www.tynker.com/),
and [many more](https://en.wikipedia.org/wiki/Visual_programming_language).

本章代码基于开源项目 [WaterBear](http://waterbearlang.com/)
，这不是一门语言，而是一种使用块语法包装现有语言的工具。这种包装器的优势包括上面提到的那些：消除语法错误，直观的显示可用组件，轻松本地化。另外，有时可视化代码有时更容易阅读和调试，
并且程序块可以使用之前预先定义的子程序块。（我们甚至可以更近一步，在程序块上添加图标结合或替代文字名称，以帮助那些学前儿童编程，但是我们在这个例子中不会考虑。）

The code in this chapter is loosely based on the open-source project [WaterBear](http://waterbearlang.com/), which is
not a language, but a tool for wrapping existing languages with a block-based syntax. The advantages of such a wrapper
include the ones noted above: eliminating syntax errors, visual display of available components, ease of localization.
Additionally, visual code can sometimes be easier to read and debug, and blocks can be used by pre-typing children. (We
could even go further and put icons on the blocks, either in conjunction with the text names or instead of them, to
allow pre-literate children to write programs, but we don't go that far in this example.)

该语言选择的海龟画图（turtle graphics）最早可以追溯到Logo语言，这是为教导孩子们学习编程专门设计的。多数块编程语言都内置了海龟画图（turtle
graphics），并且它足够小能够用于这样一个严格约束的项目中。

The choice of turtle graphics for this language goes back to the Logo language, Which was created specifically to teach
programming to children. Several of the block-based languages above include turtle graphics, and it is a small enough
domain to be able to capture in a tightly constrained project such as this.

如果你想要了解基于块的编程语言是什么样的，你可以从作者的[Github仓库](https://dethe.github.io/500lines/blockcode/)
仓库中试用本章构建的程序。

If you would like to get a feel for what a block-based-language is like, you can experiment with the program that is
built in this chapter from author's [Github repository](https://dethe.github.io/500lines/blockcode/).

## 目标和结构

Goals and Structure

我想要这段代码完成这几件事。首先也是最重要的，我要实现一个用于海龟画图（turtle
graphics）的块语言，你可以通过简单的拖放块编写绘制图像的代码，并尽可能的使用HTML、CSS和JavaScript的简单结构。其次但仍然很重要的是，
我想要展示这个块语言怎样作为框架服务其他语言而不仅仅是我们的Turtle语言。

I want to accomplish a couple of things with this code. First and foremost, I want to implement a block language of
turtle graphics, with which you can write code to create images through simple dragging-and-dropping of blocks, using as
simple a structure of HTML, CSS, and JavaScript as possible. Second, but still important, I want to show how the blocks
themselves can serve as a framework for other languages besides our mini turtle language.

要做到这一点，我们需要将turtle语言相关的内容封装到一个文件（`turtle.js`
），这样可以使我们很容易的替换成另一个文件。除此之外的代码都不该是turtle语言特有的，其他的应当是用于处理块的代码(`blocks.js`, `menu.js`)
或者是通用的Web工具（`util.js`, `drag.js`, `file.js`）。这就是我们的目标，虽然为了维持项目的精简，其中一些工具因为通用性较低而直接作用于那些块。

To do this, We encapsulate everything that is specific to the turtle language into one file (`turtle.js`) that we can
easily swap with another file. Nothing else should be specific to the turtle language; the rest should just be about
handling the blocks (`blocks.js` and `menu.js`) or be generally useful web utilities (`util.js`, `drag.js`, `file.js`).
That is the goal, although to maintain the small size of the project, some of those utilities are less general-purpose
and more specific to their use with the blocks.

在编写block语言的时，让我惊讶的是：你不能使用自己喜欢的文本编辑器编程，因为这种语言本身就是自己的IDE，语言与IDE是并行设计与开发的。这样有利有弊。从好的一面来说，每个人都使用相同的环境从而避免发生关于IDE优劣的争论。从另一方面来说，构建block语言时会牵扯你极大的精力。

One thing that struck me when writing a block language was that the language is its own IDE. You can't just code up
blocks in your favorite text editor; the IDE has to be designed and developed in parallel with the block language. This
has some pros and cons. On the plus side, everyone will use a consistent environment and there is no room for religious
wars about what editor to use. On the downside, it can be a huge distraction from building the block language itself.

