/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

function isWeekend(day: string): boolean {
  if (day === DayWeek.Saturday || day === DayWeek.Sunday) {
    return true;
  }
  return false;
}

const weekday = isWeekend('Saturday');

console.log('weekday :>> ', weekday);
