import type { MetaJsonFile } from "nextra";
import { describe, it, expect } from "bun:test";
import {
  mapPageNameFromMetaJson,
  rootPagesAndFoldersFromPageOpts,
  sortRootPagesAndFolders,
} from "../utils";

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

describe("rootPagesAndFoldersFromPageOpts", () => {
  it("returns empty array if pageOpts is empty", () => {
    const pageOpts = {
      pageMap: [],
    };
    const result = rootPagesAndFoldersFromPageOpts(pageOpts);
    expect(result).toEqual([]);
  });
  it("returns empty array if pageOpts is empty", () => {
    const pageOpts = {
      pageMap: [
        {
          kind: "Meta",
        },
      ],
    };
    const result = rootPagesAndFoldersFromPageOpts(pageOpts);
    expect(result).toEqual([]);
  });
  it("returns array of pages and folders if pageOpts contains pages and folders", () => {
    const pageOpts = {
      pageMap: [
        {
          kind: "Meta",
        },
        {
          kind: "Page",
          name: "page1",
          path: "/page1",
        },
        {
          kind: "Folder",
          name: "folder1",
          path: "/folder1",
        },
      ],
    };
    const result = rootPagesAndFoldersFromPageOpts(pageOpts);
    expect(result).toEqual([
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
    ]);
  });
});

describe("sortRootPagesAndFolders", () => {
  it("returns rootPagesAndFolders if rootMeta is undefined", () => {
    const rootPagesAndFolders = [
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
    ];
    const result = sortRootPagesAndFolders(rootPagesAndFolders);
    expect(result).toEqual(rootPagesAndFolders);
  });
  it("returns rootPagesAndFolders if rootMeta is empty", () => {
    const rootPagesAndFolders = [
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
    ];
    const rootMeta = {
      data: {},
      kind: "Meta",
    } as MetaJsonFile;
    const result = sortRootPagesAndFolders(rootPagesAndFolders, rootMeta);
    expect(result).toEqual(rootPagesAndFolders);
  });
  it("returns rootPagesAndFolders if rootMeta is not empty but does not contain any of the rootPagesAndFolders", () => {
    const rootPagesAndFolders = [
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
    ];
    const rootMeta = {
      data: {
        key: "value",
      },
      kind: "Meta",
    } as MetaJsonFile;
    const result = sortRootPagesAndFolders(rootPagesAndFolders, rootMeta);
    expect(result).toEqual(rootPagesAndFolders);
  });
  it("returns rootPagesAndFolders sorted by meta.json", () => {
    const rootPagesAndFolders = [
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
    ];
    const rootMeta = {
      data: {
        folder1: "folder1",
        page1: "page1",
      },
      kind: "Meta",
    } as MetaJsonFile;
    const result = sortRootPagesAndFolders(rootPagesAndFolders, rootMeta);
    expect(result).toEqual([
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
    ]);
  });
  it("returns rootPagesAndFolders sorted by meta.json and then alphabetically", () => {
    const rootPagesAndFolders = [
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
      {
        kind: "Folder",
        name: "folder2",
        path: "/folder2",
      },
    ];
    const rootMeta = {
      data: {
        folder2: "folder2",
        page1: "page1",
      },
      kind: "Meta",
    } as MetaJsonFile;
    const result = sortRootPagesAndFolders(rootPagesAndFolders, rootMeta);
    expect(result).toEqual([
      {
        kind: "Folder",
        name: "folder2",
        path: "/folder2",
      },
      {
        kind: "Page",
        name: "page1",
        path: "/page1",
      },
      {
        kind: "Folder",
        name: "folder1",
        path: "/folder1",
      },
    ]);
  });
});
