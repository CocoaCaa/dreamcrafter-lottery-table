interface ConfigItem {
  type: 'item' | 'block',
  imageId: string;
  name: string;
  lore: string;
}

type ConfigItems = Record<string, ConfigItem>;

interface ConfigLotteryItem {
  id: string;
  qty: number;
}

interface ConfigLottery {
  title: string;
  items: (ConfigLotteryItem | null)[];
}

interface Config {
  items: ConfigItems;
  lotteries: Record<string, ConfigItem>;
}
