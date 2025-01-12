export const initialState: State = {
    age: 0,
    countAge: 0,
    graduationsYear: [],
    error: "",
    birthDate: null,
  };

export type State = {
    age: number;
    countAge: number;
    graduationsYear: {label: string; year: number}[]
    error: string;
    birthDate: Date | null,
  };