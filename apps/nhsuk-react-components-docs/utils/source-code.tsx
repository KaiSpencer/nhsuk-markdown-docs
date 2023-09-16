import { useData } from "nextra/data";
import { getHighlighter, renderToHtml } from "shiki";
import type { Highlighter, Lang } from "shiki";
import type { ReactNode } from "react";

interface SourceCodeProps {
  /**
   * The name of the file to display the source code for, relative to the `components` directory.
   */
  fileName: string;
  component: ReactNode;
}

export function SourceCode(props: SourceCodeProps) {
  const { fileName } = props;
  const examples = useData("ssg");

  const html = examples[fileName]
    // Remove out HTML components we replace with nextra components
    .replaceAll("</code>", "")
    .replaceAll("<code>", "")
    .replace(/<pre [^>]*>/gi, "")
    .replace("</pre>", "")
    // For some reasons, when doing this empty lines are lost
    .replaceAll(
      '<span class="line"></span>',
      '<span class="line">\n</span>',
      "gi",
    );

  return (
    <div
      style={{
        paddingBottom: "24px",
      }}
    >
      <div style={{ border: "1px solid #ddd", padding: "24px" }}>
        {props.component}
      </div>
      <div
        style={{
          border: "1px solid #ddd",
          background: "white",
          padding: "24px",
          position: "relative",
        }}
      >
        <pre>
          <div style={{ background: "#f0f4f5", padding: "16px" }}>
            {/*<Button*/}
            {/*  style={{*/}
            {/*    position: "absolute",*/}
            {/*    top: "36px",*/}
            {/*    right: "36px",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Copy Code*/}
            {/*</Button>*/}
            <code dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </pre>
      </div>
    </div>
  );
}

let highlighter: Highlighter;

async function highlightCode(code: string, lang: Lang) {
  const theme = "css-variables";
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: [lang],
      theme,
    });
  }
  const themedTokens = highlighter.codeToThemedTokens(code, lang, theme);
  const html = renderToHtml(themedTokens);
  return html;
}

/** Creates the `getStaticProp` function to use the given file names in the SourceCode component. */
export async function getSourceCodeStaticProps(fileNames: string[]) {
  const highlightedExamples: Record<string, string> = {};

  for (const fileName of fileNames) {
    const raw = await import(`!!raw-loader!../snippets/${fileName}`);

    const html = await highlightCode(raw.default, "tsx");
    highlightedExamples[fileName] = html;
  }
  return {
    props: {
      ssg: highlightedExamples,
    },
  };
}
