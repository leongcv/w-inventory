import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  // Handles a GET /user request
  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
  
  // Handles a GET /apartments request
  rest.get('/apartments', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    // const isAuthenticated = sessionStorage.getItem('is-authenticated')
    // if (!isAuthenticated) {
    //   // If not authenticated, respond with a 403 error
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: 'Not authorized',
    //     }),
    //   )
    // }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'HDB',
        address: '259C Punggol Field',
        floor: '#01',
        doorNo: '001',
      }, {
        id: 2,
        name: 'HDB',
        address: '233 Simei Road',
        floor: '#02',
        doorNo: '222',
      }, {
        id: 3,
        name: 'HDB',
        address: '175A Yishun Street 21',
        floor: '#08',
        doorNo: '254',
      }, {
        id: 4,
        name: 'HDB',
        address: '745 Woodlands Circle',
        floor: '#12',
        doorNo: '275',
      }, {
        id: 5,
        name: 'HDB',
        address: '201 Bishan Street 23',
        floor: '#05',
        doorNo: '342',
      }, {
        id: 6,
        name: 'HDB',
        address: '133 Jalan Bukit Merah',
        floor: '#02',
        doorNo: '536',
      }),
    )
  }),
]
