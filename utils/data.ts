
type NavProps = {
    id: number;
  name: string;
  href: string;
};

export const navItems: NavProps[] = [
    { id: 1, name: "Festival", href: "/" }, 
    { id: 2, name: "Programme", href: "#programme" },
    { id: 3, name: "Designers", href: "#designers" },
    { id: 4, name: "Partners", href: "#partners" },
]