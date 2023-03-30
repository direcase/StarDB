

export default class SwapiService{

    _apiBase='https://swapi.dev/api'
  
    async getResource(url){
      const res = await fetch(`${this._apiBase}${url}`);
     if(!res.ok){
      throw new Error(`could not fetch ${url}, resived ${res.status}`);
     }
     const body = await res.json();
     return body;
    }
  
     getAllPeople = async ()=>{
      const res= await this.getResource(`/people/`);
      return res.results.map(this._transformPerson).slice(0,5);
    }

    _getPersonImg =({id})=>{
      return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    }
    _getStarsipImg= ({id})=>{
      return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }
    
    _getPlanetImg({id}){
      return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }

     getPerson= async(id)=>{
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
  
     getAllPlanets = async ()=>{
      const res= await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
     getPlanet = async(id)=>{
      const planet = await this.getResource(`/planets/${id}/`)
      return this._transformPlanet(planet);
    }
  
     getAllStarships = async ()=>{
      const res= await this.getResource(`/starships/`);
      return res.results.map(this._transformStarShip);
    }
  
     getStarsip=async(id)=>{
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarShip(starship);
    }

    _extractId=(item)=>{
      const idRegExp=/\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }
    _transformPlanet=(planet)=>{
      return{
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }

    _transformPerson=(person)=>{
      return{
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        height: person.height,
        hairColor: person.hair_color,
        eyeColor: person.eye_color

      }
    }

    _transformStarShip=(starship)=>{
      return{
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        length: starship.length,
        hyperdriveRating: starship.hyperdrive_rating,
        consumables: starship.consumables
      }
    }
  }
  
  // const swapi = new SwapiService();
  // swapi.getStarsip(3).then((people)=>{
  //   people.forEach(element => {
  //     console.log(element.name)
  //   });
  // });