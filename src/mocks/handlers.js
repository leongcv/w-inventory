import { rest } from 'msw'

const APARTMENT_LIST = [
  {
    id: 1,
    name: 'HDB @ Punggol 259C',
    address: '259C Punggol Field',
    floor: '#01',
    doorNo: '001',
  }, {
    id: 2,
    name: 'HDB @ Simei 233',
    address: '233 Simei Road',
    floor: '#02',
    doorNo: '222',
  }, {
    id: 3,
    name: 'HDB @ Yishun 175A',
    address: '175A Yishun Street 21',
    floor: '#08',
    doorNo: '254',
  }, {
    id: 4,
    name: 'HDB @ Woodlands 745',
    address: '745 Woodlands Circle',
    floor: '#12',
    doorNo: '275',
  }, {
    id: 5,
    name: 'HDB @ Bishan 201',
    address: '201 Bishan Street 23',
    floor: '#05',
    doorNo: '342',
  }, {
    id: 6,
    name: 'HDB @ Bukit Merah 133',
    address: '133 Jalan Bukit Merah',
    floor: '#02',
    doorNo: '536',
  }
]

const INVENTORY_ITEM_LIST = [
  {
    name: 'Air-conditioner'
  },
  {
    name: 'Refrigerator'
  },
  {
    name: 'Sofa'
  },
  {
    name: 'TV'
  },
  {
    name: 'Dining table'
  },
  {
    name: 'Dining chair'
  },
  {
    name: 'Bed (King)'
  },
  {
    name: 'Bed (Queen)'
  },
  {
    name: 'Bed (Single)'
  },
  {
    name: 'Bed (Super Single)'
  },
  {
    name: 'Wardrobe'
  },
  {
    name: 'Microwave oven'
  },
  {
    name: 'Standing fan'
  },
  {
    name: 'Book shelf (3x4)'
  },
  {
    name: 'Book shelf (2x4)'
  },
  {
    name: 'Curtain set'
  },
  {
    name: 'Washing machine'
  },
  {
    name: 'Kettle'
  },
  {
    name: 'Network router'
  },
  {
    name: 'Wooden stool'
  },
  {
    name: 'Shoes rack'
  },
  {
    name: 'Standing fan'
  },
]

const INVENTORY_LIST = [
  {
    id: 1,
    apartmentId: 1,
    item: 'Refrigerator',
    quantity: 1,
  },
  {
    id: 2,
    apartmentId: 1,
    item: 'Air-conditioner',
    quantity: 3,
  },
  {
    id: 3,
    apartmentId: 1,
    item: 'Sofa',
    quantity: 1,
  },
  {
    id: 4,
    apartmentId: 1,
    item: 'TV',
    quantity: 2,
  },
  {
    id: 5,
    apartmentId: 1,
    item: 'Dining table',
    quantity: 1,
  },
  {
    id: 6,
    apartmentId: 1,
    item: 'Dining chair',
    quantity: 4,
  },
  {
    id: 7,
    apartmentId: 1,
    item: 'Bed (Double)',
    quantity: 1,
  },
  {
    id: 8,
    apartmentId: 1,
    item: 'Bed (Single)',
    quantity: 1,
  },
  {
    id: 9,
    apartmentId: 1,
    item: 'Wardrobe',
    quantity: 2,
  },
  {
    id: 10,
    apartmentId: 3,
    item: 'Microwave oven',
    quantity: 1,
  },
  {
    id: 11,
    apartmentId: 3,
    item: 'Dining table',
    quantity: 1,
  },
  {
    id: 12,
    apartmentId: 3,
    item: 'Dining chair',
    quantity: 4,
  },
  {
    id: 13,
    apartmentId: 3,
    item: 'Curtain set',
    quantity: 5,
  },
]

// sort
function sortByProp(a, b, prop, ascOrDesc = 'asc') {
  const isAsc = ascOrDesc.toLowerCase() === 'asc';
  const nameA = typeof a[prop] === 'string' ? a[prop].toUpperCase() : a[prop];
  const nameB = typeof b[prop] === 'string' ? b[prop].toUpperCase() : b[prop];

  if (nameA < nameB) {
    return isAsc ? -1 : 1;
  }
  if (nameA > nameB) {
    return isAsc ? 1 : -1;
  }

  // names must be equal
  return 0;
};

export const handlers = [

  // Handles a GET /apartments request
  rest.get('/apartments', (req, res, ctx) => {
    return res(
      // Delays response for 2000ms.
      ctx.delay(2000),
      ctx.status(200),
      ctx.json(APARTMENT_LIST),
    )
  }),

  // Handles a GET /apartment?id request
  rest.get('/apartment', (req, res, ctx) => {
    const apartmentId = req.url.searchParams.get('id');
    const apartment = APARTMENT_LIST.find(a => a.id === Number(apartmentId))

    // If authenticated, return a mocked user details
    return res(
      // Delays response for 2000ms.
      ctx.delay(2000),
      ctx.status(200),
      ctx.json(apartment),
    )
  }),

  // Handles a GET /apartment/inventory?id request
  rest.get('/apartment/inventory', (req, res, ctx) => {
    const apartmentId = req.url.searchParams.get('id');
    let inventoryList = INVENTORY_LIST.filter(i => i.apartmentId === Number(apartmentId));
    inventoryList.sort((a, b) => sortByProp(a, b, 'item'));

    return res(
      // Delays response for 2000ms.
      ctx.delay(2000),
      ctx.status(200),
      ctx.json(inventoryList),
    )
  }),

  // Handles a GET /inventory?id request
  rest.get('/inventory', (req, res, ctx) => {
    const inventoryId = req.url.searchParams.get('id');
    let inventoryItem = INVENTORY_LIST.find(i => i.id === Number(inventoryId));

    return res(
      // Delays response for 2000ms.
      ctx.delay(2000),
      ctx.status(200),
      ctx.json(inventoryItem),
    )
  }),

  // Handles a GET /inventory-items request
  rest.get('/inventory-items', (req, res, ctx) => {
    return res(
      // Delays response for 2000ms.
      ctx.delay(),
      ctx.status(200),
      ctx.json(INVENTORY_ITEM_LIST.sort((a, b) => sortByProp(a, b, 'item'))),
    )
  }),
]
