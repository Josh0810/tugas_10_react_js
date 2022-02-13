import {
  Grid,
  Button,
  Container,
  Divider,
  Flag,
  Header,
  Image,
  Icon,
  Input,
  Label,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <Grid container columns="equal" style={{ marginTop: "10px" }}>
        <Grid.Column textAlign="center">
          <Flag name="id" />
        </Grid.Column>
        <Grid.Column width={1} textAlign="center">
          <Icon name="angle left" size="big" />
        </Grid.Column>
        <Grid.Column width={1} textAlign="center">
          <Icon name="angle right" size="big" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Input fluid
            type="text"
            placeholder="search..."
            icon={<Icon name="star" />}
          />
        </Grid.Column>
        <Grid.Column>
          <Header as={"h4"}>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              avatar
            />
            <span>Patrick</span>
          </Header>
        </Grid.Column>
      </Grid>
      <Divider horizontal>SELAMAT DATANG !!!!</Divider>
      <Container textAlign="right">
        <Label textAlign="right" as="a" color="teal" tag>
          SPORT
        </Label>
      </Container>
      <br />
      <br />
      <Container textAlign="center">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <br />
          <Button color="teal" content="Tambah Tautan Ke List" icon="add" labelPosition="left"/>
      </Container>
    </div>
  );
}

export default App;
