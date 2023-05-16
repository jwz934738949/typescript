/** @format */

(() => {
  function initFun(params: string) {
    return "首次编写ts代码:" + params;
  }

  initFun("04-20");

  let age: number = 25;
  let name: string = "测试名称";

  console.log("name:" + name + ",age:" + age);
})();
