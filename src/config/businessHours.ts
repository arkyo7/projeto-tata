export interface BusinessHour {
  /** JS getDay() index — 0 = domingo */
  dayIndex: number;
  day: string;
  hours: string;
  closed?: boolean;
}

export const businessHours: BusinessHour[] = [
  { dayIndex: 1, day: "Segunda-feira", hours: "08:00–18:00" },
  { dayIndex: 2, day: "Terça-feira", hours: "08:00–17:00" },
  { dayIndex: 3, day: "Quarta-feira", hours: "08:00–18:00" },
  { dayIndex: 4, day: "Quinta-feira", hours: "08:00–17:00" },
  { dayIndex: 5, day: "Sexta-feira", hours: "08:00–18:00" },
  { dayIndex: 6, day: "Sábado", hours: "08:00–16:00" },
  { dayIndex: 0, day: "Domingo", hours: "Fechado", closed: true },
];
