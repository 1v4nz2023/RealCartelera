// src/services/CategoriaService.js
import axios from 'axios';
import { urlServer } from "./urlServer.js";

const API_URL = `${urlServer}/api/categorias`;

const CategoriaService = {
  getCategorias: async () => { // Cambiado de getAllCategorias a getCategorias
    const response = await axios.get(API_URL);
    return response.data; // Devuelve solo los datos
  },
};

export default CategoriaService;
