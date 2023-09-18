import type { MetaJsonFile } from "nextra";
import { describe, it, expect } from "bun:test";
import { mapPageNameFromMetaJson } from "../utils";

describe("mapPageNameFromMetaJson", () => {
  it("return name if key exists in metaJson", () => {
    const metaJson = {
      data: {
        key: "value",
      },
      kind: "Meta",
    } as MetaJsonFile;
    const name = "key";
    const result = mapPageNameFromMetaJson(metaJson, name);
    expect(result).toBe("value");
  });
  it("returns name if multiple keys exist in metaJson", () => {
    const metaJson = {
      data: {
        key: "value",
        key2: "value2",
      },
      kind: "Meta",
    } as MetaJsonFile;
    const name = "key";
    const result = mapPageNameFromMetaJson(metaJson, name);
    expect(result).toBe("value");
  });
  it("returns name passed in if key does not exist in metaJson", () => {
    const metaJson = {
      data: {
        key: "value",
      },
      kind: "Meta",
    } as MetaJsonFile;
    const name = "key2";
    const result = mapPageNameFromMetaJson(metaJson, name);
    expect(result).toBe(name);
  });
});
