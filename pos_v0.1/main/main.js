// 判断element是否存在array中
function inArray(element, array) {
  return array.indexOf(element) > -1;
}

//TODO: Please write code in this file.
function printReceipt(inputs) {
  //   barcode: 'ITEM000000',
  //   name: '可口可乐',
  //   unit: '瓶',
  //   price: 3.00
  /*
   1. 计数 count
   2. 去重
   3. 排序
   4. 打印
   */
  /*
   相比v_0，这个input少了count字段，所以我得自己统计
   1. 统计count字段
   1. barcode字段是一个item的标识
   2. 很明显这里就应该用hashTable
   1. 我不知道JS中是否有built-in的hashTable
   2. 有的话，直接调用，没有就得自己构造
   3. 隐约记得可以用它的数组实现hashTable
   得到count字段之后，接下来的处理跟v_0一样，所以
   1. 将v_0的处理方法封装为一个函数
   2. 在得到原始的input，处理之后，将数据传递给我封装好的函数
   3. 这样就可以直接得到结果了
   */
  /*
   let itemMap = new Map();
   for (let i in inputs) {
   let item = inputs[i];
   let isExist = itemMap.has(item);
   if (isExist) {
   itemMap.set(item, itemMap.get(item) + 1);
   }
   else {
   itemMap.set(item, 1);
   }
   }
   */

  /*
   今天晚上的收获在于让我想到用两个Map来存储相关的数据，这个算法记得在Algorithms上看到过，应该是的，回头再好好看看。
   JS确实跟Java用起来不很一样，还是用不熟。
   不能被云风那句话“JS很恶心”给影响了，还是先好好学下来再说。
   我感觉有点上道了
    明天好好整理这个解决思路
   */
  let itemMap = new Map();
  let itemCountMap = new Map();
  for (let i in inputs) {
    let item = inputs[i];
    let itemBarcode = item.barcode;
    let isExist = itemMap.has(itemBarcode);
    if (isExist) {
      itemCountMap.set(itemBarcode, itemCountMap.get(itemBarcode) + 1);
    } else {
      itemCountMap.set(itemBarcode, 1);
      itemMap.set(itemBarcode, item);
    }
  }


  let receipt = '';
  let total_price = 0;
  let header = '***<没钱赚商店>收据***\n';
  receipt = receipt.concat(header);

  for (let [key, value] of itemMap.entries()) {
    let one_total_price = value.price * itemCountMap.get(key);
    total_price = total_price + one_total_price;
    let one = '名称：' + value.name +
      '，数量：' + itemCountMap.get(value.barcode) + value.unit +
      '，单价：' + value.price.toFixed(2) +
      '(元)，小计：' + one_total_price.toFixed(2) + '(元)\n';
    receipt = receipt.concat(one);

  }
  /*
   for (let i in inputs) {
   let item = inputs[i];
   let one_total_price = item.price * itemMap.get(item.barcode);
   total_price = total_price + one_total_price;

   let one = '名称：' + item.name +
   '，数量：' + itemCountMap.get(item.barcode) + item.unit +
   '，单价：' + item.price.toFixed(2) +
   '(元)，小计：' + one_total_price.toFixed(2) + '(元)\n';
   receipt = receipt.concat(one);
   }
   */
  let footer = '----------------------\n' +
    '总计：' + total_price.toFixed(2) + '(元)\n' +
    '**********************';

  receipt = receipt.concat(footer);
  console.log(receipt);

}
