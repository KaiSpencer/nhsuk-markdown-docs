import type { MetaJsonFile, PageMapItem, PageOpts } from "nextra";

export function rootPagesAndFoldersFromPageOpts(
  pageOpts: PageOpts,
): Exclude<PageMapItem, { kind: "Meta" }>[] {
  const rootPagesAndFolders: Exclude<PageMapItem, { kind: "Meta" }>[] = [];
  for (const page of pageOpts.pageMap) {
    if (page.kind !== "Meta") {
      rootPagesAndFolders.push(page);
    }
  }
  return rootPagesAndFolders;
}

/**
 * Sorts the root pages and folders based on the order in the meta.json file.
 * If the page or folder is not in the meta.json file, it will be sorted alphabetically.
 * @param rootPagesAndFolders - The root pages and folders to sort
 * @param rootMeta - The meta.json file to use for sorting
 */
export function sortRootPagesAndFolders(
  rootPagesAndFolders: ReturnType<typeof rootPagesAndFoldersFromPageOpts>,
  rootMeta?: MetaJsonFile,
): ReturnType<typeof rootPagesAndFoldersFromPageOpts> {
  if (!rootMeta) return rootPagesAndFolders;
  const sortedRootPagesAndFolders = rootPagesAndFolders.sort((a, b) => {
    const orderedNameValues = Object.keys(rootMeta.data);
    const aIndex = orderedNameValues.indexOf(a.name);
    const bIndex = orderedNameValues.indexOf(b.name);
    if (aIndex !== -1) {
      if (bIndex !== -1) {
        return aIndex - bIndex;
      }
      return -1;
    }
    if (bIndex !== -1) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
  return sortedRootPagesAndFolders;
}

export function mapPageNameFromMetaJson(
  metaJson: MetaJsonFile,
  name: string,
): string {
  const nameInMetaJson = name in metaJson.data;
  if (nameInMetaJson) {
    if (typeof metaJson.data[name] === "string") {
      return metaJson.data[name] as string;
    }
    // TODO make this dev only
    // eslint-disable-next-line no-console -- Useful Dev warning
    console.warn(
      `MetaJson data for ${name} is not a string, we do not support complex meta objects yet.`,
    );
  }
  return name;
}
