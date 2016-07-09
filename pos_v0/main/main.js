function printReceipt(inputs) {
	//	要做的
	//		1. 用receipt表示收据的框架
	//			1. header
	//			2. body (inputs中各item的specification)
	//			3. footer
	//		2. 收集数组中每一个对象的每一个属性
	//		3. 统计总价
	//		4. 将收集到的信息填充到框架中
	//	在2中，我需要用
	//		1. 用循环收集数组的元素
	//		2. 使用对象的属性填充item的specifiction)
	//		3. 计算出总价
	//	突然想到其实不需要收集对象的属性，因为这里inputs数组中items对象的属性是已知的
	//	我可以直接调用object.property的方式来使用这些属性


	let receipt = '';
	let total_price = 0;

	let header = '***<没钱赚商店>收据***\n';

	receipt = receipt.concat( header);


	for (let i in inputs) {
		let	one_total_price = inputs[i].price * inputs[i].count;
		total_price = total_price + one_total_price;

		let one = '名称：' + inputs[i].name +
			'，数量：' + inputs[i].count + inputs[i].unit +
			'，单价：' + inputs[i].price.toFixed(2) + 
			'(元)，小计：' + one_total_price.toFixed(2) + '(元)\n';
		receipt = receipt.concat(one);

	}

	let footer = '----------------------\n' +
		'总计：' + total_price.toFixed(2) + '(元)\n' + 
		'**********************';

	receipt = receipt.concat(footer);
	console.log(receipt);

}
