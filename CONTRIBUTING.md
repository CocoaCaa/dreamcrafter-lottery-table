# DreamCrafter Lottery Table Contributing

## Config

The items and lottery settings are store on [config.json](/public/config.json) and the format:
```jsonc
{
  "items": {
    "<unique_id>": {
      "type": "item / block",
      "imageId": "image_name", // /public/img/<type>/<imageId>.png
      "name": "item_name", // Support color codes
      "lore": "item_lore", // Support color codes
      "enchanted": true / false // Show enchant effect
    }
    // ...
  },
  "lotteryGroups": [
    {
      "title": "group_name",
      "lotteries": [
        "lottery_id"
        // ...
      ]
    }
    // ...
  ],
  "lotteries": {
    "lottery_id": {
      "title": "lottery_title",
      "items": [
        {"id": "item_unique_id", "qty": number},
        // ...
      ],
      "keys": [
        {
          "itemId": "item_unique_id",
          "qty": number,
          "exchanges": [
            [{"money": number}],
            [{"id": "item_unique_id", "qty": number}]
            // ...
          ]
        }
        // ...
      ]
    }
    // ...
  }
}
```

### Add new Items

1. Get the texture from minecraft JAR files resources
2. Scale up the image to 32x32
3. Put the image to `public/img/item` or `public/img/block`

   Block - The image will show as a block
   Item - The image will show as a flat item
4. On config.json, add a new row on `items` (See below config for details)

### Add new lottery

1. Create a new row on config.json `lotteries` (See below config for details)
2. `lottery_id` is the unique name of the lottery
3. `title` is the lottery title
4. Add items into `items` (Max 9x3 items)
5. Add the keys for how to exchange it.

## Developing

Thsi project is using [Vue.js](https://vuejs.org/) to built the codebase

### Pre-requirement
- Node.js >= 10
- Yarn

### Setup
```sh
git clone https://github.com/minixz/dreamcrafter-lottery-table.git
cd dreamcrafter-lottery-table
yarn install
```

### Develop runtime
```sh
yarn serve
```

### Build
```sh
yarn build
```

## Open a Pull Request

For any changes, please fork this repo first and create pull request

