const router = require('express').Router()
// GET Places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/hthaiml.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/codingcatcafe.jpg'
      }]
      
    res.render('places/index', { places})
})
// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})
//POST
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



module.exports = router
