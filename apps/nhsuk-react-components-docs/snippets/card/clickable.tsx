import { Card } from "nhsuk-react-components";

export function CardClickable() {
  return (
    <Card clickable>
      <Card.Content>
        <Card.Heading className="nhsuk-heading-m">
          <Card.Link href="#clickable">
            Introduction to care and support
          </Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their
          carers
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
