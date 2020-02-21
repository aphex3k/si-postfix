import * as chai from "chai";

import Scale from "./scale";

const expect = chai.expect;

describe("Scale.Short and Scale.Long", () => {
  it("should not be equal", () => {
    expect(Scale.Short).to.not.equal(Scale.Long);
  });
});
