import { Card } from "nhsuk-react-components";

export function CardGroup() {
  return (
    <Card.Group>
      <Card.GroupItem width="one-half">
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="/installation">Installation</Card.Link>
            </Card.Heading>
            Install the NHS.UK React Components package in your React project
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width="one-half">
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="/components">Components</Card.Link>
            </Card.Heading>
            See all the components and how to use them in your project
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width="one-half">
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="/migration-guides">Migration Guides</Card.Link>
            </Card.Heading>
            See how to migrate from older versions of the component library to
            newer versions
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  );
}
