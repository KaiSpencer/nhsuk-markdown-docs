import { Card } from "nhsuk-react-components";

export function CardFeature() {
  return (
    <Card feature>
      <Card.Content>
        <Card.Heading className="nhsuk-heading-m">
          Feature Card Heading
        </Card.Heading>
        <Card.Description>Feature Card Description</Card.Description>
      </Card.Content>
    </Card>
  );
}
