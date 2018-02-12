function SwapiController(){

    var swapiService = new SwapiService()

    var appElem = document.getElementById('app')

    function draw(data){
        var template = ''
        var counter = 0
        data.forEach(person => {
            if (person.model){
                template += `<div class="col-md-3 col-sm-12">
                    <h4>Name: ${person.name}</h4>
                    <h6>Model: ${person.model}</h6>
                    <h6>Manufacturer: ${person.manufacturer}</h6>
                </div>
                `
                counter++
            } else if(person.rotation_period){
                template += `<div class="col-md-3 col-sm-12">
                    <h4>Name: ${person.name}</h4>
                    <h6>Climate: ${person.climate}</h6>
                    <h6>Population: ${person.population}</h6>
                </div>
                `
            } else if (person.average_lifespan){
                template += `<div class="col-md-3 col-sm-12">
                    <h4>Name: ${person.name}</h4>
                    <h6>Classification: ${person.classification}</h6>
                    <h6>Language: ${person.language}</h6>
                    <button class="btn-primary" onclick="app.controllers.swapiCtrl.getPlanet('${person.homeworld}', ${counter})">Show Homeworld</button>
                    <h6 id="${counter}"></h6>
                </div>
                `
                counter++
            } else  {
                template += `<div class="col-md-3 col-sm-12">
                <h4>Name: ${person.name}</h4>
                <h6>Birth Year: ${person.birth_year}</h6>
                <button class="btn-primary" onclick="app.controllers.swapiCtrl.getPlanet('${person.homeworld}', ${counter})">Show Homeworld</button>
                <h6 id="${counter}"></h6>
                </div>
                `
                counter++
                
            }
        })
        appElem.innerHTML = template
    }

    function drawPlanet(name, id){
        var homeElem = document.getElementById(id)
        homeElem.innerText = name
    }

    this.next = function next(){
        swapiService.getNext(draw)
    }

    this.prev = function prev(){
        swapiService.getPrev(draw)
    }

    this.getPlanet = function getPlanet(homeworldUrl, id){
        if (document.getElementById(id).innerText != ""){
            document.getElementById(id).innerText = ""
            return
        }
        swapiService.getPlanet(homeworldUrl, drawPlanet, id)
    }

    this.get = function get(str){
        swapiService.getData(draw, str)
    }
    
    swapiService.getData(draw, 'people')

}