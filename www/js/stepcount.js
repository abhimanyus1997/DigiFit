var x = document.getElementById("demo");
var successHandler = function (pedometerData) {
    var startDate=pedometerData.startDate;
    var endDate=pedometerData.endDate;
    var steps=pedometerData.numberOfSteps;
    var dist=pedometerData.distance;
    // pedometerData.floorsAscended;
    // pedometerData.floorsDescended;
    x.innerHTML = "Steps:" + steps +"\nDistance:"+dist;
};

