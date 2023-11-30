import {
  BrowseIcon,
  ViewAllIcon,
  SellIcon,
  AttachMoneyIcon,
  FinanceIcon,
  ShopIcon,
  ChatIcon,
  MoreIcon,
} from "../assets/icons";

type DataType = {
  [key: string]: {
    options: {
      icon: any;
      text: string;
      url: string;
    }[];
  };
};

export const data: DataType = {
  "Sell/Trade": {
    options: [
      {
        icon: BrowseIcon,
        text: "Browse by category",
        url: "https://lit.dev/",
      },
      {
        icon: ViewAllIcon,
        text: "View all inventory",
        url: "https://lit.dev/",
      },
      {
        icon: SellIcon,
        text: "Shop cars near me",
        url: "https://lit.dev/",
      },
      {
        icon: AttachMoneyIcon,
        text: "Find a store",
        url: "https://lit.dev/",
      },
    ],
  },
  Finance: {
    options: [
      {
        icon: BrowseIcon,
        text: "Browse by category",
        url: "https://lit.dev/",
      },
      {
        icon: ViewAllIcon,
        text: "View all inventory",
        url: "https://lit.dev/",
      },
      // {
      //     icon: "browser",
      //     text: "Shop cars near me",
      //     url: "https://lit.dev/"
      // },
      // {
      //     icon: "browser",
      //     text: "Find a store",
      //     url: "https://lit.dev/"
      // },
    ],
  },
  Shop: {
    options: [
      {
        icon: BrowseIcon,
        text: "Browse by category",
        url: "https://lit.dev/",
      },
      // {
      //     icon: "browser",
      //     text: "View all inventory",
      //     url: "https://lit.dev/"
      // },
      // {
      //     icon: "browser",
      //     text: "Shop cars near me",
      //     url: "https://lit.dev/"
      // },
      // {
      //     icon: "browser",
      //     text: "Find a store",
      //     url: "https://lit.dev/"
      // },
    ],
  },
  Chat: {
    options: [
      {
        icon: BrowseIcon,
        text: "Browse by category",
        url: "https://lit.dev/",
      },
      {
        icon: ViewAllIcon,
        text: "View all inventory",
        url: "https://lit.dev/",
      },
      {
        icon: SellIcon,
        text: "Shop cars near me",
        url: "https://lit.dev/",
      },
      // {
      //     icon: "browser",
      //     text: "Find a store",
      //     url: "https://lit.dev/"
      // },
    ],
  },
  More: {
    options: [
      {
        icon: BrowseIcon,
        text: "Browse by category",
        url: "https://lit.dev/",
      },
      {
        icon: ViewAllIcon,
        text: "View all inventory",
        url: "https://lit.dev/",
      },
      {
        icon: SellIcon,
        text: "Shop cars near me",
        url: "https://lit.dev/",
      },
      {
        icon: AttachMoneyIcon,
        text: "Find a store",
        url: "https://lit.dev/",
      },
    ],
  },
};


export const Array = [
  { text: "Sell/Trade", icon: SellIcon },
  { text: "Finance", icon: FinanceIcon },
  { text: "Shop", icon: ShopIcon },
  { text: "Chat", icon: ChatIcon },
  { text: "More", icon: MoreIcon },
];
