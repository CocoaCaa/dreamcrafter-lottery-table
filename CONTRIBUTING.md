# DreamCrafter Lottery Table Contributing

## Config

The items and lottery settings are stored in [config.json](/public/config.json) in the below format:
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

1. Get the texture from minecraft JAR file resources
2. Scale the image up to 32x32
3. Put the image in `public/img/item` or `public/img/block`

   Block - The image will be displayed as a block
   Item - The image will be displayed as a flat item
4. In config.json, add a new row in `items` (See config below for details)

### Add new lottery

1. Create a new row in config.json `lotteries` (See config below for details)
2. `lottery_id` is the unique name of the lottery
3. `title` is the lottery title
4. Add items to `items` (Max 9x3 items)
5. Add keys on how to exchange it.

## Developing

This project is built in [Vue.js](https://vuejs.org/)

### Pre-requirement
- Node.js >= 10
- Yarn

### Setup
```sh
git clone https://github.com/minixz/dreamcrafter-lottery-table.git
cd dreamcrafter-lottery-table
yarn install
```

### Development runtime
```sh
yarn serve
```

### Build
```sh
yarn build
```

## Open a Pull Request

For any changes, please fork this repo and create a pull request

