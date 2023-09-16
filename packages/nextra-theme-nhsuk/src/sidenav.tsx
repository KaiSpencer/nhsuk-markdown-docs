import Link from "next/link";
import type { Folder, Meta, PageMapItem, PageOpts } from "nextra";

export function pageTitlesFromPageMapItems(
  pageMapItems: PageMapItem[]
): Record<string, unknown> {
  for (const pageMapItem of pageMapItems) {
    if (pageMapItem.kind === "Meta") {
      // TODO Handle more complex meta objects
      if (typeof pageMapItem.data === "object") {
        return {};
      }
      return pageMapItem.data;
    }
  }
  return {};
}

function RenderFolder({
  currentRoute,
  name,
  folderChildren,
}: {
  currentRoute: string;
  name: string;
  folderChildren: Folder["children"];
}): JSX.Element {
  return (
    <div>
      <h2 className="app-side-nav__heading">{name}</h2>
      {folderChildren.map((child) => {
        const childTitles = pageTitlesFromPageMapItems(folderChildren);
        if (child.kind === "MdxPage") {
          if (child.name === "index") return null;
          return (
            <div
              className={`app-side-nav__item${
                child.route === currentRoute
                  ? " app-side-nav__item--current"
                  : ""
              }`}
              key={child.route.toString()}
            >
              <Link className="app-side-nav__link" href={child.route}>
                {typeof childTitles[child.name] === "string"
                  ? (childTitles[child.name] as string)
                  : child.name}
              </Link>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export function SideNav({ pageOpts }: { pageOpts: PageOpts }): JSX.Element {
  const pageTitles = pageTitlesFromPageMapItems(pageOpts.pageMap);

  return (
    <nav className="app-side-nav">
      {pageOpts.pageMap.map((page) => {
        if (page.kind === "Folder") {
          if (pageOpts.route.includes(page.route)) {
            return (
              <RenderFolder
                currentRoute={pageOpts.route}
                folderChildren={page.children}
                key={page.route.toString()}
                name={
                  typeof pageTitles[page.name] === "string"
                    ? (pageTitles[page.name] as string)
                    : page.name
                }
              />
            );
          }
        }
        return null;
      })}
    </nav>
  );
}
