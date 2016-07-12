//TODO: Please write code in this file.
function printReceipt(inputs) {
  let allItems = loadAllItems();
  let itemCountMap = new Map();

  // count
  for (let barcode of inputs) {
    let isExist = itemCountMap.has(barcode);
    if (isExist) {
      itemCountMap.set(barcode, itemCountMap.get(barcode) + 1);
    } else {
      itemCountMap.set(barcode, 1);
    }
  }

  let itemInReceipt = new Map();
  // item in itemCountMap
  for (let barcode of itemCountMap.keys()) {
    for (let item of allItems) {
      if (barcode === item.barcode) {
        itemInReceipt.set(barcode, item);
      }
    }
  }

  let receipt = '';
  let total_price = 0;
  let header = '***<没钱赚商店>收据***\n';
  receipt = receipt.concat(header);

  for (let [key, value] of itemInReceipt.entries()) {
    let one_total_price = value.price * itemCountMap.get(key);
    total_price = total_price + one_total_price;
    let one = '名称：' + value.name +
      '，数量：' + itemCountMap.get(value.barcode) + value.unit +
      '，单价：' + value.price.toFixed(2) +
      '(元)，小计：' + one_total_price.toFixed(2) + '(元)\n';
    receipt = receipt.concat(one);

  }

  let footer = '----------------------\n' +
    '总计：' + total_price.toFixed(2) + '(元)\n' +
    '**********************';

  receipt = receipt.concat(footer);
  console.log(receipt);



}
