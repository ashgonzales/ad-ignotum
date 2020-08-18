// https://api.ipgeolocation.io/astronomy?apiKey=ee038a94cec645899bb99e71b6c99e8f

const grabData = async (city) => {
  const url = `https://api.ipgeolocation.io/astronomy?apiKey=ee038a94cec645899bb99e71b6c99e8f&location=${city}`
  try {
    const response = await axios.get(url)
    const cityData = response.data
    console.log(cityData)
    postData(cityData)
  } catch (error) {
    console(`Error: ${error}`)
  }
}

function postData(data) {
  // for (const [key, value] of Object.entries(data)) {
  //   const dateDiv = document.querySelector('#date')
  //   const p = document.createElement('p')
  //   p.textContent = `${key}: ${value}`
  //   dateDiv.append(p)
  // }
  const nameDiv = document.querySelector('#name-date-length')
  const location = document.createElement('p')
    location.textContent = `Location: ${data.location.location}`
    nameDiv.append(location)
  const date = document.createElement('p')
    date.textContent = `Date: ${data.date}`
    nameDiv.append(date)
  const dayLength = document.createElement('p')
    dayLength.textContent = `Day Length: ${data.day_length}`
    nameDiv.append(dayLength)
}

const grabInput = () => {
  const input = document.querySelector('.city').value
  grabData(input)
}

const button = document.querySelector("button");
button.addEventListener('click', (e) => {
  e.preventDefault()
  grabInput()
})