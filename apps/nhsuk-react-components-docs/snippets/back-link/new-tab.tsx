import { BackLink } from "nhsuk-react-components";

export function BackLinkOpenInNewTab() {
  return (
    <BackLink asElement="a" href="#" rel="noopener noreferrer" target="_blank">
      Link
    </BackLink>
  );
}
