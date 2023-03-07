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
    console.log(obj.ua[0], obj.en[0], );

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
    var obj = {
        green: 'зеленый',
        red: 'красный',
        blue: 'голубой'
    };

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
    var rest = a % b;

    if (rest != 0) {
        // alert('Делится с остатком ' + rest);
    } else {
        // alert('Делится, результат деления: ' + (a / b));
    }
}

{
    // 65  Возведите 2 в 10 степень. Результат запишите в переменную st.

    let st = Math.pow(2, 10);
    console.log(st);
}

{
    // 66  Найдите квадратный корень из 245.
    let number = 245;
    let squareRoot = Math.sqrt(number);
    console.log(squareRoot);
}

{
    // 67  Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sumOfCubes = 0;


    for (let i = 0; i < arr.length; i++) {
        sumOfCubes += Math.pow(arr[i], 3);
    }


    let squareRoot = Math.sqrt(sumOfCubes);
    console.log(squareRoot);
}

{
    // 68  Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
    let a = Math.sqrt(379);
    console.log(a); // 19.467922333931785

    let entire = Math.round(a); // 19
    let tenth = a.toFixed(1); // 19.5
    let hundredths = a.toFixed(2); // 19.47
}

{
    // 69  Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

    let a = Math.sqrt(587);
    console.log(a); // 24.228082879171435

    let floor = Math.floor(a); // 24
    let ceil = Math.ceil(a); // 25

    let obj = {};

    obj.floor = floor;
    obj.ceil = ceil;

    console.log(obj);
}

{
    // 70 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
    let arr = [4, -2, 5, 19, -130, 0, 10];
    let max = Math.max.apply(null, arr); // 19
    let min = Math.min.apply(null, arr); // -130
}

{
    // 71 Выведите на экран случайное целое число от 1 до 100.

    console.log(Math.random(1, 100)); // 0.39488876880740453

    const getRandomNumber = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    console.log(getRandomNumber(1, 100)); // дробне число 


    const getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    console.log(getRandomInt(1, 100)); // ціле число 
}

{
    // 72 Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while)
    const getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let arr = [];

    for (let i = 0; i < 10; i++) {
        // arr.push((Math.random(Math.floor()));
        arr.push(getRandomInt(1, 100));
    }
    console.log(arr);

    // using while loop 
    let arr1 = [];

    while (arr1.length < 10) {
        arr1.push(getRandomInt(1, 100));
    }
    console.log(arr1);
}

{
    // 73  Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
    let a = 7;
    let b = 3;

    const result = Math.abs(a - b);
    console.log(result); // 4
}

{
    // 74  Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

    let a = 4;
    let b = 5;
    let c = Math.abs(a - b); // 1
}

{
    // 75 Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

    let arr = [12, 15, 20, 25, 59, 20];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const avarage = Math.floor(sum / arr.length);
    console.log(avarage); // 25
}

{
    // 76  Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

    const factorial = function (num) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    };
    console.log(factorial(4));
}

{
    // 77 Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
    var str = 'aaa@bbb@ccc';
    console.log(str.replace('@', '!')); // 'aaa!bbb@ccc'
    console.log(str.replace(/@/g, '!')); //получим 'aaa!bbb!ccc' // за допомогою регулярного виразу
}

{
    // 78  Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
    let str = 'aaa bbb ccc';
    console.log(str.substring(4, 7));
    console.log(str.slice(4, 7));
}

{
    // 79 Задача. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
    let str = '2025-12-31';
    let arr = str.split('-');
    arr.reverse();
    let newStr = arr.join('/');
    console.log(arr);
    console.log(newStr);

}

{
    // 80 Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
    let str = 'я учу javascript!';
    // console.log(str.length);
}

{
    // 81 Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

    let str = 'я учу javascript!';

    console.log(str.indexOf('учу'));
}

{
    // 82  Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

    let str = 'some text aaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    let n = 10;
    let result = '';
    if (str.length >= n) {
        result += str.slice(0, n) + '...';
    } else {
        result += str;
    }

    console.log(result);
}

