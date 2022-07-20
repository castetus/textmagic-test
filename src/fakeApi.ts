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

interface Card {
  cardType: string,
  cardStatus: CARD_STATUSES,
  cardDate: Date,
  cardTitle: string,
  cardSubtitle: string,
  cardFootertext: string,
  cardPriority: CARD_PRIORITIES,
  cardAvatarLink: string,
}

export const CARDS: Card[] = [];

export function createRandomCard(): Card {
  return {
    cardType: faker.word.adjective(),
    cardStatus: takeRandomValue(CARD_STATUSES),
    cardDate: faker.date.birthdate(),
    cardTitle: faker.word.adjective(),
    cardSubtitle: faker.lorem.paragraph(),
    cardFootertext: faker.word.adjective(),
    cardPriority: takeRandomValue(CARD_PRIORITIES),
    cardAvatarLink: faker.image.imageUrl(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  CARDS.push(createRandomCard());
});
