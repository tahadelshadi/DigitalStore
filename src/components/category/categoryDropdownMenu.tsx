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
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex flex-row gap-1 items-center cursor-pointer">
          <Bars3Icon
            aria-label="Hamburger Menu button"
            className="w-5 h-5"
          />
          <p>Category</p>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={category}>
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
