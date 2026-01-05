import { format } from 'date-fns';
import { useState } from 'react';
import { CloseIcon, TagIcon } from '~/components/ui/icons';
import type { PostData } from '~/lib/types';
import { cn } from '~/lib/utils';

export default function PostList({
  posts,
  tags,
}: {
  posts: PostData[];
  tags: string[];
}) {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.data.tags?.includes(selectedTag))
    : posts;

  return (
    <>
      <TagFilter
        tags={tags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <PostCategoryList posts={filteredPosts} />
    </>
  );
}

function TagFilter({
  tags,
  selectedTag,
  setSelectedTag,
}: {
  tags: string[];
  selectedTag?: string;
  setSelectedTag: (tag: string | undefined) => void;
}) {
  const hasSelected = selectedTag !== undefined;

  function handleSelectTag(tag: string) {
    if (hasSelected && selectedTag === tag) {
      setSelectedTag(undefined);
    } else {
      setSelectedTag(tag);
    }
  }

  return (
    <div className="my-16">
      <div className="mb-4 flex items-center gap-2">
        <TagIcon width="0.9rem" height="0.9rem" className="text-text-2" />
        <span className="text-text-2 text-xs tracking-widest font-semibold" style={{ fontSize: '0.9rem', letterSpacing: '0.2em' }}>
          꼬리표
        </span>
      </div>
      {tags.length > 0 ? (
        <div className="relative">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pl-1">
            {tags.map((tag) => (
              <div key={tag} className="inline-block">
                <button
                  className={cn(
                    'link transition-all duration-200',
                    'group-hover:opacity-60 hover:opacity-100!',
                    hasSelected && selectedTag === tag && 'opacity-100!',
                    hasSelected && selectedTag !== tag && 'opacity-40!',
                  )}
                  style={{ fontSize: '1.25rem' }}
                  onClick={() => handleSelectTag(tag)}
                >
                  {tag}
                </button>
              </div>
            ))}
            {hasSelected && (
              <button
                className="text-text-3 hover:text-text-1 p-1.5 rounded-md hover:bg-gray-soft transition-all duration-200"
                onClick={() => setSelectedTag(undefined)}
                aria-label="Clear filter"
              >
                <CloseIcon width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="pl-1">
          <p className="text-text-3">준비 중입니다...</p>
        </div>
      )}
    </div>
  );
}

const CATEGORY_CONFIG = {
  thoughts: {
    label: '思錄',
    description: '경험과 사유로 얻은 인사이트에 대한 기록',
  },
  knowledge: {
    label: '知錄',
    description: '이해한 지식과 개념을 정리한 기록',
  },
  works: {
    label: '作錄',
    description: '직접 만들고 구현한 과정의 기록',
  },
} as const;

const CATEGORY_ORDER: Array<keyof typeof CATEGORY_CONFIG> = ['thoughts', 'knowledge', 'works'];

function PostCategoryList({ posts }: { posts: PostData[] }) {
  const categoryList = CATEGORY_ORDER.map((category) => {
    const postList = posts.filter((post) => post.data.category === category);
    return { category, postList };
  });

  return (
    <div className="my-16 space-y-14">
      {categoryList.map(({ category, postList }, index) => {
        const isLast = index === categoryList.length - 1;
        const config = CATEGORY_CONFIG[category];
        return (
          <div key={category} className="group/category relative">
            <div className="mb-5 -ml-5 pl-5">
              <h2 className="text-text-3 dark:text-text-2 text-xs uppercase tracking-widest font-semibold group-hover/category:text-text-2 dark:group-hover/category:text-text-1 transition-colors duration-200" style={{ fontSize: '0.9rem', letterSpacing: '0.2em' }}>
                <span className="text-text-2 dark:text-text-1 font-black">{config.label}</span>, {config.description}
              </h2>
            </div>
            <div className="relative border-l border-b border-divider/50 rounded-bl-2xl pl-5 pb-6 transition-all duration-300 group-hover/category:border-divider/80">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-divider/40 to-divider/60" />
              {postList.length > 0 ? (
                <ul className="flex flex-col items-start gap-2.5">
                  {postList.map((post) => {
                    return (
                      <li key={post.slug} className="w-full">
                        <a
                          href={`/posts/${post.slug}`}
                          className="hover:bg-gray-soft/50 -mx-1.5 flex items-center gap-3 rounded-lg px-1.5 py-1.5 transition-all duration-200 group-hover/category:opacity-60 hover:opacity-100! hover:translate-x-0.5 group/item"
                        >
                          <span className="text-text-1 flex-1 group-hover/item:text-text-1 transition-colors" style={{ fontSize: '1.125rem' }}>
                            {post.data.title}
                          </span>
                          <span className="text-text-3 shrink-0 tabular-nums transition-colors" style={{ fontSize: '0.875rem' }}>
                            {format(new Date(post.data.date), 'yyyy. MM. dd.')}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-text-3">준비 중입니다...</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
