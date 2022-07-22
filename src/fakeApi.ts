// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

const takeRandomValue = (obj: any) => {
  const objLength = Object.keys(obj).length / 2;
  const propNumber = Math.floor(Math.random() * objLength);
  return obj[propNumber];
};

// eslint-disable-next-line no-shadow
enum CARD_PRIORITIES {low=0, high=1, urgent=2}
// eslint-disable-next-line no-shadow
enum CARD_STATUSES {'need attention', 'closed', 'clicked', 'responded'}
// eslint-disable-next-line no-shadow
enum CARD_TYPES {'task', 'deal', 'ticket', 'campaign'}

interface Card {
  cardType: CARD_TYPES,
  cardStatus: CARD_STATUSES,
  cardDate: Date,
  cardTitle: string,
  cardSubtitle: string,
  cardFootertext: string,
  cardPriority: CARD_PRIORITIES,
  cardAvatarLink: string,
}

interface MenuItem {
  icon: string,
  text: string,
  counter: number | null,
}

interface CardType {
  name: string,
  text: string,
  icon: string,
}

interface IconButton {
  icon: string,
  text: string,
}

interface Tab {
  text: string,
  counter: number | null,
  name: string,
}

export const CARDS: Card[] = [];

export function createRandomCard(): Card {
  return {
    cardType: takeRandomValue(CARD_TYPES),
    cardStatus: takeRandomValue(CARD_STATUSES),
    cardDate: faker.date.recent(10),
    cardTitle: faker.word.adjective(),
    cardSubtitle: faker.lorem.paragraph(),
    cardFootertext: faker.word.adjective(),
    cardPriority: takeRandomValue(CARD_PRIORITIES),
    cardAvatarLink: faker.image.people(200, 200, true),
  };
}

Array.from({ length: 10 }).forEach(() => {
  CARDS.push(createRandomCard());
});

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: 'house',
    text: 'Home',
    counter: null,
  },
  {
    icon: 'email',
    text: 'Tickets',
    counter: 5,
  },
  {
    icon: 'quickreply',
    text: 'Messages',
    counter: 3,
  },
  {
    icon: 'people',
    text: 'Contacts',
    counter: null,
  },
];

export const TOP_SECTION_BUTTONS: IconButton[] = [
  {
    icon: 'house',
    text: 'Call',
  },
  {
    icon: 'email',
    text: 'Email',
  },
  {
    icon: 'chat',
    text: 'Text',
  },
  {
    icon: 'edit',
    text: 'Edit',
  },
  {
    icon: 'more_vert',
    text: 'More',
  },
];

export const TOP_SECTION_TABS: Tab[] = [
  {
    text: 'Activities',
    counter: null,
    name: 'activities',
  },
  {
    text: 'Logs',
    counter: null,
    name: 'logs',
  },
  {
    text: 'Visits',
    counter: null,
    name: 'visits',
  },
  {
    text: 'Files',
    counter: 8,
    name: 'files',
  },
];
