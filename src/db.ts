import pgPromise from 'pg-promise';

const pgp = pgPromise({/* Initialization Options */});
export const db = pgp("postgres://postgres:root@localhost:5432/grobinator");
