// 因为我不会 React.JS
// 所以这里用做演示是 Auto.js 的 Layout
"ui";

/***
 * * 一个简单的返回Ui的函数
 * @param {string} xxx - UI展示的字符串
 * @return {jsx}
 */
function layout( xxx ){
  // 我记得AutoJs文档里没写，其实Autojs允许这样嵌入变量
  return <vertical bg="#114514">
    <text text={xxx} textColor="white" />
  </vertical>
}

// 渲染
ui.layout( layout( "helloWorld" ) )