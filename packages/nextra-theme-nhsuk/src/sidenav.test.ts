import { describe, expect, it } from "bun:test";
import type { PageMapItem } from "nextra";
import { pageTitlesFromPageMapItems } from "./sidenav";

describe("pageTitlesFromPageMapItems", () => {
  it("single title", () => {
    const pageMapItems: PageMapItem[] = [
      { kind: "Folder", children: [], name: "foo", route: "/foo" },
      { kind: "MdxPage", name: "bar", route: "/foo/bar" },
      { kind: "MdxPage", name: "baz", route: "/foo/baz" },
      { kind: "Meta", data: { title: "Foo" } },
    ];
    const actual = pageTitlesFromPageMapItems(pageMapItems);

    expect(actual).toEqual({ title: "Foo" });
  });
  it("empty object if no meta", () => {
    const pageMapItems: PageMapItem[] = [
      { kind: "Folder", children: [], name: "foo", route: "/foo" },
      { kind: "MdxPage", name: "bar", route: "/foo/bar" },
      { kind: "MdxPage", name: "baz", route: "/foo/baz" },
    ];
    const actual = pageTitlesFromPageMapItems(pageMapItems);
    expect(actual).toBeEmpty();
  });
});
