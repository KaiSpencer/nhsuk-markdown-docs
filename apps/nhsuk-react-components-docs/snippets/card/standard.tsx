import { Card } from "nhsuk-react-components";

export function CardStandard() {
  return (
    <Card>
      <Card.Content>
        <Card.Heading>
          If you need help now but it&apos;s not an emergency
        </Card.Heading>
        <Card.Description>
          Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
