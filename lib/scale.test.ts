import * as chai from "chai";
import * as mocha from "mocha";

import Scale from "./scale";

const expect = chai.expect;

describe("Scale.Short and Scale.Long", () => {
  it("should not be equal", () => {
    expect(Scale.Short).to.not.equal(Scale.Long);
  });
});
