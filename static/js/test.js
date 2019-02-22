/*Javascript example of age (using if and else statements) (adapted from  Test-Driven Development Using Jasmine  from The Code Institute - Test Javascript using Jasmine*/

howOldAmI = function(age) {
	if (age <= 5) {
		return "I am a baby";
	}
	else if (age >=6 && age <=11) {
		return "I am a child";
	}
	else if (age >=12 && age<=20) {
		return "I am a teenager";
	}
	else if (age >=21 && age<=25) {
		return "I am a young adult";
	}
	else if (age <= 60) {
		return "I am an adult";
	} 
	else if (age >= 61 && age<=120)
	     return "I am a old adult";
	else if (age >=120){
		return "I can’t tell what age I am because that age is incorrect!";
	}
};