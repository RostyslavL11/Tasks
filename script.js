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

{ //19
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

	let num = '12345';

	let newArr = Array.from(num);
	console.log(newArr);

	let sumOfNum = newArr.reduce((a, b) => {
		return a * b;
	});
	console.log(sumOfNum);
}

{
	// 22 let num = '12345';
	const arr = {
		'ru': ['голубой', 'красный', 'зеленый'],
		'en': ['blue', 'red', 'green'],
	};
	// console.log(arr['ru'][1]);
}

{
	// 23 С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

	const arr = ['a', 'b', 'c'];

	const showItems = function (item, index, array) {
		console.log(item);
	};
	arr.forEach(showItems);

}

{
	// 24 Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
	const arr = ['a', 'b', 'c', 'd'];
	console.log(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);
}

{
	// 25 Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

	const arr = [2, 5, 3, 9];
	let result = ((arr[0] * arr[1]) + (arr[2] * arr[3]));
	console.log(result);
}

{
	// 26 
	const obj = {
		a: 1,
		b: 2,
		c: 3
	};
	console.log(obj.c);
}

{
	// 27   Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
	const obj = {
		Коля: '1000',
		Вася: '500',
		Петя: '200'
	};

	console.log(obj.Петя);
	console.log(obj.Коля);
}

{
	// 28 Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

	const week = {
		1: "Monday",
		2: "tuesday",
		3: "wednesday",
		4: "thursday",
		5: "friday",
		6: "saturday",
		7: "sunday",
	};

	console.log(week[5]);
	let day = week[5];
	console.log(day);
}

{
	//29 
	const arr = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
	console.log(arr[1][0]);
}

{
	// 30 Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
	const obj = {
		js: ['jQuery', 'Angular'],
		php: 'hello',
		css: 'world'
	};
	console.log(obj.js[0]);
}

{
	// 31 Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

	const obj = {
		ua: ['понеділок', 'вівторок ', 'середа', 'четвер', 'п"ятниця', 'субота', 'неділя'],
		en: ['Monday', 'Tuesday ', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	};
	console.log(obj.ua[0], obj.en[0],);

	let lang = obj.ua;
	let day = lang[4];

	console.log(day);
}

{
	// 32 

	let a = 0;
	if (a == 0) {
		console.log('ok');
	} else {
		console.log('wrong');
	}

	let a1 = 5;
	if (a1 < 0) {
		console.log('ok');
	} else {
		console.log('wrong');
	}

	let a2 = 2;

	if (a2 !== 0) {
		console.log('ok');
	} else {
		console.log('wrong');
	}


	let test = 'test';

	if (test == 'test') {
		console.log('test / ok');
	} else {
		console.log('wrong');
	}

}

{
	// 33 Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
	// let a = '1';
	let a = '1';
	if (a == '1' && a === '1') {
		console.log('ok');
	} else {
		console.log('error');
	}
}

{
	// 34  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
	let test = true;

	if (test) {
		console.log('test = true');
	} else {
		console.log('test = false');
	}
}

{
	// 35 
	let test = false;
	if (!test) {
		console.log('test = true');
	} else {
		console.log('test = false');
	}
}


{
	// 36 Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
	let a = 2;

	if (a >= 0 && a <= 5) {
		console.log('ok');
	} else {
		console.log('error');
	}
}

{
	// 37  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
	let a = 2;
	if (a == 0 || a === 2) {
		a += 7;
	} else {
		a /= 2;
	}

	console.log(a);
}

{
	// 38   Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
	let a = 3;
	let b = 5;
	if (a <= 1 && b >= 3) {
		console.log(a + b);
	} else {
		console.log(a - b);
	}
}

{
	// 39  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

	let a = 12,
		b = 5;

	if (a > 2 && a < 11 || b >= 6 && b < 14) {
		console.log('ok');
	} else {
		console.log('wrong');
	}

}

{
	// 40 Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
	let num = 4;

	switch (num) {
		case 1:
			console.log('Winter');
			break;
		case 2:
			console.log('Spring');
			break;
		case 3:
			console.log('Summer');
			break;
		case 4:
			console.log('Autumm');
			break;
		default:
			console.log('wrong number');
	}
}

{
	// 41  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
	let day = 22;
	if (day < 10) {
		console.log('1st decade');
	} else if (day > 10 || day < 20) {
		console.log('2nd decade');
	} else if (day > 20) {
		console.log('3rd decade');
	}

}

{
	// 42 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
	let month = 12;
	if (month <= 2 || month == 12) {
		console.log('Winter');
	} else if (month > 3 && month < 5) {
		console.log('Spring');
	} else if (month >= 6 && month <= 8) {
		console.log('Summer');
	} else if (month > 8 && month < 12) {
		console.log('Autumm');
	}
}

{
	// 43 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
	let str = 'abcde';

	for (let i = 0; i < str.length; i++) {
		if (str[0][i] == 'a') {
			console.log('yes');
			break;
		} else {
			console.log('error');
		}
	}

	// another way
	let str1 = 'abcde';
	if (str1.indexOf('a') == 0) {
		console.log('yes');
	} else {
		console.log('error');
	}
}

{
	// 44 Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

	let num = '12345';

	for (let i = 0; i < num.length; i++) {
		if (num[0][i] == '1' || num[0][i] == '2' || num[0][i] == '3') {
			console.log('yes');
			break;
		} else {
			console.log('error');
			break;
		}
	}
}

{
	// 45 Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

	let num = '583';

	let arr = num.split('');
	let arrNum = arr.map(Number);
	let arrSum = 0;
	let arrSum1 = 0;

	for (let i = 0; i < arrNum.length; i++) {
		arrSum += arrNum[i];
	}
	console.log(arrSum);

	//// another way
	arrNum.forEach(function (item) {
		arrSum1 += item;
	});
	console.log(arrSum1);

	///// reduce 
	let someNumbers = [1, 10, 2];
	let result = someNumbers.reduce(function (passedIn, item) {
		return passedIn + item;

	}, 0);
	console.log(result);

}

{
	// 46  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

	let str = '123124';
	let arrNum = str.split('').map(Number);
	console.log(arrNum);
	let middleIndex = Math.ceil(arrNum.length / 2);
	let arrFirstPart = arrNum.splice(0, middleIndex);
	let arrSecondPart = arrNum.splice(-middleIndex);

	console.log(arrFirstPart);
	console.log(arrSecondPart);

	const calculate = function (arr1, arr2) {
		arr1.forEach(function (item) {
			arr1 += item;
		});

		arr2.forEach(function (item) {
			arr2 += item;
		});

		if (arr1 == arr2) {
			console.log('yes');
		} else {
			console.log('error');
		}
	};
	calculate(arrFirstPart, arrSecondPart);


	// another way
	let str2 = '123123';
	let arrNum2 = str2.split('').map(Number);
	console.log(arrNum2);
	let middleIndex2 = Math.ceil(arrNum2.length / 2);
	let arrFirstPart2 = arrNum2.splice(0, middleIndex2);
	let arrSecondPart2 = arrNum2.splice(-middleIndex2);


	console.log(arrFirstPart2);
	console.log(arrSecondPart2);

	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < arrFirstPart2.length; i++) {
		sum1 += arrFirstPart2[i];
	}

	for (let i = 0; i < arrSecondPart2.length; i++) {
		sum2 += arrSecondPart2[i];
	}

	if (sum1 == sum2) {
		console.log('ok');
	} else {
		console.log('error');
	}
}

