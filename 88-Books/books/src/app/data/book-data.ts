import { Book } from '../book';
// import { METHODS } from 'http';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'a game of thrones',
    author: 'george r. r. martin',
    publisher: 'Bantom Spectra',
    year: 1996,
    pages: 694
  },
  {
    id: randomId(),
    title: 'leviathan wakes',
    author: 'james s. a. corey',
    publisher: 'Orbit Books',
    year: 2011,
    pages: 582
  },
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert heinlein',
    publisher: "G. P. Punam's Sons",
    year: 1961,
    pages: 408
  },
  {
    id: randomId(),
    title: 'where the red ferm grows',
    author: 'wilson rawls',
    publisher: 'Doubleday',
    year: 1961,
    pages: 245
  },
  {
    id: randomId(),
    title: 'a fire upon the deep',
    author: 'vernor vinge',
    publisher: 'Tor Books',
    year: 1992,
    pages: 391
  }
];

function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
