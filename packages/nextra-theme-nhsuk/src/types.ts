import type { DocsThemeConfig } from "nextra-theme-docs";

type HeaderLink = {
  href: string;
  text: string;
};

export interface ThemeConfig extends DocsThemeConfig {
  headerName: string;
  headerLinks: HeaderLink[];
}
