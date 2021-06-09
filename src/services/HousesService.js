import { AppState } from '../AppState.js'
import { House } from '../Models/House.js'
import { api } from './AxiosService.js'

const url = 'http://localhost:3000/api/houses/'
class HousesService {
  async updateHouse(formData) {
    const res = await api.put(url + formData.id, formData)

    const i = AppState.houses.findIndex(h => h.id === formData.id)
    AppState.houses.splice(i, 1, new House(res.data))
  }

  async deleteHouse(id) {
    await api.delete(url + id)
    AppState.houses = AppState.houses.filter(h => h.id !== id)
  }

  async getHouses() {
    const res = await api.get(url)
    AppState.houses = res.data.map(h => new House(h))
  }

  async getHouse(id) {
    AppState.activeHouse = null
    const res = await api.get(url + id)
    AppState.activeHouse = new House(res.data)
  }

  async addHouse(formData) {
    const res = await api.post(url, formData)
    const newHouse = new House(res.data)
    AppState.houses = [newHouse, ...AppState.houses]
  }
}

export const housesService = new HousesService()