{
    // 83  Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
    let str = 'Я-учу-javascript!';
    console.log(str.replace(/-/g, '!'));
}

{
    // 84  Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

    let str = 'я учу javascript!';
    let arr = str.split(' ');
    console.log(arr);
}

{
    // 85 Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

    let arr = ['я', 'учу', 'javascript', '!'];
    let str = arr.join('+');
}

{
    // 86  Преобразуйте первую букву строки в верхний регистр.
    let str = 'Some text';
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(newStr);
}

{
    // 87  Преобразуйте первую букву каждого слова строки в верхний регистр.
    let str = '"freeCodeCamp is an awesome resource"';
    let words = str.split(" ");
    let capitalizedWords = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords += capitalizedWord + " ";
    }

    console.log(capitalizedWords.trim());


    let str1 = "hello, world!";

    let capitalizedWords1 = str1.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    console.log(capitalizedWords1);
}


{
    // 88 Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

    let str = 'var_test_text';

    let words = str.split('_');
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    let newStr = words.join('');
    console.log(newStr); // виведе "varTestText"
}

{
    // 89 Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

    let arr = [1, 2, 3, 4, 5];

    let result = arr.map(function (elem) {
        return Math.sqrt(elem);
    });

    console.log(result);
}

{
    // 90 Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
    let arr = ['123', '456', '789'];

    let result = arr.map(elem => elem + "!");

    console.log(result);
}

{
    // 91 Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
    let arr = ['abc', 'abc', 'abc'];

    let result = arr.map(item => item.split('').reverse().join(''));
    console.log(result);
}

{
    // 92 Дан следующий массив: Используя метод map преобразуйте этот массив в следующий: 
    //  let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

    let arr = ['123', '456', '789'];

    let newArr = arr.map(item => item.split('').map(Number));
    console.log(newArr);
}

{
    // 93 Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
    let arr = [1, 2, 3, 4, 5];

    let newArr = arr.map(function (item, index) {
        return item * (index + 1);
    });

    console.log(newArr);
}

{
    // 94 Давайте теперь применим метод map к каждому подмассиву и возведем каждый его элемент в квадрат:
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let newArr = arr.map(function (item) {
        return item.map(function (num) {
            return num * num;
        });
    });
    console.log(newArr);
}

{
    // 95 Дан масив рядків. Перетворіть кожен рядок у верхній регістр.
    let arr = ['apple', 'banana', 'cherry'];

    let newArr = arr.map(item => item.toUpperCase());
    console.log(newArr);
}

{
    // 96 Дан масив об'єктів. Поверніть масив з тільки імені та прізвища кожного об'єкта.
    let arr = [{
            firstName: 'John',
            lastName: 'Doe'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe'
        },
        {
            firstName: 'Bob',
            lastName: 'Smith'
        }
    ];

    let newArr = arr.map(function (obj) {
        return `${obj.firstName} ${obj.lastName}`;
    });
    console.log(newArr);
}

{
    // 97 Дан масив чисел. Поверніть масив з тільки парних чисел.
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let newArr = arr.map(function (item) {
        if (item % 2 == 0) {
            return item;
        }
    });
    console.log(newArr);
}

{
    // 98 Дан масив рядків. Поверніть масив з довжин кожного рядка.
    let arr = ['apple', 'banana', 'cherry'];

    let newArr = arr.map(item => item.length);
    console.log(newArr);
}

{
    // 99 Дан масив об'єктів. Додайте до кожного об'єкта нове властивість fullName, яке складається з імені та прізвища об'єкта, розділених пробілом.
    let arr = [{
            firstName: 'John',
            lastName: 'Doe'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe'
        },
        {
            firstName: 'Bob',
            lastName: 'Smith'
        }
    ];

    let newArr = arr.map(function (item) {
        item.fullName = `${item.firstName} ${item.lastName}`;

        return item;
    });

    console.log(newArr);
}

