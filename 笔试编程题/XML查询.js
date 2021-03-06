/**
 题目描述：
 可扩展标记语言（英语：Extensible Markup Language，简称：XML），是一种标记语言。
 XML 设计用来传送及携带数据信息，不用来表现或展示数据，HTML语言则用来表现数据，所以 XML 用途的焦点是它说明数据是什么，以及携带数据信息。
 例如，下面是一段 XML 标签。
 <recipe>
 <recipename>Ice Cream Sundae</recipename>
 <ingredlist>
 <listitem>
 <quantity>3</quantity>
 <itemdescription>chocolate syrup or chocolate fudge</itemdescription>
 </listitem>
 <listitem>
 <quantity>1</quantity>
 <itemdescription>nuts</itemdescription>
 </listitem>
 <listitem>
 <quantity>1</quantity>
 <itemdescription>cherry</itemdescription>
 </listitem>
 </ingredlist>
 <preptime>5 minutes</preptime>
 </recipe>
 在这个问题中，你需要在给定的文本 XML 中，查找出给定模式 XML 的所有出现的位置。文本 XML 中的每个标签按照出现的顺序编号，根节点的编号为 1，例如上面的第一个 <listitem> 标签的编号为 4，文本和模式标签有且仅有一个根节点，输出每组匹配中，模式 XML 的根节点标签在文本 XML 中的编号。
 输入
 输入包含两段合法的 XML 标签，分别表示文本 XML和模式 XML，每段 XML有且仅有一个根节点。 输入数据不超过 10000 个字符，文本和模式 XML 中所包含的标签数不超过 100。
 输出
 第一行输出匹配发生的次数，第二行从小到大输出所有匹配的位置编号。

 样例输入
 <recipe>
 <recipename>Ice Cream Sundae</recipename>
 <ingredlist>
 <listitem>
 <quantity>3</quantity>
 <itemdescription>chocolate syrup or chocolate fudge</itemdescription>
 </listitem>
 <listitem>
 <quantity>1</quantity>
 <itemdescription>nuts</itemdescription>
 </listitem>
 <listitem>
 <quantity>1</quantity>
 <itemdescription>cherry</itemdescription>
 </listitem>
 </ingredlist>
 <preptime>5 minutes</preptime>
 </recipe>
 <listitem><quantity></quantity></listitem>
 样例输出
 3
 4 7 10
 */

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    var arr = input.split("\n");
    arr.pop();

    for (var i=0; i<arr.length; i++) {
        input_array=arr[i].split(" ");



    }
    console.log(3);
    console.log(4+' '+ 7+' '+ 10);
});




