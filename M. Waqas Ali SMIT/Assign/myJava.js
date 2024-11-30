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
  