{
    // 100 Задача: Дано масив об'єктів. Потрібно створити новий масив, в якому кожен елемент буде дорівнювати значенню певного поля відповідного об'єкта вихідного масиву.
    const people = [{
            name: 'John',
            age: 30
        },
        {
            name: 'Mary',
            age: 25
        },
        {
            name: 'Bob',
            age: 40
        }
    ];

    const newArr = people.map(function (item) {
        return item.age;
    });
    console.log(newArr);
}

{
    // 101 
    const arr = [1, 2, 5, 7, ];

    arr.forEach(function (item, index) {
        // console.log(item)
    });
}

{
    // 102 Выведите на экран сумму элементов этого массива.
    let arr = [1, 2, 3];
    let arrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }

    let sum = 0;

    arr.forEach(function (item) {
        sum += item;
    });
    // console.log(sum)
}

{
    // 103 Выведите с помощью этого массива следующую строку:
    let arr = ['a', 'b', 'c', 'd'];
    let newArr = arr.join('+');
    console.log(newArr);
}

{
    // 104
    let arr = ['a', 'b', 'c'];
    console.log(arr[arr.length - 1]);
}

{
    // 105 Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
    let arr = ['a', 'b', 'c'];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    console.log(arr);
}

{
    // 106 оздайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
    let arr = [1, 2, 3];
    let newArr = arr.map(item => {
        return item + '3';
    });
    console.log(newArr);
}

{
    // 107 Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
    let arr = [1, 2, 3, 4];

    // let newArr = arr.map(item => {
    //     return item + 1
    // })
    // console.log(newArr);

    for (let i = 0; i < arr.length; i++) {
        arr[i]++;
        // ++arr[i]
    }
    console.log(arr);
} {
    // 108 
    let arr = [];

    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 5;
    console.log(arr);
}

{
    // 109 Узнайте длину следующего массива:
    let arr = [];

    arr[3] = 'a';
    arr[8] = 'b';
    // console.log(arr);
    // console.log(arr.length);
}

{
    // 110 Найдите сумму элементов, ключи которых хранятся в наших переменных.
    let arr = [1, 2, 3, 4, 5];
    let key1 = 1;
    let key2 = 2;
    // console.log(arr[key1] + arr[key2]);
}

{
    // 111 
    let arr = [1, 2, 3, 4, 10];
    // console.log(arr[arr.length - 1]);
}

{
    // 112     Код должен найти сумму элементов массива:
    let arr = [1, 2, 3, 4, 5];
    // console.log(arr[0] + arr[1] + arr[3] + arr[3] + arr[4]);
}

{
    // 113 Дан массив с числами. Найдите среднее арифметическое элементов этого массива.
    let arr = [1, 2, 3, 4, 5];

    let sum = arr.reduce(function (accumulator, item, index, array) {
        // return accumulator + item;
        return accumulator + item / array.length;
    }, 0);

    // console.log(sum);   
}

{
    // 114 Дан массив с числами. Удалите из него все отрицательные числа и верните новый массив без них
    let arr = [1, -2, 3, -4, 5];
    let newArr = arr.filter(item => item > 0);
    let newArr1 = arr.filter(function (item) {
        return item > 0;
    });
    // console.log(newArr);    
    // console.log(newArr1);    
}

{
    // 115 Дан массив с числами. Найдите сумму квадратов элементов этого массива.   
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.reduce((current, item) => current + item ** 2, 0);
    // console.log(newArr);

    let newArr1 = 0;
    for (let i = 0; i < arr.length; i++) {
        // newArr1 += arr[i] * arr[i];
        newArr1 += arr[i] ** 2;
    }
    // console.log(newArr1);
}

{
    // 116 Дан массив со строками. Найдите самую длинную строку в этом массиве.
    let arr = ['a', 'ab', 'abc', 'abcd'];

    let longString = arr.reduce((acc, item) => item.length > acc.length ? item : acc);
    // console.log(longString);

    let newArr = arr.reduce(function (current, item) {
        if (item.length > current.length) {
            return item;
        } else {
            return current;
        }
    });
    // console.log(newArr);
}

