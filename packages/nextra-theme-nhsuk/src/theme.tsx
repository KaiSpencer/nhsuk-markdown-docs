import Head from "next/head";
import { MDXProvider } from "nextra/mdx";
import type { HTMLProps } from "react";
import type { NextraThemeLayoutProps, PageOpts } from "nextra";
import { SideNav } from "./sidenav";

function Layout({
  pageOpts,
  children,
}: {
  pageOpts: PageOpts;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{pageOpts.title}</title>
      </Head>
      <div>
        <header className="nhsuk-header" role="banner">
          <div className="nhsuk-width-container nhsuk-header__container">
            <div className="nhsuk-header__logo">
              <a
                aria-label="NHS homepage"
                className="nhsuk-header__link nhsuk-header__link--service "
                href="/"
              >
                <svg
                  className="nhsuk-logo"
                  height="40"
                  viewBox="0 0 40 16"
                  width="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="nhsuk-logo__background"
                    d="M0 0h40v16H0z"
                    fill="#005eb8"
                  />
                  <path
                    className="nhsuk-logo__text"
                    d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"
                    fill="#fff"
                  />
                </svg>

                <span className="nhsuk-header__service-name">
                  NHSUK React Components
                </span>
              </a>
            </div>

            <div className="nhsuk-header__content" id="content-header">
              <div className="nhsuk-header__menu">
                <button
                  aria-controls="header-navigation"
                  aria-expanded="false"
                  className="nhsuk-header__menu-toggle"
                  id="toggle-menu"
                >
                  Menu
                </button>
              </div>
            </div>
          </div>

          <nav
            aria-label="Primary navigation"
            aria-labelledby="label-navigation"
            className="nhsuk-header__navigation"
            id="header-navigation"
            role="navigation"
          >
            <div className="nhsuk-width-container">
              <p className="nhsuk-header__navigation-title">
                <span id="label-navigation">Menu</span>
                <button
                  className="nhsuk-header__navigation-close"
                  id="close-menu"
                >
                  <svg
                    aria-hidden="true"
                    className="nhsuk-icon nhsuk-icon__close"
                    focusable="false"
                    height="27"
                    viewBox="0 0 24 24"
                    width="27"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                  </svg>
                  <span className="nhsuk-u-visually-hidden">Close menu</span>
                </button>
              </p>
              <ul className="nhsuk-header__navigation-list">
                <li className="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
                  <a className="nhsuk-header__navigation-link" href="/">
                    Home
                    <svg
                      aria-hidden="true"
                      className="nhsuk-icon nhsuk-icon__chevron-right"
                      height="34"
                      viewBox="0 0 24 24"
                      width="34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
                    </svg>
                  </a>
                </li>
                <li className="nhsuk-header__navigation-item">
                  <a
                    className="nhsuk-header__navigation-link"
                    href="/installation"
                  >
                    Installation
                    <svg
                      aria-hidden="true"
                      className="nhsuk-icon nhsuk-icon__chevron-right"
                      height="34"
                      viewBox="0 0 24 24"
                      width="34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
                    </svg>
                  </a>
                </li>
                <li className="nhsuk-header__navigation-item">
                  <a
                    className="nhsuk-header__navigation-link"
                    href="/components"
                  >
                    Components
                    <svg
                      aria-hidden="true"
                      className="nhsuk-icon nhsuk-icon__chevron-right"
                      height="34"
                      viewBox="0 0 24 24"
                      width="34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
                    </svg>
                  </a>
                </li>
                <li className="nhsuk-header__navigation-item">
                  <a
                    className="nhsuk-header__navigation-link"
                    href="/migration-guides"
                  >
                    Migration Guides
                    <svg
                      aria-hidden="true"
                      className="nhsuk-icon nhsuk-icon__chevron-right"
                      height="34"
                      viewBox="0 0 24 24"
                      width="34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div
          className="nhsuk-width-container-fluid"
          style={{ paddingLeft: 300, paddingRight: 300 }}
        >
          <main className="nhsuk-main-wrapper" id="maincontent" role="main">
            <div className="nhsuk-grid-row">
              <div className="">
                <div className="app-pane">
                  <div className="app-pane__side-bar">
                    <SideNav pageOpts={pageOpts} />
                  </div>
                  <MDXProvider
                    components={{
                      pre: (
                        props: HTMLProps<HTMLPreElement> & {
                          filename?: string;
                        }
                      ) => {
                        return (
                          <pre
                            style={{
                              border: "1px solid #ddd",
                              background: "white",
                            }}
                          >
                            {props.filename ? (
                              <div
                                style={{
                                  paddingLeft: "24px",
                                  paddingTop: "4px",
                                  paddingBottom: "4px",
                                  borderBottom: "1px solid #ddd",
                                }}
                              >
                                {props.filename}
                              </div>
                            ) : null}
                            <div
                              style={{
                                background: "white",
                                padding: "24px",
                                position: "relative",
                              }}
                            >
                              {props.children}
                            </div>
                          </pre>
                        );
                      },
                      code: (props) => {
                        return <code {...props} />;
                      },
                    }}
                  >
                    <div className="app-pane__main-content">
                      <div>{children}</div>
                    </div>
                  </MDXProvider>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer role="contentinfo">
          <div className="nhsuk-footer" id="nhsuk-footer">
            <div className="nhsuk-width-container">
              <h2 className="nhsuk-u-visually-hidden">Support links</h2>
              <ul className="nhsuk-footer__list">
                <li className="nhsuk-footer__list-item">
                  <a className="nhsuk-footer__list-item-link" href="#">
                    Accessibility statement
                  </a>
                </li>
                <li className="nhsuk-footer__list-item">
                  <a className="nhsuk-footer__list-item-link" href="#">
                    Contact us
                  </a>
                </li>
                <li className="nhsuk-footer__list-item">
                  <a className="nhsuk-footer__list-item-link" href="#">
                    Cookies
                  </a>
                </li>
                <li className="nhsuk-footer__list-item">
                  <a className="nhsuk-footer__list-item-link" href="#">
                    Privacy policy
                  </a>
                </li>
                <li className="nhsuk-footer__list-item">
                  <a className="nhsuk-footer__list-item-link" href="#">
                    Terms and conditions
                  </a>
                </li>
              </ul>

              <p className="nhsuk-footer__copyright">&copy; Crown copyright</p>
            </div>
          </div>
        </footer>{" "}
      </div>
    </>
  );
}

export function NextraThemeNhsuk({
  pageOpts,
  children,
  themeConfig,
  pageProps,
}: NextraThemeLayoutProps) {
  return <Layout pageOpts={pageOpts}>{children}</Layout>;
}
