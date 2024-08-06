import config from '../config/knexConfig.js'
import knex from 'knex'
export default class estudianteService{
    constructor(){
        this.knex = knex(config)
    }

    getEstudiantes = async() =>{
        const estudiantes= await this.knex.from('estudiantes').select('*')
        return Object.values(JSON.parse(JSON.stringify(estudiantes)))
    }

    
}

