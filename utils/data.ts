
type NavProps = {
    id: number;
  name: string;
  href: string;
};

type ProgrammeProps = {
  id: number;
  title: string;
  description: string;
}

export const navItems: NavProps[] = [
    { id: 1, name: "Festival", href: "/" }, 
    { id: 2, name: "Programme", href: "#programme" },
    { id: 3, name: "Designers", href: "#designers" },
    { id: 4, name: "Partners", href: "#partners" },
]


export const festivalProgramme: ProgrammeProps[] = [
  {
    id: 1,
    title: "Day 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem officia culpa odio similique quibusdam quasi laborum fuga dolor molestias?"
  },
  {
    id: 2,
    title: "Day 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem officia culpa odio similique quibusdam quasi laborum fuga dolor molestias?"
  },
  {
    id: 3,
    title: "Day 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem officia culpa odio similique quibusdam quasi laborum fuga dolor molestias?"
  },
]