
import FlowingMenu from "./FlowingMenu";
import { projectsData } from "@/components/data/projects";

export function Projects() {
  const menuItems = projectsData.map((project: any) => ({
    title: project.title,
    image: project.image as string,
    link: project.liveUrl || project.repoUrl || "#",
  }));

  return (
    <section className="relative h-[80vh] w-full bg-black">
      <FlowingMenu items={menuItems} />
    </section>
  );
}