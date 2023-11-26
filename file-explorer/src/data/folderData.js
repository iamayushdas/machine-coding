const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "index.html",
          isFolder: false,
          items: [],
        },
        {
          id: 4,
          name: "favicon.ico",
          isFolder: false,
          items: [],
        },
        {
          id: 5,
          name: "manifest.json",
          isFolder: false,
          items: [],
        },
        {
          id: 6,
          name: "logo.png",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 7,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 8,
          name: "data",
          isFolder: true,
          items: [
            {
              item: 9,
              name: "folderData",
              isFolder: true,
              items: [
                {
                  id: 10,
                  name: "data.json",
                  isFolder: false,
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
        id: 11,
        name: 'package.json',
        isFolder: false,
        items: []
    }
  ],
};

export default explorer