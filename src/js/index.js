import "@babel/polyfill"/* pollyfill compatibiliza nuevos ES (ej: ES6) con el js clásico. Al desactivar se reduce tamaño de build.js porque no tiene que añadir las nuevas funcionalidades de nuevas versiones */

import { main } from './main' /* Importa el main donde se van a indicar los otros js que hay que importar */
import '../styles/main.scss' /* Importa el main donde se van a indicar los otros css que hay que importar */

main()