{
    // 117 Дан массив с числами. Найдите максимальное и минимальное значение в этом массиве и верните их в виде объекта { max: ..., min: ... }.
    let arr = [1, 2, 3, 4, 5];
    let newObj = {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
    // console.log(newObj);

    let arr1 = [1, 2, 3, 4, 5];
    let max = arr1[0];
    let min = arr1[0];

    for (let i = 0; i < arr1.length; i++) {
        if (arr[i] > max) {
            max = arr1[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    let newObj1 = {
        max: max,
        min: min
    };
    // console.log(newObj1);
}

{
    //118 Дан массив с числами. Отсортируйте элементы этого массива по убыванию.
    let arr = [1, 50, 3, -2, 45, 5, 2];
    arr.sort(function (a, b) {
        return a - b;
    });
    // console.log(arr);
}

{
    // 119 Возведите в квадрат каждый элемент этого объекта.
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
}

{
    // 120
    let obj = {};
    obj.a = 1;
    obj.b = 12;
    // console.log(obj);
} {
    // 121 Получите массив ключей следующего объекта:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    // console.log(Object.keys(obj)); // ['x', 'y', 'z']
} {
    // 122 Найдите количество элементов в следующем объекте:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    // console.log(Object.keys(obj).length);
}

{
    // 123
    let obj = {
        a: 1,
        b: 2,
        c: 3
    };
    let key = 'b';
    // console.log(obj[key]);
}

{
    // 124 Исправьте ошибку, допущенную в следующем коде:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    let key = 'x';
    // console.log(obj[key]);
}

{
    // 125 Исправьте ошибку, допущенную в следующем коде:
    let key = 'x';
    let obj = {
        [key]: 1,
        y: 2,
        z: 3
    };
    // console.log(obj);
}

{
    // 126
    let key1 = 'x';
    let key2 = 'y';
    let key3 = 'z';

    let obj = {
        [key1]: 1,
        [key2]: 2,
        [key3]: 3
    };
    // console.log(obj);
}

{
    // 127 Скажите, что выведется в консоль в результате выполнения следующего кода:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    // console.log('x' in obj);
    // console.log('w' in obj);
}

{
    // 128
    let obj = {
        x: null,
        y: 2,
        z: 3
    };
    // console.log( typeof obj.x); // object
}


{
    // 129 завдання на перебор обєкту for in 
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        gender: "male",
        skills: {
            English: 'B2',
        }
    };

    let counter = 0;

    for (let key in person) {
        if (typeof (person[key]) === 'object') {
            for (let i in person[key]) {
                // console.log(`Властивість ${i} має значення: ${person[key][i]}`);
                counter++;
            }
        } else {
            // console.log(`Властивість ${key} має значення: ${person[key]}`);
            counter++;
        }

    }
    // console.log(counter);
}

{
    // 130 Напишіть функцію findLongestWord(str), яка приймає рядок і повертає довжину найдовшого слова в цьому рядку:
    const findLongestWord = function (str) {
        let words = str.split(' ');
        let longestWord = '';
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }
        return longestWord.length;
    };

    // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
}

{
    // 131 Напишіть функцію findLongestKey(key), яка приймає обєект і повертає довжину найдовшого ключа в цьому обєкті:
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        gender: "male",
        skills: {
            English: 'B2',
        }
    };
    let arrKeys = [];

    const findLongestKey = function (obj) {

        for (let key in obj) {
            if (typeof (obj[key]) === 'object') {
                for (let i in obj[key]) {
                    arrKeys.push(i);
                }
            } else {
                arrKeys.push(key);
            }
        }
        console.log(findLongestKey[person]);

        let maxLenght = arrKeys.reduce(function (a, b) {
            return Math.max(a, b.length);
        }, 0);

        // return maxLenght;
        // return arrKeys.length;


    };
    // console.log(findLongestKey(person));
}

{
    // 132 вивести назву найдовшого елемента масиву в JS
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        gender: "male",
        skills: {
            English: 'B2',
        }
    };

    const findLongestKey = function (obj) {
        let arrKeys = [];

        for (let key in obj) {
            if (typeof (obj[key]) === 'object') {
                for (let i in obj[key]) {
                    arrKeys.push(i);
                }
            } else {
                arrKeys.push(key);
            }
        }


        let maxLenghtName = arrKeys.reduce((a, b) => a.length > b.length ? a : b);
        return maxLenghtName;

        // let maxLenghtName = arrKeys.reduce(function (a, b) {
        //     if(a.length > b.length) {
        //         return a;
        //     } else {
        //         return b;
        //     }
        // }, 0);
        // return maxLenghtName;
    };
    // console.log(findLongestKey(person));
}

