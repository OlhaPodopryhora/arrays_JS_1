(function(){
	'use strict';


	var salaries = {
	"Вася": 1080,
	"Петя": 3350,
	"Маша": 3090,
	"Даша": 3500
	};

	function sumSalary(salaries){
		let sum = 0;
		for (var key in salaries){
			sum += salaries[key];
		}
		return sum;
	}

	document.write('Сумма зарплат всех сотрудников:  ' + sumSalary(salaries) + ' \$');
	document.write('<br>');


	
		let max = 0,
			name = '';
		for (var key in salaries){
			if(salaries[key] > max){
				max = salaries[key];
				name = key;
			}
		}
		document.write('Данные о сотруднике с самым высоким окладом : ');
		document.write( name || " нет сотрудников");
	
})();