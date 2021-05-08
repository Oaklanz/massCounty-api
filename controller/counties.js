const counties = require('../counties.js')

const getAllCounties = (request, response) => {
  return response.send(counties)
}

const getByString = (request, response) => {
  const { searchString } = request.params
  const foundSeat = counties.filter((county) => {
    return county.seat.includes(searchString) ||
       county.site.includes(searchString) || county.name.includes(searchString)
  })

  return response.send(foundSeat)
}

const saveNewCounty = (request, response) => {
  console.log(request.body)
  const { counties } = request.counties
}


module.exports = {
  getAllCounties,
  getByString,
  saveNewCounty
}
