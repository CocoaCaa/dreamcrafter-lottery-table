interface ConfigItem {
  type: 'item' | 'block',
  imageId: string;
  name: string;
  lore: string;
  enchanted: boolean;
}

type ConfigItems = Record<string, ConfigItem>;

interface ConfigLotteryItem {
  id: string;
  qty: number;
}

interface ConfigLotteryKeyExchange extends ConfigLotteryItem {
  money?: number;
}

interface ConfigLotteryKey {
  itemId: string;
  qty: number;
  exchanges: ConfigLotteryKeyExchange[][];
}

interface ConfigLottery {
  title: string;
  items: (ConfigLotteryItem | null)[];
  keys: ConfigLotteryKey;
}

interface Config {
  items: ConfigItems;
  lotteries: Record<string, ConfigItem>;
}
