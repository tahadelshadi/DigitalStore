import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

const CategoryDropdownMenu = () => {
  const category = [
    {
      id: 2,
      name: "laptop",
    },
    {
      id: 3,
      name: "phone",
    },
    {
      id: 4,
      name: "watch",
    },
    {
      id: 5,
      name: "camera",
    },
    {
      id: 6,
      name: "headphone",
    },
    {
      id: 7,
      name: "mouse",
    },
    {
      id: 8,
      name: "monitor",
    },
  ];
  const sortedCategory = category.sort((a: any, b: any) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex cursor-pointer flex-row items-center gap-1">
          <Bars3Icon aria-label="Hamburger Menu button" className="h-5 w-5" />
          <p>Category</p>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={sortedCategory}>
        {(category) => (
          <DropdownItem
            href={`/products?category=${category.name}`}
            key={category.name}
            color={category.name === "delete" ? "danger" : "default"}
            className="capitalize">
            {category.name}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoryDropdownMenu;
