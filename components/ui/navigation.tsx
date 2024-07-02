import NavigationLink from "./navigation-link";
import Title from "./title";

interface Menu {
  label?: string;
  href?: string;
  group?: {
    label: string;
    items: Omit<Menu, "group">[];
  };
}

const menuLinks: Menu[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Tokenomics",
    href: "#tokenomics",
  },
  {
    label: "How to buy",
    href: "#how-to-buy",
  },
  {
    label: "Team",
    href: "#team",
  },
];

const footerMenuLinks: Menu[] = [
  {
    group: {
      label: "Lollipop",
      items: menuLinks,
    },
  },
  {
    group: {
      label: "Lollipop games",
      items: [
        {
          label: "Lollipop Rush",
          href: "#",
        },
      ],
    },
  },
  {
    group: {
      label: "Legal",
      items: [
        {
          label: "Privacy policy",
          href: "#",
        },
        {
          label: "Terms of services",
          href: "#",
        },
        {
          label: "Cookie policy",
          href: "#",
        },
        {
          label: "Disclaimer",
          href: "#",
        },
      ],
    },
  },
];

export const renderMenuLinks = () => {
  return menuLinks.map((item, index) => (
    <li key={`main_menu_${index}`}>
      <NavigationLink href={item.href}>{item.label}</NavigationLink>
    </li>
  ));
};

export const renderFooterMenuLinks = () => {
  return footerMenuLinks.map((item, index) => {
    if (item.group) {
      return (
        <div key={`footer_menu_${index}`}>
          <Title order={4}>{item.group.label}</Title>
          <ul>
            {item.group.items.map((groupItem, groupItemIndex) => (
              <li key={`footer_group_menu_${groupItemIndex}`}>
                <NavigationLink href={groupItem.href}>
                  {groupItem.label}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  });
};
