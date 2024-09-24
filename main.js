// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Employee Inputs (local variables)
  let dmHours = +document.getElementById("dm-hours").value;
  let dmPayrate = +document.getElementById("dm-payrate").value;
  let soHours = +document.getElementById("so-hours").value;
  let soPayrate = +document.getElementById("so-payrate").value;
  let kyHours = +document.getElementById("ky-hours").value;
  let kyPayrate = +document.getElementById("ky-payrate").value;

  // Calculate & Output Pay
  // calling a function during an .innerHTML should return to the .innerHTML
  // DARCY MADDOX
  document.getElementById("dm-wage").innerHTML = calcWage(dmHours, dmPayrate);
  // SOFIE ORENSTEIN
  document.getElementById("so-wage").innerHTML = calcWage(soHours, soPayrate);
  // KARL YOON
  document.getElementById("ky-wage").innerHTML = calcWage(kyHours, kyPayrate);
}

// parameters values are passed then result is returned to where the function is called
function calcWage(hours, payrate) {
  let overtime = 0;
  if (hours > 40) {
    overtime = hours - 40;
    // regular hours
    hours = 40;
  }
  // wage calculation
  let pay = hours * payrate + overtime * 1.5 * payrate;
  // can to .toFixed() here or where the function is called in the application
  return pay.toFixed(2);
}

// calcWage
// purpose:  to calculate the wage of an employee based on hours & hourly payrate
// data function needs:  hours, hourly pay rate
// data function returns: the wage/pay for the employee
