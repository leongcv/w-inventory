import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const APARTMENT_LIST = [
  {
    id: '1',
    name: 'HDB @ Punggol 259C',
    address: '259C Punggol Field',
    floor: '#01',
    doorNo: '001',
  }, {
    id: '2',
    name: 'HDB @ Simei 233',
    address: '233 Simei Road',
    floor: '#02',
    doorNo: '222',
  }, {
    id: '3',
    name: 'HDB @ Yishun 175A',
    address: '175A Yishun Street 21',
    floor: '#08',
    doorNo: '254',
  }, {
    id: '4',
    name: 'HDB @ Woodlands 745',
    address: '745 Woodlands Circle',
    floor: '#12',
    doorNo: '275',
  }, {
    id: '5',
    name: 'HDB @ Bishan 201',
    address: '201 Bishan Street 23',
    floor: '#05',
    doorNo: '342',
  }, {
    id: '6',
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

let InventoryList = [
  {
      "id": "1",
      "apartmentId": "1",
      "item": "Refrigerator",
      "quantity": 1
  },
  {
      "id": "2",
      "apartmentId": "1",
      "item": "Air-conditioner",
      "quantity": 4
  },
  {
      "id": "3",
      "apartmentId": "1",
      "item": "Sofa",
      "quantity": 1
  },
  {
      "id": "4",
      "apartmentId": "1",
      "item": "TV",
      "quantity": 2
  },
  {
      "id": "5",
      "apartmentId": "1",
      "item": "Dining table",
      "quantity": 1
  },
  {
      "id": "6",
      "apartmentId": "1",
      "item": "Dining chair",
      "quantity": 4
  },
  {
      "id": "9",
      "apartmentId": "1",
      "item": "Wardrobe",
      "quantity": 2
  },
  {
      "id": "10",
      "apartmentId": "3",
      "item": "Microwave oven",
      "quantity": 1
  },
  {
      "id": "11",
      "apartmentId": "3",
      "item": "Dining table",
      "quantity": 1
  },
  {
      "id": "12",
      "apartmentId": "3",
      "item": "Dining chair",
      "quantity": 4
  },
  {
      "id": "13",
      "apartmentId": "3",
      "item": "Curtain set",
      "quantity": 5
  },
  {
      "id": "3187ad19-3e66-44bd-9324-5dd29ace7cb1",
      "apartmentId": "1",
      "item": "Bed (King)",
      "quantity": 1
  },
  {
      "id": "321b22b7-51e2-4309-bc4a-b3f118e08112",
      "apartmentId": "1",
      "item": "Book shelf (2x4)",
      "quantity": 1
  },
  {
      "id": "8228193f-a5d2-43e3-a39d-1f3ebf859b9f",
      "apartmentId": "1",
      "item": "Shoes rack",
      "quantity": 1
  },
  {
      "id": "623ca3ce-9126-4def-923d-9cb66426a7aa",
      "apartmentId": "1",
      "item": "Wooden stool",
      "quantity": 1
  },
  {
      "id": "483a24f6-25f7-4ae4-b340-5c8f123e0bda",
      "apartmentId": "1",
      "item": "Washing machine",
      "quantity": 1
  },
  {
      "id": "cbe70a8e-ce48-463a-9cd3-70adc1e8258a",
      "apartmentId": "1",
      "item": "Standing fan",
      "quantity": 1
  },
  {
      "id": "78e5a914-58a1-4f8f-8a4f-9dcbda97e71a",
      "apartmentId": "1",
      "item": "Network router",
      "quantity": 1
  },
  {
      "id": "e4e5f57a-493d-4d3e-880f-ab193dd2d658",
      "apartmentId": "1",
      "item": "Kettle",
      "quantity": 1
  },
  {
      "id": "0c78d652-85c2-4bbf-8aa5-1c8f227a9b6a",
      "apartmentId": "1",
      "item": "Book shelf (3x4)",
      "quantity": 1
  },
  {
      "id": "890bdbb5-196c-466e-adbe-f9cc17282604",
      "apartmentId": "1",
      "item": "Bed (Super Single)",
      "quantity": 1
  },
  {
      "id": "fad12073-0fbc-497e-845a-bfbd5326ab20",
      "apartmentId": "1",
      "item": "Bed (Single)",
      "quantity": 1
  },
  {
      "id": "fffdbca2-7d9b-4b53-9209-81f7b2bb5664",
      "apartmentId": "1",
      "item": "Bed (Queen)",
      "quantity": 1
  },
]

let InventoryList_old = [
  {
    id: '1',
    apartmentId: '1',
    item: 'Refrigerator',
    quantity: 1,
  },
  {
    id: '2',
    apartmentId: '1',
    item: 'Air-conditioner',
    quantity: 3,
  },
  {
    id: '3',
    apartmentId: '1',
    item: 'Sofa',
    quantity: 1,
  },
  {
    id: '4',
    apartmentId: '1',
    item: 'TV',
    quantity: 2,
  },
  {
    id: '5',
    apartmentId: '1',
    item: 'Dining table',
    quantity: 1,
  },
  {
    id: '6',
    apartmentId: '1',
    item: 'Dining chair',
    quantity: 4,
  },
  {
    id: '7',
    apartmentId: '1',
    item: 'Bed (Double)',
    quantity: 1,
  },
  {
    id: '8',
    apartmentId: '1',
    item: 'Bed (Single)',
    quantity: 1,
  },
  {
    id: '9',
    apartmentId: '1',
    item: 'Wardrobe',
    quantity: 2,
  },
  {
    id: '10',
    apartmentId: '3',
    item: 'Microwave oven',
    quantity: 1,
  },
  {
    id: '11',
    apartmentId: '3',
    item: 'Dining table',
    quantity: 1,
  },
  {
    id: '12',
    apartmentId: '3',
    item: 'Dining chair',
    quantity: 4,
  },
  {
    id: '13',
    apartmentId: '3',
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
    const apartment = APARTMENT_LIST.find(a => a.id === apartmentId)

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
    let inventoryList = InventoryList.filter(i => i.apartmentId === apartmentId);
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
    let inventoryItem = InventoryList.find(i => i.id === inventoryId);

    return res(
      // Delays response for 2000ms.
      ctx.delay(2000),
      ctx.status(200),
      ctx.json(inventoryItem),
    )
  }),

  // Handles a GET /inventory-items request
  rest.get('/inventory-items', (req, res, ctx) => {
    // Sort
    let itemList = INVENTORY_ITEM_LIST.sort((a, b) => sortByProp(a, b, 'item'));

    // Filter by apartment
    const apartmentId = req.url.searchParams.get('apartmentId');
    if (apartmentId) {
      let filteredInventoryList = InventoryList.filter(i => i.apartmentId === apartmentId)
      itemList = itemList.filter(item => !filteredInventoryList.some(inv => inv.item === item.name))
    }

    return res(
      // Delays response for random amount of time.
      ctx.delay(),
      ctx.status(200),
      ctx.json(itemList),
    )
  }),

  rest.post('/inventory/delete', (req, res, ctx) => {
    req.json().then(data => {
      InventoryList = InventoryList.filter(i => i.id !== data.id)
    })

    return res(
      // Delays response for random amount of time.
      ctx.delay(),
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.post('/inventory/edit', (req, res, ctx) => {
    // req.json().then(d => console.log('/inventory/edit', d))
    req.json().then(data => {
      InventoryList.find(i => i.id === data.id).quantity = data.quantity;
    })

    return res(
      // Delays response for random amount of time.
      ctx.delay(),
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.post('/inventory/add', (req, res, ctx) => {
    // req.json().then(d => console.log('/inventory/add', d))
    req.json().then(data => {
      data.id = uuidv4();
      InventoryList.push(data);
      console.log('After added: ', InventoryList)
    })
    
    return res(
      // Delays response for random amount of time.
      ctx.delay(),
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),
]
