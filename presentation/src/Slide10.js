import React, { Component } from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Notes,
  Magic,
  Appear,
  Link
} from "spectacle";

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Heading fontSize={10} textColor="primary">🙃</Heading>
    <List margin="10% 0">
      <Appear>
        <ListItem>World Happiness Report</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Šťastie na základe ekonomickej situácie, sociálnej pomoci atď.
        </ListItem>
      </Appear>
    </List>
    <Appear>
      <Cite>
        <Link href="https://www.kaggle.com/unsdsn/world-happiness">Kaggle</Link>
      </Cite>
    </Appear>
  </Slide>
);
