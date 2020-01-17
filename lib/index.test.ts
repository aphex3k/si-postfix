import * as chai from "chai";
import * as mocha from "mocha";

import Scale from "./scale";
import { postfix } from "./";

const expect = chai.expect;

describe("Si-postfix should convert", () => {
  it("-1 to -1", () => {
    expect(postfix(-1)).to.equal("-1");
  });
  it("0 to 0", () => {
    expect(postfix(0)).to.equal("0");
  });
  it("1 to 1", () => {
    expect(postfix(1)).to.equal("1");
  });
  it("1 234 to 1k", () => {
    expect(postfix(1234)).to.equal("1k");
  });
  it("-1 234 to -1k", () => {
    expect(postfix(-1234)).to.equal("-1k");
  });
  it("1 234 567 to 1m", () => {
    expect(postfix(1234567)).to.equal("1m");
  });
  it("1 234 567 890 to 1b", () => {
    expect(postfix(1234567890)).to.equal("1b");
  });
  it("2 000 000 000 000 to 2t", () => {
    expect(postfix(2000000000000)).to.equal("2t");
  });
  it("3 124 000 000 000 000 to 3124t", () => {
    expect(postfix(3124000000000000)).to.equal("3124t");
  });
});

describe("Si-postfix using long scale should convert", () => {
  it("1 to 1", () => {
    expect(postfix(1, Scale.Long)).to.equal("1");
  });
  it("1 000 to 1k", () => {
    expect(postfix(Math.pow(10, 3), Scale.Long)).to.equal("1k");
  });
  it("1 000 000 to 1m", () => {
    expect(postfix(Math.pow(10, 6), Scale.Long)).to.equal("1m");
  });
  it("1 000 000 000 to 1000m", () => {
    expect(postfix(Math.pow(10, 9), Scale.Long)).to.equal("1000m");
  });
  it("1 000 000 000 000 to 1b", () => {
    expect(postfix(Math.pow(10, 12), Scale.Long)).to.equal("1b");
  });
  it("1 000 000 000 000 000 to 1000b", () => {
    expect(postfix(Math.pow(10, 15), Scale.Long)).to.equal("1000b");
  });
  it("1 000 000 000 000 000 000 to 1t", () => {
    expect(postfix(Math.pow(10, 18), Scale.Long)).to.equal("1t");
  });
  it("1 000 000 000 000 000 000 000 to 1000t", () => {
    expect(postfix(Math.pow(10, 21), Scale.Long)).to.equal("1000t");
  });
});
