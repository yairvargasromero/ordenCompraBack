import dotenv from 'dotenv';
import express from 'express';
import * as reporteService from '../services/reporte';

dotenv.config();

export const router = express.Router();

router.get('/reporte_general_entidad/:codEntidad', reporteService.reporteGeneralEntidad);