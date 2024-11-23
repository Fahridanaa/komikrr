import { pgTable, serial, text, integer, timestamp, jsonb, varchar } from 'drizzle-orm/pg-core';

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

export const comics = pgTable('comics', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author'),
  type: text('type', { enum: ['manga', 'manhwa', 'manhua'] }).notNull(),
  status: text('status', { enum: ['ongoing', 'completed'] }).notNull(),
  release: text('release').notNull(),
  updatedOn: timestamp('updated_on', { withTimezone: true, mode: 'date' }).notNull(),
  genres: jsonb('genres').notNull(),
  synopsis: text('synopsis').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  rating: text('rating'),
  slug: text('slug').notNull().unique(),
});

export const genres = pgTable('genres', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  icon: varchar('icon', { length: 255 }).notNull(),
  description: text('description').notNull(),
  image: varchar('image', { length: 255 }).notNull(),
});

export type Comic = typeof comics.$inferSelect;
export type NewComic = typeof comics.$inferInsert;

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
