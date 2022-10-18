export interface Daimista {
  numeroBotao: number;
  apelido: string;
  anoDeEntrada: number;
  hinarioFavorito: string;
}

let bd: Daimista[] = [
  {
    numeroBotao: 0,
    apelido: "nordico",
    anoDeEntrada: 2018,
    hinarioFavorito: "Vós Sois Baliza",
  },
];

export const get = () => {
  return bd;
};

export const add = (daimista: Daimista) => {
  bd.push(daimista);
  return bd;
};

export const getByBotao = (numeroBotao: number) => {
  const daimista = bd.find((daimista) => daimista.numeroBotao === numeroBotao);
  if (daimista) return daimista;
  throw new Error("Nenhum daimista com esse número de botão");
};

export const update = (numeroBotao: number, updates: Partial<Daimista>) => {
  const index = bd.findIndex(
    (daimista) => daimista.numeroBotao === numeroBotao
  );
  bd[index] = { ...bd[index], ...updates };
  return bd[index];
};

export const remove = (numeroBotao: number) => {
  bd = bd.filter((daimista) => daimista.numeroBotao !== numeroBotao);
  return bd;
};
