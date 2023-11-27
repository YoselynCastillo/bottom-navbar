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
  sell: {
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
  finance: {
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
  shop: {
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
  chat: {
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
  more: {
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
  { text: "sell", icon: SellIcon },
  { text: "finance", icon: FinanceIcon },
  { text: "shop", icon: ShopIcon },
  { text: "chat", icon: ChatIcon },
  { text: "more", icon: MoreIcon },
];
