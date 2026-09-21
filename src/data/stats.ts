/**
 * ➜ MÉTRICAS GLOBALES (Stats)
 * Resultados acumulados mostrados en tipografía grande con efecto
 * contador. `amount` admite prefijos/sufijos: '+', 'M', '%', 'K', etc.
 */
export interface GlobalStat {
  amount: string;
  title: string;
}

export const stats: GlobalStat[] = [
  { amount: '40+', title: 'Marcas gestionadas' },
  { amount: '12M+', title: 'Alcance acumulado' },
  { amount: '8.5%', title: 'Engagement promedio' },
  { amount: '6', title: 'Años de experiencia' },
];
