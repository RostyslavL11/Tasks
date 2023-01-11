{ // 1
	let salaries = {
		"Іван": 100,
		"Петро": 300,
		"Марія": 250
	};


	const topSalary = function (salaries) {
		let maxSalary = 0;
		let maxName = null;

		for (const [name, salary] of Object.entries(salaries)) {
			if (maxSalary < salary) {
				maxSalary = salary;
				maxName = name;
			}
		}

		return console.log(maxName);
	};
	topSalary(salaries);

}


{
	// 2 На деструктуризацию
	//  Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr

	const arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7'];

	let e1 = arr[0];
	let e2 = arr[1];
	let e3 = arr[2];
	console.log(e1, e2, e3);

	// let [el1, el2, el3, ...rest] = "elem1 elem2 elem3".split();
	// console.log(el1, el2, el3, rest);

	let [el1, el2, el3, ...rest] = arr;
	console.log(el1, el2, el3, rest);


	let [a, b, c] = 'abc';
	console.log(a, b, c);
}


{
	//  3 Дан массив. Запишите второй элемент этого массива в переменную elem2. Первый элемент никуда записывать не надо.

	const arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7'];

	let [, secondElement] = arr;

	console.log(secondElement);
}


{
	// 4 Дан массив. Запишите последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2

	const arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7'];

	const elem1 = arr.slice(-1);
	console.log(elem1); // 'elem7'

	const elem2 = arr[arr.length - 2];
	console.log(elem2); // 'elem6'

	arr.reverse();
	const [el1, el2] = arr;
	console.log(el1, el2);
}


{
	// 5 Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо

	// const arr = ['elem1', undefined, 'elem3', 'elem4', 'elem5', 'elem6', 'elem7'];
	// const arr = ['elem1', 'elem2', undefined , 'elem4', 'elem5', 'elem6', 'elem7'];
	const arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7'];

	if (arr[1] && arr[2]) {
		console.log(true);
		let [, elem2, elem3] = arr;
		console.log(elem2, elem3);
	} else if (arr[1] === undefined) {
		arr[1] = 'bbb';
	} else if (arr[2] === undefined) {
		arr[2] = 'eee';
	}
	console.log(arr);


	// правильний варіант 

	let newArr = ['первый', 'второй'];
	let [, elemm2 = 'bbb', elemm3 = 'eee'] = newArr;
	console.log(newArr);

}


{
	// 6 Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age.

	const obj = {
		name: 'Петр',
		surname: 'Петров',
		age: '20 лет'
	};

	let {
		name,
		surname,
		age
	} = obj;
	console.log(name);
	console.log(surname);
	console.log(age);
	console.log(`${name} ${surname} ${age}`);
}


{
	// 7 
	const obj = {
		// name: 'Петр',
		surname: 'Петров',
		// age: '20 лет'
	};

	let {
		name = 'Аноном', surname = 'Анонимович', age = '? лет'
	} = obj;
	console.log(name);
	console.log(surname);
	console.log(age);
	console.log(`${name} ${surname} ${age}`);
}


{
	// 8 Дан массив, выведите его элементы последовательно на экран. 
	const arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7'];

	arr.forEach(function (item, index, array) {
		// console.log(`${item} with the index ${index} in array ${arr}`);
		// console.log(item);
	});

	let arr2 = ['elem1', 'elem2', 'elem3'];
	for (let value of arr2) {
		console.log(value);
	}
}


{
	// 9 Дан массив, выведите его элементы последовательно на экран в обратном порядке (подсказка: сначала перевернем массив через reverse). 
	const arr = ['elem1', 'elem2', 'elem3', 'elem4'];
	arr.reverse();
	for (let value of arr) {
		console.log(value);
	}
}


{
	// 10 Дан массив с числами, найдите сумму элементов этого массива.
	const arr = [1, 2, 10, 4, 5];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	console.log(sum);

	// кращий варіант ї
	const arr2 = [1, 2, 10, 4, 5];
	let sum2 = 0;

	for (let value of arr2) {
		sum2 += value;
	}
	console.log(sum2);
}


{
	// 11 Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.

	const str = 'gulogulo';
	let sum = 0;
	for (let value of str) {

		if (value == 'o') {
			sum++;
		}
	}
	console.log(sum);
}


{
	// 12 Сделайте функцию, которая получает имя пользователя и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя). По умолчанию (то есть если не передать параметр) функция должна выводить 'Привет, Аноним'.

	const sayHello = function () {
		let name = prompt('What is your name?', '');
		if (name) {
			console.log(`Привет ${name}`);
		} else if (name == '') {
			console.log(`Привет, Аноним`);
		}
	};

	// sayHello();
}


{
	// 13 Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.


	let num = 3;
	console.log(num);
}


{
	// 14 Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
	let a = 10;
	let b = 2;

	console.log(a + b);
}


{ // 15  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.

	let c = 15;
	let d = 2;
	const result = c + d;

	console.log(result);
}


{ // 16 Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
	let a = 10,
		b = 2,
		c = 5;

	console.log(a + b + c);
}


{
	// 17 Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.

	let a = 17,
		b = 10;

	let c = a - b;
	let d = 7;

	console.log(7 + d);
}


{
	// 18 Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

	let age = 28;
	console.log(`I am ${age} years old`);

}


{ 	//19
	// let name = prompt('What is your name', '');

	// console.log(`Your name us ${name}`);

}


{
	//19  Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
	// let number = +prompt();
	// let powNumber = Math.pow(number, 2);
	
	// console.log(powNumber); 
}


{
	// 20 	 Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

	let str = 'abcde';

	for (let i = 0; i < str.length; i++) {
		if (str[i] == 'a' || str[i] == 'c' || str[i] == 'e') {
			console.log(str[i]);
		}
	}
}


{
	// 21  Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
	
	let numStr = Number('12345');

	console.log(typeof (numStr));







	// for (let i = 0; i < num.length; i++) {
	// 	console.log(Number(num[i]));
	// 	console.log(typeof num[i]);
	// }
	




}

