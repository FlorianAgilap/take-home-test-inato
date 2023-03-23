export class Drug {
  constructor(name, expiresIn, benefit) {
    if (isNaN(expiresIn)) {
      throw "expiresIn parameter must be a number";
    }
    if (isNaN(benefit)) {
      throw "benefit parameter must be a number";
    }
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefit(drug, change) {
    if (isNaN(change)) {
      throw "change parameter must be a number";
    }
    drug.benefit = drug.benefit + change;
    if (drug.benefit < 0) {
      drug.benefit = 0;
    }
    if (drug.benefit > 50) {
      drug.benefit = 50;
    }
  }
  updateBenefitValue() {
    for (let drug of this.drugs) {
      switch (drug.name) {
        case "Herbal Tea":
          drug.expiresIn = drug.expiresIn - 1;
          if (drug.expiresIn < 0) {
            // The drug has expired, benefit increases twice as fast
            this.updateBenefit(drug, +2);
          } else {
            // The drug hasn't expired yet, benefit increases
            this.updateBenefit(drug, +1);
          }
          break;
        case "Fervex":
          drug.expiresIn = drug.expiresIn - 1;
          if (drug.expiresIn < 0) {
            // The drug has expired
            drug.benefit = 0;
          } else if (drug.expiresIn <= 5) {
            // There are less than 5 days before expiration, benefit increases thrice as fast
            this.updateBenefit(drug, +3);
          } else if (drug.expiresIn <= 10) {
            // There are less than 10 days before expiration, benefit increases twice as fast
            this.updateBenefit(drug, +2);
          } else {
            // The drug hasn't expired yet, benefit increases
            this.updateBenefit(drug, +1);
          }
          break;
        case "Magic Pill":
          // Doesn't change in any iteration
          break;
        default:
          drug.expiresIn = drug.expiresIn - 1;
          if (drug.expiresIn < 0) {
            // The drug has expired, benefit decreases twice as fast
            this.updateBenefit(drug, -2);
          } else {
            // The drug hasn't expired yet, benefit decreases
            this.updateBenefit(drug, -1);
          }
          break;
      }
    }
    return this.drugs;
  }
}
