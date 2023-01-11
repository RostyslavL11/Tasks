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
			sum ++;
		}
	}
	console.log(sum);
}

{
	// 12 Сделайте функцию, которая получает имя пользователя и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя). По умолчанию (то есть если не передать параметр) функция должна выводить 'Привет, Аноним'.

	const sayHello = function() {
		let name = prompt('What is your name?', '');
		if (name) {
			console.log(`Привет ${name}`);
		} else if (name == '') {
			console.log(`Привет, Аноним`);
		}
	};

	// sayHello();
}
