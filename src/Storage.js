class Storage {
  
  static getCalorieLimit(defaultLimit = 2000) {
    let calorieLimit;
    if (sessionStorage.getItem('calorieLimit') === null) {
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = +sessionStorage.getItem('calorieLimit')
    }
    return calorieLimit;
  }

  static setCalorieLimit(calorieLimit) {
    sessionStorage.setItem('calorieLimit', calorieLimit);
  }

  static getTotalCalories(defaultCalories = 0) {
    let totalCalories;
    if (sessionStorage.getItem('totalCalories') === null) {
      totalCalories = defaultCalories
    } else {
      totalCalories = +sessionStorage.getItem('totalCalories')
    }
    return totalCalories;
  }

  static updateTotalCalories(calories) {
    sessionStorage.setItem('totalCalories', calories);
  }

  static getMeals() {
    let meals;
    if (sessionStorage.getItem('meals') === null) {
      meals = [];
    } else {
      meals = JSON.parse(sessionStorage.getItem('meals'));
    }
    return meals;
  }

  static saveMeal(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    sessionStorage.setItem('meals', JSON.stringify(meals));
  }

  static removeMeal(id) {
    const meals = Storage.getMeals();
    meals.forEach((meal, index) => {
      if (meal.id === id) {
        meals.splice(index, 1);
      }
    });
    sessionStorage.setItem('meals', JSON.stringify(meals));
  }

  static getWorkouts() {
    let workouts;
    if (sessionStorage.getItem('workouts') === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(sessionStorage.getItem('workouts'));
    }
    return workouts;
  }

  static saveWorkout(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    sessionStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static removeWorkout(id) {
    const workouts = Storage.getWorkouts();
    workouts.forEach((workout, index) => {
      if (workout.id === id) {
        workouts.splice(index, 1);
      }
    });
    sessionStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static clearAll() {
    sessionStorage.removeItem('totalCalories');
    sessionStorage.removeItem('meals');
    sessionStorage.removeItem('workouts');
  }
  
}

export default Storage;