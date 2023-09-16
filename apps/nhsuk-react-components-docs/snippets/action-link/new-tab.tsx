import { ActionLink } from "nhsuk-react-components";

export function ActionLinkOpenInNewTab() {
  return (
    <ActionLink
      asElement="a"
      href="#"
      rel="noopener noreferrer"
      target="_blank"
    >
      Link
    </ActionLink>
  );
}
