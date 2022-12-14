import { generateId } from "../Utils/generateId.js";



export class Item {
  /**@param {{name: string, price: number,budgetId:string ,id?: string}} data */
  constructor(data) {
    this.id = data.id || generateId()
    this.budgetId = data.budgetId
    this.name = data.name
    // @ts-ignore
    this.price = parseInt(data.price)





  }
  get Template() {
    return /*html*/`
  <li class="d-flex justify-content-between list-group-item">
      <span>${this.name}</span>
      <span>$${this.price} <i onclick="app.itemsController.removeItem('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove Item"></i></span>
    </li>
`
  }

}