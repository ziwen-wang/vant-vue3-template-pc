import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import menu from './src/mock/menu'

export function setupProdMockServer() {
  createProdMockServer([...menu])
}
