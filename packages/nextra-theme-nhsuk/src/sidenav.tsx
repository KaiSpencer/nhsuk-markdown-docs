import Link from "next/link";
import type { Folder, Meta, PageMapItem, PageOpts } from "nextra";

export function pageTitlesFromPageMapItems(pageMapItems: PageMapItem[]): Meta {
  for (const pageMapItem of pageMapItems) {
    if (pageMapItem.kind === "Meta") {
      return pageMapItem.data;
    }
  }
  return {};
}

function RenderFolder({
  currentRoute,
  name,
  route,
  children,
}: {
  currentRoute: string;
  name: string;
  route: string;
  children: Folder["children"];
}) {
  return (
    <div>
      <h2 className="app-side-nav__heading">{name}</h2>
      {children.map((child) => {
        const childTitles = pageTitlesFromPageMapItems(children);
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
                  : child.name ?? child.name}
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
}

export function SideNav({ pageOpts }: { pageOpts: PageOpts }) {
  const pageTitles = pageTitlesFromPageMapItems(pageOpts.pageMap);

  console.log("LOG: pageOpts", pageOpts);
  return (
    <nav className="app-side-nav">
      {pageOpts.pageMap.map((page) => {
        if (page.kind === "Folder") {
          if (pageOpts.route.includes(page.route)) {
            return (
              <RenderFolder
                children={page.children}
                currentRoute={pageOpts.route}
                key={page.route.toString()}
                name={
                  typeof pageTitles[page.name] === "string"
                    ? (pageTitles[page.name] as string)
                    : page.name ?? page.name
                }
                route={page.route}
              />
            );
          }
        }
        return null;
      })}
    </nav>
  );
}
