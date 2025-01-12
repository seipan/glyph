'use client';
import { LinkTo } from '@/components/atoms/LinkTo';
import { format } from 'date-fns';
import React, { FC, useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

interface Comment {
  id: string;
  glyph_id: string;
  glyph_title: string;
  content: string;
  created_at: Date;
}

type UserCommentsProps = {
  id: string;
};

export const UserComments: FC<UserCommentsProps> = () => {
  // const [comments, setComments] = useState<Comment[] | null>(null);
  const comment = [
    {
      id: '1',
      glyph_id: '1',
      glyph_title: 'test',
      content: 'test',
      created_at: new Date(),
    },
    {
      id: '1',
      glyph_id: '1',
      glyph_title: 'test',
      content: 'test',
      created_at: new Date(),
    },
  ];
  return (
    <div>
      <div className="text-2xl">Comments一覧</div>
      {comment?.map((comment: Comment, index: number) => (
        <div key={comment.id} className="my-6">
          <LinkTo href={`service/glyphs/${comment.glyph_id}`}>
            <div>
              <div className="grid grid-cols-4 xl:grid-cols-7">
                <div className="flex justify-start gap-4  xl:col-span-4 col-span-2">
                  <FaRegCommentDots className="w-7 h-7" />
                  <div className="text-2xl"> {comment.content}</div>
                </div>
                <div className="mt-auto mb-0">- {comment.glyph_title}</div>
              </div>
            </div>
          </LinkTo>
        </div>
      ))}
    </div>
  );
};
