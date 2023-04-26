import { SideBar } from "@/components/share/Sidebar/SideBar";

export default function ServiceLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main>
			<SideBar />
			<div className="md:pl-[230px] pt-20 ">
				<div className="p-10">{children}</div>
			</div>
		</main>
	);
}