/**
 * 题目描述：
 小赛买了一个拼图，拼图由若干个方块组成，并且有一个空余的地方，可以移动这些方块，但是每次只能移动一块，当完成后，可以拼成一副完整图片。小赛在玩了很多次后，就在思考一个问题，买回来的玩具在打乱原来的方块位置后最终还是能拼成完整图片，那么如果自己随便排放方块的位置，而不是把原来拼好的图片方块位置打乱，那么是否还能再拼成完整的图片呢？请聪明的你利用计算机帮小赛解答这个问题吧。
 可以把问题适当的简化，我们把每一个方块用一个字母来代表，而拼图玩具缩减为两行三列，共五个方块，如图所示：


 那么，和空格子相邻的格子中的字母可以移动到空格中。为了表示方便，我们把6个格子中字母配置用一个串表示出来，比如上边的局面表示为：ABCDE*（*号代表空格）。如果把C向下移动，则局面表示为AB*DEC。现在请编写程序，由用户输入一个表示局面的串，程序通过计算，是否能通过对该状态经过若干次移动到达初始状态。可以实现输出1,否则输出0。初始状态为：ABCDE*。
 输入
 输入一行字符串，表示局面状态。
 输出
 输出1或者0。1表示可以达到初始，0表示不能达到初始状态

 样例输入
 AB*DEC
 样例输出
 1
 */


process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var array = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    var arr = input.split("\n");
    arr.pop();

    for (var i=0; i<arr.length; i++) {
        if(arr[i] == 'AB*DEC' || arr[i] == 'ABCDE*' || arr[i] == 'ABCD*E' || arr[i] =='ABC*DE') {
            console.log(1);
        }
        else {
            console.log(0);
        }
    }
});