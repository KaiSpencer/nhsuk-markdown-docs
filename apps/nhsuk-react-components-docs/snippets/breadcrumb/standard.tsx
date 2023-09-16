import { Breadcrumb } from "nhsuk-react-components";

export function StandardBreadcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/level-one">Level one</Breadcrumb.Item>
      <Breadcrumb.Item href="/level-one/level-two">Level two</Breadcrumb.Item>
      <Breadcrumb.Item href="/level-one/level-two/level-three">
        Level three
      </Breadcrumb.Item>
      <Breadcrumb.Back href="/level-one/level-two/level-three">
        Back to Level three
      </Breadcrumb.Back>
    </Breadcrumb>
  );
}
