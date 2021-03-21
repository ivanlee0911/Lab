const dom = document;
dom.select = dom.querySelector;
dom.selectAll = dom.querySelector;

const root_div = dom.select("#root");
const plus_bth = dom.select("#plus_bth");
const minus_bth = dom.select("#minus_bth");
const zero_bth = dom.select("#zero_bth");

//初始化計數器
root_div.innnerHTML = 0;

const plus = (e) => {
  const origin_val = root_div.innerHTML;
  root_div.innerHTML = +origin_val + 1;
};

const minus = (e) => {
  const origin_val = root_div.innerHTML;
  root_div.innerHTML = +origin_val - 1;
};

const zero = (e) => {
  const origin_val = root_div.innerHTML;
  root_div.innerHTML = 0;
};

plus_bth.addEventListener("click", plus);
minus_bth.addEventListener("click", minus);
zero_bth.addEventListener("click", zero);