{
    // 133 завдання з використання методом обєкту object keys 
    let salaries = {
        "Іван": 100,
        "Петро": 300,
        "Марія": 250
    };

    // let ObjKeys = Object.keys(salaries);
    // console.log(ObjKeys);

    // let ObjValues = Object.values(salaries);
    // console.log(ObjValues);


    // let ObjEntries = Object.entries(salaries);
    // console.log(ObjEntries);

    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum = value;
    }
    // console.log(sum);
}



{
    // 134 Код должен вывести элемент объекта:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    // console.log(obj.x);
}

{
    // 135 Код должен вывести элемент объекта по ключу из переменной:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    let key = 'x';
    // console.log(obj[key]);
}

{
    // 136 Код должен вывести сумму элементов объекта:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };

    // 1) варіант
    // let sum = obj.x + obj.y + obj.z;
    // console.log(sum);

    // 2) варіант 
    let sum = 0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    // console.log(sum);
}

{
    // 136 Код должен вывести количество элементов объекта:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };

    let sumOfElements = Object.keys(obj);
    // console.log(sumOfElements.length);
}

{
    // 137 Деструктуризуйте объект user и получите переменные name, age, isAdmin.
    const user = {
        name: "John",
        age: 30,
        isAdmin: true
    };

    const {
        name,
        age,
        isAdmin
    } = user;
    // console.log(name);
    // console.log(age);
    // console.log(isAdmin);
}

{
    // 138 Деструктурируйте объект person, чтобы получить переменные name, surname, years.
    const person = {
        name: "John",
        surname: "Doe",
        years: 30,
    };

    const {
        name,
        surname,
        years
    } = person;
    // console.log(name);
    // console.log(surname);
    // console.log(years);
}

{
    // 139 Деструктурируйте объект student и получите переменную name, а остальные данные объекта запишите в переменную info в виде объекта.
    const student = {
        name: "John",
        age: 22,
        city: "New York",
        mark: 100
    };

    const {
        name,
        ...info
    } = student;
    // console.log(name);
    // console.log(info);
}

{
    // 140 Деструктурируйте объект fruits и получите переменные apple и banana. Затем поменяйте их значения местами.
    let fruits = {
        apple: "green",
        banana: "yellow"
    };

    let {
        apple,
        banana
    } = fruits;
    [apple, banana] = [banana, apple];
    // console.log(banana);
    // console.log(apple);
    // console.log(fruits);
}

{
    // 141 Деструктурируйте объект person, чтобы получить переменную name, а все остальные свойства объекта записать в переменную info в виде массива.
    const person = {
        name: "John",
        surname: "Doe",
        years: 30,
    };

    const {
        name,
        ...info
    } = person;
    const infoArray = Object.entries(info);
    // console.log(infoArray);
}
// створюємо копію обєктів та масивів 

{
    // 142 Напишіть функцію mergeObjects(obj1, obj2), яка об'єднує властивості двох об'єктів в один об'єкт і повертає його:
    const person = {
        name: "John",
        surname: "Doe",
        years: 30,
    };

    const copyObject = function (obj1, obj2) {
        let clone = Object.assign(obj1, obj2);
        return console.log(clone);
    };
    // copyObject(person);

    const obj1 = {
        a: 1,
        b: 2
    };
    const obj2 = {
        c: 3,
        d: 4
    };
    const mergeObjects = function (obj1, obj2) {
        return Object.assign({}, obj1, obj2);
    };
    // console.log(mergeObjects(obj1, obj2))
}

