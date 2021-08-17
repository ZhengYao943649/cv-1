let html = document.querySelector('#html') //通过css选择器找到这个元素
let style = document.querySelector('#style')
let string = `/*
我是郑垚，刚开始学习前端.
我现在要做一个八卦图
首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*
接下来我把div变成一个八卦图
首先，将div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
接下来将圆形改成八卦样式
一黑一白
*/
#div1{
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
将八卦两头变成圆形
*/
#div1::before{
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);;
}
#div1::after{
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);;
}
`;
let string2 = '';
// string = string.replace(/\n/g,'<br>');  //replace把回车变成换行br；/\n/g 正则表达式，选中所有的回车
let n = 0;

// string[0].charCodeAt() 可以得到字符unicode编码
//采用递归的方式，运用setTimeout，每秒钟都会自动加1
let step = () =>{
    setTimeout(()=>{
        //如果string[n]==='\n'，那么就<br>换行，否则就复制string[n]中的值
        // string2 += (string[n] === '\n' ? "<br>" : string[n])
        if(string[n] === '\n'){
            string2 += "<br>"
        }else if (string[n] === ' '){
            string2 += "&nbsp"
        }else {
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);  //JS设置页面的滚动条自动滚
        html.scrollTo(0,99999);//JS设置页面的滚动条自动滚
        if(n < string.length - 1){
            n += 1;
            step();
        }
    },0);
}
step();