{
	// 47 Выведите столбец чисел от 1 до 100.

	let counter = 0;
	for (let i = 0; i <= 100; i++) {
		counter = `${i} \n`;
		// console.log(counter);
	}

	let counter1 = 1;

	while (counter1 <= 100) {
		// console.log(counter1);
		counter1++;
	}

}


{
	// 48 Выведите столбец чисел от 11 до 33.
	let counter = 11;
	for (let i = 0; i <= 33; i++) {
		counter = `${i} \n`;
		// console.log(counter);
	}

	let counter1 = 11;
	while (counter1 <= 33) {
		// console.log(counter1);
		counter1++;
	}
}

{
	// 49 Выведите столбец четных чисел в промежутке от 0 до 100.
	let num = 0;
	while (num <= 100) {
		if (num % 2 == 0) {
			// console.log(num);
		}
		num++;
	}

	let num1 = 0;
	for (let i = 0; i <= 100; i++) {
		if (num1 % 2 == 0) {
			// console.log(num1);
		}
		num1++;
	}
}

{
	// 50  С помощью цикла найдите сумму чисел от 1 до 100.

	let num = 0;
	let i = 1;
	while (i <= 100) {
		num = num + i;
		i++;
	}
	console.log(num);


	let num1 = 0;
	for (let i = 0; i <= 100; i++) {
		num1 += i;
	}
	console.log(num1);
}


{
	// 51  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

	let arr = [1, 20, 3, 4, 10];

	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

{
	// 52 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

	let arr = [1, 2, 3, 4, 5];
	let result = 0;

	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	console.log(result);
}

{
	// 53 Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
	var obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };

	for (let prop in obj) {
		console.log(prop);
		console.log(obj[prop]);
	}
}

{
	// 54  Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

	const obj = {
		'Коля': '200',
		Вася: '300',
		Петя: '400'
	};

	for (let prop in obj) {
		if (prop == 'Коля') {
			console.log(`${prop} - зарплата ${obj[prop]} долларов.`);
		}
	}
}

{
	// 55  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

	let arr = [2, 5, 9, 15, 0, 4];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 3 && arr[i] < 10) {
			console.log(arr[i]);
		}
	}
}

{
	// 56  Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

	let arr = [2, 5, -5, 15, 2, -20];

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}
	console.log(sum);
}

{
	// 57 Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

	let arr = [1, 2, 5, 9, 4, 13, 10];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 4) {
			console.log('yes');
			break;
		}
	}
}

{
	// 58  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

	let arr = [10, 20, 30, 50, 235, 3000];

	let arrStr = arr.toString().split(',');
	console.log(arrStr);

	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i].startsWith('1') || arrStr[i].startsWith('2') || arrStr[i].startsWith('5')) {
			console.log(arrStr[i]);
		}
	}
}

{
	// 59 Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.	

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let str = '-';

	for (let i = 0; i < arr.length; i++) {
		// str += '-' + arr[i] + '-';
		str += `${arr[i]}-`;
	}

	console.log(str);
}

{
	// 60  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	for (let i = 0; i < days.length; i++) {
		if (days[i] == 'Saturday' || days[i] == 'Sunday') {
			console.log(`${days[i]} !!!!!`);
		} else {
			console.log(days[i]);
		}
	}
}

{
	// 61 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	let day = '';

	for (let i = 0; i < days.length; i++) {
		if (days[i] == 'Friday') {
			day += days[i];
			console.log(day + '!!!!!!!!!!');
			// console.log(day.italics());
		} else {
			console.log(days[i]);
		}
	}

	console.log(day);
}

{
	// 62 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

	let num = 0;
	for (let n = 1000; n > 50; num++) {
		n /= 2;
		console.log(n);
	}
	console.log(num);
}

{
	// 63  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

	let a = 10, 
		b = 3;
	console.log(a % b);
}

{
	// 64   Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

	let a = 10, 
	b = 10;

	if (a % b == 0) {
		console.log('Делится')
	} else {
		
	}
}

