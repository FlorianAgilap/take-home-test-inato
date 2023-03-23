import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn of a generic drug that's not expired", () => {
    const testDrugExpiresIn = 2;
    const testDrugBenefit = 3;
    const testDrugName = "test";

    const expectedExpiresIn = 1;
    const expectedBenefit = 2;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease the benefit twice as fast and expiresIn of a generic drug that's expired", () => {
    const testDrugExpiresIn = 0;
    const testDrugBenefit = 3;
    const testDrugName = "test";

    const expectedExpiresIn = -1;
    const expectedBenefit = 1;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn but not benefit of a generic drug with benefit already at 0", () => {
    const testDrugExpiresIn = 5;
    const testDrugBenefit = 0;
    const testDrugName = "test";

    const expectedExpiresIn = 4;
    const expectedBenefit = 0;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn but increase benefit of a Herbal Tea that's not expired", () => {
    const testDrugExpiresIn = 5;
    const testDrugBenefit = 0;
    const testDrugName = "Herbal Tea";

    const expectedExpiresIn = 4;
    const expectedBenefit = 1;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn but increase benefit twice as fast of a Herbal Tea that's expired", () => {
    const testDrugExpiresIn = 0;
    const testDrugBenefit = 0;
    const testDrugName = "Herbal Tea";

    const expectedExpiresIn = -1;
    const expectedBenefit = 2;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn but not increase benefit of a Herbal Tea with benefit already at 50", () => {
    const testDrugExpiresIn = 5;
    const testDrugBenefit = 50;
    const testDrugName = "Herbal Tea";

    const expectedExpiresIn = 4;
    const expectedBenefit = 50;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease neither expiresIn or benefit of a Magic Pill", () => {
    const testDrugExpiresIn = 10;
    const testDrugBenefit = 10;
    const testDrugName = "Magic Pill";

    const expectedExpiresIn = 10;
    const expectedBenefit = 10;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn but increase benefit of a Fervex that's has more than 10 days before expiration", () => {
    const testDrugExpiresIn = 12;
    const testDrugBenefit = 0;
    const testDrugName = "Fervex";

    const expectedExpiresIn = 11;
    const expectedBenefit = 1;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn but increase benefit twice as fast of a Fervex that's has less than 10 days but more than 5 before expiration", () => {
    const testDrugExpiresIn = 7;
    const testDrugBenefit = 0;
    const testDrugName = "Fervex";

    const expectedExpiresIn = 6;
    const expectedBenefit = 2;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn but increase benefit thrice as fast of a Fervex that's has less than 5 days but isn't expired", () => {
    const testDrugExpiresIn = 2;
    const testDrugBenefit = 0;
    const testDrugName = "Fervex";

    const expectedExpiresIn = 1;
    const expectedBenefit = 3;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease expiresIn and have a benefit of 0 for a Fervex that's expired", () => {
    const testDrugExpiresIn = 0;
    const testDrugBenefit = 5;
    const testDrugName = "Fervex";

    const expectedExpiresIn = -1;
    const expectedBenefit = 0;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease the benefit twice as fast and expiresIn of a Dafalgan that's not expired", () => {
    const testDrugExpiresIn = 2;
    const testDrugBenefit = 3;
    const testDrugName = "Dafalgan";

    const expectedExpiresIn = 1;
    const expectedBenefit = 1;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
  it("should decrease the benefit four times as fast and expiresIn of a Dafalgan that's expired", () => {
    const testDrugExpiresIn = 0;
    const testDrugBenefit = 5;
    const testDrugName = "Dafalgan";

    const expectedExpiresIn = -1;
    const expectedBenefit = 1;
    expect(
      new Pharmacy([
        new Drug(testDrugName, testDrugExpiresIn, testDrugBenefit),
      ]).updateBenefitValue()
    ).toEqual([new Drug(testDrugName, expectedExpiresIn, expectedBenefit)]);
  });
});
