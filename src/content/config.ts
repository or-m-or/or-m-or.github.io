import { defineCollection } from 'astro:content';
import { postSchema } from '~/lib/types';
/* 컬렉션 스키마(제목/날짜/tags 등) 정의 */

const postsCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
};