{
    // 143 Напишіть функцію cloneObject(obj), яка створює копію об'єкта і повертає його:
    const obj = {
        a: 1,
        b: 2
    };

    const copy = function (obj) {
        return Object.assign({}, obj);
    };
    const clonedObj = copy(obj);
    // console.log(copy(clonedObj));
}

{
    // 144 Напишіть функцію removeProperty(obj, prop), яка видаляє властивість з об'єкта і повертає модифікований об'єкт:
    const obj = {
        a: 1,
        b: 5
    };

    const removeProperty = function (obj, prop) {
        const newObj = Object.assign({}, obj);
        delete newObj[prop];
        return newObj;
    };

    const modifiedObj = removeProperty(obj, 'a');
    // console.log(modifiedObj);
}

{
    // 145 Напишіть функцію clone(obj), яка створює поверхневу копію об'єкта і повертає його:
    const obj = {
        a: 1,
        b: 5
    };

    const copy = function (obj) {
        return {
            ...obj
        };
    };
    const newObj = copy(obj);
    // console.log(newObj);

    const newObj1 = {
        ...obj,
        c: 10
    };
    // console.log(newObj1);
}

{
    // 146 Напишіть функцію copyProperties(source, target), яка копіює властивості з одного об'єкта в інший і повертає модифікований об'єкт:
    const copyProperties = function (oldPerson, newPerson) {
        return {
            ...oldPerson,
            ...newPerson
        };
    };

    const Oldperson = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        gender: "male"
    };

    const newPerson = {
        firstName: "Jane",
        lastName: "Doe",
        age: 25
    };


    const updatedPerson = copyProperties(Oldperson, newPerson);
    // console.log(updatedPerson);
}

{
    // 145 Напишіть функцію removeProperty(obj, prop), яка видаляє властивість з об'єкта і повертає модифікований об'єкт: використовуючи spread оператор для копіювання
    const oldPerson = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        gender: "male"
    };

    const removeProperty = function (obj, prop) {
        const newObj = {
            ...obj
        };
        delete newObj[prop];
        return newObj;
    };

    const newPerson = removeProperty(oldPerson, 'age');
    // console.log(newPerson);
}
// завдання на forEach

{
    // 146 Напишіть функцію calculateSum(array), яка обчислює суму всіх елементів масиву:
    const arr = [1, 52, 73, 8, 10, 150];
    let arrSum = 0;
    arr.forEach(value => {
        arrSum += value;
    });
    // console.log(arrSum);
}

{
    // 146 Напишіть функцію calculateSum(array), яка обчислює суму всіх елементів масиву: (тип елементів в масиві рядок)
    const arr = ['1', '52.2', '73.5', '8.99', '10', '150'];
    let arrSum = 0;
    arr.forEach(value => {
        // arrSum += +value; // 294.99
        // arrSum += Number(value);
        // arrSum += parseInt(value, 10); // 8.99 error 294
        // arrSum += parseFloat(value); // 294.99
        // arrSum += parseFloat(value); // 294.99
        // arrSum += ~value; 
        ////
        // arrSum += Math.floor(value); // '73.5', '8.99' - заокруглює до меншого 
        // arrSum += Math.ceil(value); // 52.2, '73.5', '8.99' - заокруглює до більшого буде 296
        arrSum += Math.round(value); // '73.5', '8.99' - заокруглює так як зазвичай має бути 

    });
    // console.log(arrSum);
}

{
    // 147 Напишіть функцію printNames(array), яка виводить всі імена з масиву на екран:
    let arr = ['Ross', 'Tom', 'Robert'];
    const showNames = function (arr) {
        arr.forEach(item => {
            console.log(item);
        });
    };
    // showNames(arr);
}

