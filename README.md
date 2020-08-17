## Project Name

Ad Ignotum

## Project Description

This application allows users to track twilight timings, as well as sun and moon parameters for a given date and location for optimal stargazing. By adding the location name (town, city), a user should be able to see sunrise, sunset, day length, and other moon information that could affect their stargazing experience. 

## API and Data Sample

**IPGeolocation:** Astronomical data for a given location

**Unsplash:** Images for CSS

**Sample JSON:**
```json
{
    "location": {
        "ip": "1.1.1.1",
        "country_code2": "AU",
        "country_code3": "AUS",
        "country_name": "Australia",
        "state_prov": "Queensland",
        "district": "South Brisbane",
        "city": "Brisbane",
        "zipcode": "4101",
        "latitude": -27.47561,
        "longitude": 153.01537
    },
    "date": "2020-08-14",
    "sunrise": "06:18",
    "sunset": "17:27",
    "solar_noon": "11:52",
    "day_length": "11:09",
    "sun_altitude": 35.351661926074,
    "sun_distance": 1.5151971737031785E8,
    "sun_azimuth": 45.366261713013216,
    "moonrise": "03:47",
    "moonset": "13:27",
    "moon_altitude": 35.93568843333211,
    "moon_distance": 390887.3209477042,
    "moon_azimuth": 339.15960912319025,
    "moon_parallactic_angle": 124.76060868297662
}
```

## Wireframes

![Desktop Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1597674909/Homepage_2_bltsjr.png)

![Mobile Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1597674710/Homepage_z5cozh.png)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find suitable external apis 
- HTML layout
- Get data through axios call (IPGeolocation)
- Create Button for search bar
- Get input value from city search bar 
- Render resulting data on page through the DOM
- Format times and dates with Moment JS
- Create toggle for switching between night/day/twilight 
- CSS 
    - Classes for day, night, moon, sunrise, sunset
    - Scroll bar wire-frame (mobile)
    - Media-query for responsive design

#### PostMVP  

- CSS: parallax scroll
- Menu Drop Down
- Add second API (Maybe SkyWatch?)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes / Design | Complete
|August 17| Project Approval / HTML / JavaScript | Incomplete
|August 18| CSS / Responsive Mobile & Desktop | Incomplete
|August 19| Initial Clickable Model / MVP / Testing | Incomplete
|August 20| Post-MVP / Additional Debugging | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/ashgon/image/upload/v1597674663/Priority_Matrix_fyui53.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframing | H | 1hr | 1hr | 1hr |
| HTML Set-up | H | 2hrs | 2hrs | 2hrs |
| Search Bar Form | H | 2hrs | 2hrs | 2hrs |
| Create Button/Event Listener | H | 1hr | 2hrs | 2hrs |
| Axios Requests | H | 2hrs | 2hrs | 2hrs |
| Append Data to DOM | H | 2hrs | 2.5hrs | 2.5hrs |
| Toggle Night/Day/Twilight Images | H | 2hrs | 2.5hrs | 2.5hrs |
| Format Dates/Time with Moment JS | H | 2hrs | 3hrs | 3hrs |
| CSS: Media-Query | H | 2hrs | 2hrs | 2hrs |
| CSS: Flexbox | H | 3hrs | 3hrs | 3hrs |
| CSS: Parallax Scroll | H | 3hrs | 3hrs | 3hrs |
| CSS: Menu Drop Down | H | 2hrs | 2hrs | 2hrs |
| Create Local Storage | H | 2hrs | 3hrs | 3hrs |
| Debugging | H | 3hrs | 3hrs | 3hrs |
| Post-MVP: Second API | H | 2hrs | 3hrs | 3hrs |
| Total | H | 17.5hrs| -hrs | -hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
