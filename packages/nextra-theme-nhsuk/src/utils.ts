import type { MetaJsonFile, PageMapItem, PageOpts } from "nextra";

export function rootPagesAndFoldersFromPageOpts(
  pageOpts: PageOpts
): Exclude<PageMapItem, { kind: "Meta" }>[] {
  const rootPagesAndFolders = [];
  for (const page of pageOpts.pageMap) {
    if (page.kind !== "Meta") {
      rootPagesAndFolders.push(page);
    }
  }
  return rootPagesAndFolders;
}

export function mapPageNameFromMetaJson(
  metaJson: MetaJsonFile,
  name: string
): string {
  const nameInMetaJson = name in metaJson.data;
  if (nameInMetaJson) {
    if (typeof metaJson.data[name] === "string") {
      return metaJson.data[name] as string;
    }
    // TODO make this dev only
    // eslint-disable-next-line no-console -- Useful Dev warning
    console.warn(
      `MetaJson data for ${name} is not a string, we do not support complex meta objects yet.`
    );
  }
  return name;
}