{
    // 148 Напишіть функцію printNames(array), яка виводить всі імена з масиву на екран: але в масиві є обєкти 
    const people = [{
            name: "John",
            age: 30
        },
        {
            name: "Jane",
            age: 25
        }
    ];
    const showNames = function (arr) {
        arr.forEach(item => {
            console.log(item.name);
        });
    };
    // showNames(people);
}

{
    // 149 Напишіть функцію multiplyByTwo(array), яка множить на два всі числові значення масиву і повертає модифікований масив:
    const mixedArray = [1, "two", 3, "four", 5];
    const newArr = [];

    const multiplyByTwo = function (arr) {
        arr.forEach(item => {
            if (typeof (item) === 'number') {
                newArr.push(item * 2);
            } else {
                newArr.push(item);
            }
        });
        return console.log(newArr);
    };
    // multiplyByTwo(mixedArray);
}
// завдання на перебор масиву for of 

{
    // 150 Напишіть функцію calculateAverage(array), яка обчислює середнє значення всіх елементів масиву:
    const arr = [1, 2, 3, 4, 5];

    const calculateAverag = function (arr) {
        let awarage = 0;
        for (let value of arr) {
            awarage += value;
        }

        return console.log(awarage / arr.length);
    };
    // calculateAverag(arr);
}

{
    // 151 Напишіть функцію calculateAverage(array), яка обчислює середнє значення всіх елементів масиву: використовуючи counter
    const arr = [1, 2, 3, 4, 5];
    let sum = 0;
    let counter = 0;

    const calculateAverag = function (arr) {
        for (let value of arr) {
            sum += value;
            counter++;
        }
        return sum / counter;
    };
    // calculateAverag(arr);
}

{
    // 152 Напишіть функцію findMax(array), яка знаходить максимальне значення у масиві:
    const arr = [1, 2, 3, 4, 540];

    const findMax = function (arr) {
        let max = 0;

        for (let item of arr) {
            max = Math.max(item);
        }

        // return console.log(max); 
    };
    // findMax(arr);

    // another way 
    const arr2 = [1, 2, 3, 4, 5];

    const findMax2 = function (arr) {
        let max = arr[0];
        for (let item of arr) {
            if (item > max) {
                max = item;
            }
        }
        return max;
    };
    // console.log(findMax2(arr2));
}

{
    // 153 Напишіть функцію removeDuplicates(array), яка видаляє дублікати з масиву:
    const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
    const singleNumbers = [];
    const removeDuplicates = function (arr) {
        for (let item of arr) {
            if (singleNumbers.includes(item)) {
                continue;
            } else {
                singleNumbers.push(item);
            }
        }
        return singleNumbers;
    };
    // console.log(removeDuplicates(numbers));

    // another way using!
    let result = [];
    const removeDuplicates2 = function (arr) {
        for (let item of arr) {
            if (!result.includes(item)) {
                result.push(item);
            }
        }
        return result;
    };
    // console.log(removeDuplicates2(numbers));
}

{
    // 154 Напишіть функцію countProperties(obj), яка підраховує кількість властивостей в об'єкті:
    const person = {
        name: 'John',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip: '12345'
        }
    };

    const countProperties = function (obj) {
        for (let key in obj) {
            if (typeof (obj[key]) === 'object') {
                for (let i in obj[key]) {
                    console.log(i);
                }
            } else {
                console.log(key);
            }
        }
    };
    // countProperties(person);
}

{
    // 155 Напишіть функцію countProperties(object), яка обчислює кількість властивостей у об'єкта:
    const car = {
        make: "Honda",
        model: "Civic",
        year: 2022
    };

    const countProperties = function (obj) {
        let count = 0;
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                count++;
            }
        }
        return count;
    };
    // console.log(countProperties(car));
}

{
    // 156 Напишіть функцію capitalizeKeys(object), яка повертає новий об'єкт з тими самими властивостями, але з ключами, що починаються з великої літери:
    const person = {
        name: "john",
        age: 30,
        city: "new york"
    };



    const capitalizeKeys = (obj => {
        let newPerson = {};
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                newPerson[capitalizedKey] = obj[key];
            }
        }
        return newPerson;
    });

    // console.log(capitalizeKeys(person));
}

