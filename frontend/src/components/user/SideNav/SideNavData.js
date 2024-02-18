import { Icons } from "../../../icons";

const SideNavItems = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Home",
        icon: Icons.HomeIcon,
        path: "/",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        label: "All products",
        icon: Icons.InventoryIcon,
        path: "/all-product",
      },
      {
        label: "Add product",
        icon: Icons.InventoryIcon,
        path: "/add-product",
      },
    ],
  },
  {
    title: "Extra",
    links: [
      {
        label: "Page not  found",
        icon: Icons.NotListedLocationIcon,
        path: "/PAgenotfound",
      },
    ],
  },
];

export { SideNavItems };
