function showForm(plan) {
    var formContainer = document.querySelector(".form-container");
    formContainer.style.display = "flex"; 

    var inputs = formContainer.querySelectorAll("input");
    inputs[0].value = ""; 
    inputs[1].value = ""; 
    inputs[2].value = plan.name;
    inputs[3].value = "";
}

function hideForm() {
    var formContainer = document.querySelector(".form-container");
    formContainer.style.display = "none"; 
}

document.querySelectorAll(".card .button").forEach((button, index) => {
    button.addEventListener("click", () => {
        var plans = [standard, enhanced, elite];
        showForm(plans[index]);
    });
});

document.getElementById("redBtn").addEventListener("click", hideForm);

document.getElementById("greenBtn").addEventListener("click", () => {
    var formContainer = document.querySelector(".form-container");
    var inputs = formContainer.querySelectorAll("input");

    var userName = inputs[0].value.trim();
    var email = inputs[1].value.trim();
    var plan = inputs[2].value.trim();
    var paidStatus = inputs[3].value.trim();

    if (userName != '') {
        // alert(`Response Submitted!\n\nName: ${userName}\nEmail: ${email}\nPlan: ${plan}\nPaid: ${paidStatus}`);
        // hideForm(); 
    } else {
        // alert("Please fill out all fields before submitting!");
        alert(`Response Submitted!\n\nName: ${inputs[0].value}\nEmail: ${email}\nPlan: ${plan}\nPaid: ${paidStatus}`);
        hideForm(); 
    }
});

function HostingPlan(name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
}

var standard = new HostingPlan(
    "Standard Subscription",
    "$5 /Month",
    ["10GB Storage", "100GB Bandwidth", "1 Domain"],
    "Email Support"
);

var enhanced = new HostingPlan(
    "Pro Plan",
    "$15 /Month",
    ["50GB Storage", "500GB Bandwidth", "5 Domains"],
    "Email + Phone Support"
);

var elite = new HostingPlan(
    "Business Plan",
    "$25 /Month",
    ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"],
    "24/7 Support"
);