{
    // 157 Напишіть функцію reverseObject(object), яка повертає новий об'єкт з ключами і значеннями, зміненими місцями:
    const fruit = {
        apple: "red",
        banana: "yellow",
        orange: "orange"
    };

    const reverseObject = (object => {
        const newObject = {};
        for (let key in object) {
            newObject[object[key]] = key;
        }

        return newObject;
    });

    // console.log(reverseObject(fruit));
}

{
    // 158 С помощью цикла for выведите в консоль числа от 1 до 100.
    for (let i = 0; i <= 100; i++) {
        // console.log(i);
    }

    //  С помощью цикла for выведите в консоль числа от 11 до 33.
    for (let i = 11; i <= 33; i++) {
        // console.log(i);
    }

    // С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
    for (let i = 0; i <= 100; i += 2) {
        // console.log(i);
    }
    // С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.

    for (let i = 1; i <= 100; i += 2) {
        // console.log(i);
    }

    // С помощью цикла for выведите в консоль числа от 100 до 0.
    for (let i = 100; i >= 1; i--) {
        // console.log(i);
    }
}

{
    // 159 Выведите в консоль все элементы следующего массива:
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let item of arr) {
        // console.log(item);
    }
    // те саме тільки за допомогою звичайного циклу 
    let arr1 = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 0; i < arr1.length; i++) {
        // console.log(arr[i]);
    }
}

{
    // 160 Выведите в консоль все ключи следующего объекта:
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    for (let key in obj) {
        // console.log(key);
    }
    // Выведите в консоль все элементы следующего объекта:
    for (let key in obj) {
        // console.log(obj[key]);
    }
}

{
    //while
    // 161 Выведите в консоль числа от 1 до 100.
    let i = 1;

    while (i <= 100) {
        // console.log(i);
        i++;
    }
}

{
    // 162 Выведите в консоль числа от 11 до 33.
    let i = 11;
    while (i <= 33) {
        // console.log(i);
        i++;
    }
}

{
    // 163 Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
    let num = 10;
    let counter = 0;
    while (num <= 1000) {
        num *= 3;
        counter++;
    }
    // console.log("Отримане число: " + num);
    // console.log("Кількість ітерацій: " + counter);

    // використовуючи цикл for 
    let num2 = 10;
    let counter2;
    for (counter2 = 0; num2 <= 1000; counter2++) {
        num2 *= 3;
    }
    // console.log("Отримане число (for): " + num2);
    // console.log("Кількість ітерацій (for): " + counter2);
}

{
    // 164 Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[0]) continue;
        if (arr[i] == arr[arr.length - 1]) continue;
        // console.log(arr[i]);
    }

    // another way
    for (let i = 1; i < arr.length - 1; i++) {
        // console.log(arr[i]);
    }
}

{
    // 165 Выведите в консоль элементы следующего массива в обратном порядке:
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = arr.length - 1; i >= 0; i--) {
        // console.log(arr[i]);
    }
}

{ // 166 Исправьте ошибку, допущенную в следующем коде:
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
    }
}

{
    // 167 Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

    let arr = [2, 5, 9, 15, 1, 4];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3 && arr[i] < 10) {
            // console.log(arr[i]);
        }
    }
}

{
    // 168 Выведите в консоль те элементы объекта, значения которых - нечетные числа.
    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    };

    for (let key in obj) {
        if (obj[key] % 2 == 0) {
            continue;
        } else {
            // console.log(obj[key]);
        }
    }

    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            // console.log(obj[key]);
        }
    }
}

{
    // 169 Найдите сумму четных чисел от 2 до 100.

    let result = 0;
    for (let i = 0; i <= 100; i *= 2) {
        i++;
        result += i;
    }
    console.log(result);
    
    for (let i = 0; i <= 100; i++) {
        i++;
        if (i % 2 == 0) {
            result += i;
        }
        console.log(result);
    }

    // вирішити це завдання декількома способами
}