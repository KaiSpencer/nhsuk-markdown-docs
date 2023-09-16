import { Card } from "nhsuk-react-components";

export function CardImage() {
  return (
    <Card clickable>
      <Card.Image
        alt=""
        src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
      />
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
