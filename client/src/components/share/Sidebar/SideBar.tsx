'use client';
import { SideBarList } from './SideBarList/SideBarList';
import { SideBarListItem } from './SideBarList/SidebarListItem';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineComment } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
export const SideBar = () => {
  return (
    <div className=" bg-slate-50 text-black min-h-screen top-0 fixed w-[230px] md:block hidden pt-5 border-r-2 border-slate-500 m-auto">
      <div className="mt-20">
        <SideBarList>
          <SideBarListItem
            href="/service/glyphs"
            logo={<GrDocumentText size={25} />}
          >
            Glyph
          </SideBarListItem>
          <SideBarListItem
            href="/service/comments"
            logo={<MdOutlineComment size={25} />}
          >
            Comment
          </SideBarListItem>

          <SideBarListItem
            href="/service/users/test"
            logo={<FiSettings size={25} />}
          >
            User Setting
          </SideBarListItem>
        </SideBarList>
      </div>
    </div>
  );
};
