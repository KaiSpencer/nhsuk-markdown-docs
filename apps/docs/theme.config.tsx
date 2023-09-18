import type { ThemeConfig } from "nextra-theme-nhsuk";

export default {
  project: {
    link: "https://github.com/shuding/nextra",
  },
  logo: <strong>Project</strong>,
  headerLinks: [{ href: "/docs", text: "Docs" }],
  headerName: "NHSUK Markdown Docs",
} satisfies ThemeConfig;
