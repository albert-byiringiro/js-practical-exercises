function calculateAge(dob) {
    // find the difference in time
    let month_diff = Date.now() - dob.getTime();

    // turn the difference into a a date
    let age_dt = new Date(month_diff);

    // extract a year out of the new date

    let year = age_dt.getUTCFullYear();

    // calculate the age based on the epoch time

    let age = Math.abs(year - 1970);

    return age;
}

let dob = new Date("06/15/1998");
console.log(calculateAge(dob));