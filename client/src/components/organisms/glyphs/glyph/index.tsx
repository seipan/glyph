import { Txt } from '@/components/atoms/Txt';
import { TGlyph } from '@/types/Glyph';
import { FC } from 'react';
import { format } from 'date-fns';
import { GrDocumentText } from 'react-icons/gr';
import { LinkTo } from '@/components/atoms/LinkTo';
type TProps = {
  glyph: TGlyph;
};

export const Glyph: FC<TProps> = ({ glyph }) => {
  return (
    <LinkTo
      href={`/service/glyphs/${glyph.id}`}
      className=" block  md:w-2/3 w-full"
    >
      <div className="border rounded-md border-black m-2 grid grid-cols-6 p-2 hover:bg-yellow-100 hover:cursor-pointer">
        <GrDocumentText
          size={40}
          fontWeight={1}
          className="place-self-center  justify-self-center col-span-2 lg:col-span-1"
        />
        <div className="col-span-4 lg:col-span-5">
          <Txt elm="h2" size="text-2xl">
            {glyph.title}
          </Txt>
          <Txt elm="p" size="text-sm">
            - {glyph.content.length}文字
          </Txt>
          <Txt elm="p" size="text-sm">
            - {format(new Date(glyph.updated_at), 'yyyy/MM/dd')}
          </Txt>
          <div className="mt-5 flex gap-5">
            {glyph.is_study && (
              <p>
                <span className="bg-red-300 py-1 px-2 rounded-md">
                  勉強会中
                </span>
              </p>
            )}
            {glyph.status === 'Public' && (
              <p>
                <span className=" bg-lime-300 py-1 px-2 rounded-md">
                  公開中
                </span>
              </p>
            )}
            {glyph.status === 'Private' && (
              <p>
                <span className=" bg-orange-200 py-1 px-2 rounded-md">
                  非公開
                </span>
              </p>
            )}
            {glyph.status === 'Draft' && (
              <p>
                <span className=" bg-orange-200 py-1 px-2 rounded-md">
                  下書き
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </LinkTo>
  );
};
