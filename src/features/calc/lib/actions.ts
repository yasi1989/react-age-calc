"use server";
import { isBefore } from "date-fns";
import { State } from "./calcResultTypes";
import { convertToSeireki } from "../util/convertToSeireki";
import { calculateAge, calculateGraduationYears } from "../util/ageUtils";

export async function calcurateAge(
  prevState: State,
  formData: FormData
): Promise<State> {
   const era = formData.get("era") as string;
   const year = formData.get("year");
   const month = formData.get("month") as string;
   const day = formData.get("day") as string;

   const resultValue: State = {
     age: 0,
     countAge: 0,
     graduationsYear: [],
     error: "",
     birthDate: null,
   };

   if (!year) {
    resultValue.error = "誕生年を入力してください。";
    return resultValue;
   }

   const year_seireki = convertToSeireki(parseInt(year as string), era);
   const now = new Date();
   const birthDate = new Date(year_seireki, parseInt(month) - 1, parseInt(day));

   if (isBefore(now, birthDate)) {
    resultValue.error = "まだ生まれてません。";
    return resultValue;
   }

   const {age, countAge} = calculateAge(now, birthDate);

   resultValue.age = age;
   resultValue.countAge = countAge;
   resultValue.graduationsYear = calculateGraduationYears(year_seireki);
   resultValue.birthDate = birthDate;
   
   return resultValue;
}
