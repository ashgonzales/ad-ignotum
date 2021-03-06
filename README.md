## Project Name

Beethoven & Co 

## Project Description

This informational application allows users search up different classical composers by name, by time period, as well as browse some random works. 

## API and Data Sample

**Open Opus:** Open source database for classical composers and work (https://openopus.org/)

**Sample JSON:**
```json
{
            "id": "50",
            "name": "Des Prez",
            "complete_name": "Josquin Des Prez",
            "birth": "1450-01-01",
            "death": "1521-01-01",
            "epoch": "Renaissance",
            "portrait": "https://assets.openopus.org/portraits/44171858-1568084878.jpg"
        },
        {
            "id": "82",
            "name": "Dufay",
            "complete_name": "Guillaume Dufay",
            "birth": "1400-01-01",
            "death": "1474-01-01",
            "epoch": "Medieval",
            "portrait": "https://assets.openopus.org/portraits/40935386-1568084886.jpg"
        },
        {
            "id": "189",
            "name": "Dvořák",
            "complete_name": "Antonín Dvořák",
            "birth": "1841-01-01",
            "death": "1904-01-01",
            "epoch": "Romantic",
            "portrait": "https://assets.openopus.org/portraits/32988185-1568084888.jpg"
        }
```

## Wireframes

![Desktop Wireframe](https://res.cloudinary.com/ashgon/image/upload/v1597674909/Homepage_2_bltsjr.png)

### MVP/PostMVP

#### MVP 

- Find external apis 
- HTML layout
- Get data through axios call
- Create Button for Search by Composer
- Create Button for Search by Period
- Create Button for Search by Works
- Connect to APIs
- Render resulting data on page through the DOM
- CSS 
    - Flexbox
    - Image decoration
    - Media-query for responsive design

#### PostMVP  

- CSS: parallax scroll
- Menu Drop Down
- Add second API 

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
| Button for Composer Search | H | 2hrs | 1hrs | 1hrs |
| Button for Works Search | H | 2hrs | 2hrs | 2hrs |
| Button for Period Search | H | 2hrs | 1hrs | 1hrs |
| Attach Buttons to APIs | H | 1hr | 3hrs | 3hrs |
| Axios Requests | H | 1hr | 2hrs | 2hrs |
| Append Images to DOM | H | 2hrs | 2hrs | 2hrs |
| CSS: Media-Query | H | 2hrs | 2hrs | 2hrs |
| CSS: Flexbox | H | 3hrs | 3hrs | 3hrs |
| Post-MVP: Off-Canvas Menu | H | 2hrs | 2hrs | 2hrs |
| Post-MVP: 2nd/3rd API | H | 2hrs | 3hrs | 3hrs |
| Post-MVP: Image Decoration | H | 2hrs | 2hrs | 3hrs |
| ~~Post-MVP: Parallax Scroll~~ | H | 3hrs | 0hrs | 0hrs |
| ~~Post-MVP: Image Hover Effect~~ | H | 2hrs | 0hrs | 3hrs |
| ~~Create Local Storage~~ | H | 2hrs | 0hrs | 0hrs |
| Debugging | H | 3hrs | 4hrs | 4hrs |
| Total | H | 34hrs | 30hrs | 30hrs |

## Code Snippet

This is my function to append a div container of my image and overlaying text. I struggled with keeping track of the div layers so when I was able to overlay my images properly, I pretty ecstatic.

```
function postComposers(composers) {
  removeAllChildNodes(grid)
  for (let i = 0; i < composers.length; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid.append(gridItem)

    const img = document.createElement('img')
    img.classList.add('grid')
    img.src = composers[i].portrait
    gridItem.append(img)
    
    const textDiv = document.createElement('div')
    textDiv.classList.add('text', 'highlight')
    gridItem.append(textDiv)

    const text = document.createElement('h3')
    text.textContent = composers[i].name
    textDiv.append(text)
  }
}
```

## Change Log
 
11.13.2020 - Added second API (Spotify).

## Github Page Link

(https://ashgonzales.github.io/beethoven-and-co/)