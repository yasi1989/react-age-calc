import { differenceInCalendarYears, isBefore } from "date-fns";
export const calculateAge =  (today: Date ,birthDate: Date): { age: number; countAge: number } => {
   const countAge = differenceInCalendarYears(today, birthDate);

   const birthDateThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
   const age = countAge - (isBefore(today, birthDateThisYear) ? 1 : 0);

   return {age, countAge};
}

export const calculateGraduationYears = (year_seireki: number) => {
   const graduationsYears = [
    {label: "小学校卒業", year: year_seireki + 6},
    {label: "中学校卒業", year: year_seireki + 9},
    {label: "高等学校卒業", year: year_seireki + 12},
    {label: "大学卒業", year: year_seireki + 16},
   ]
   return graduationsYears;
}