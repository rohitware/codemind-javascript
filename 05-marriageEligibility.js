function marriageEligibility(gender, age) {

    if (age >= 21 && gender == "Male") {
        console.log(`You are ${age} years old ${gender}:"You are eligible for Marriage"`);
    }
    else if (age >= 18 && gender == "Female") {
        console.log(`You are ${age} years old ${gender}:"You are eligible for Marriage"`);
    }
    else {
        console.log(`You are ${age} years old ${gender}: "Sorry you are not Eligible for Marriage"`);
    }
}
marriageEligibility("Male", 19);
marriageEligibility("Male", 25);
marriageEligibility("Female", 16);
marriageEligibility("Female", 28);
marriageEligibility("Female", 19);
marriageEligibility("Male", 21);
marriageEligibility("Other", 35);