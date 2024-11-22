import { pgTable, serial, text, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age')
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const comic = pgTable('comic', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  type: text('type', { enum: ['manga', 'manhwa', 'manhua'] }).notNull(),
  status: text('status', { enum: ['ongoing', 'completed'] }).notNull(),
  release: timestamp('release', { withTimezone: true }).notNull(),
  updatedOn: timestamp('updated_on', { withTimezone: true }).notNull(),
  genres: jsonb('genres').notNull(),
  synopsis: text('synopsis').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  rating: integer('rating'),
});

export type Comic = typeof comic.$inferSelect;
export type NewComic = typeof comic.$inferInsert;

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
