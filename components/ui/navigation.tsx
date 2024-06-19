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

const menuLinks: Menu[] = [];

const footerMenuLinks: Menu[] = [];

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
                <NavigationLink href={groupItem.href} dark>
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
