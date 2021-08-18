function soma(a: number, b: number) {
    return a + b;
}


/* interface IAnimal {
    nome: string;
    type: "terrestre" | "aquatico";
    rugido(altura): void;
} */

type IAnimal = {
    nome: string;
    type: "terrestre" | "aquatico";
    domestico: boolean;
    // rugido(altura): void;
}

interface ICanino extends IAnimal {
    porte: "pequeno" | "medio" | "grande"
}

interface IFelino extends IAnimal {
    visãoNoturna: boolean;
}

type Itest = ICanino | IFelino;

const animal: ICanino = {
    nome: "Baleia",
    type: "aquatico",
    domestico: true,
    porte: "grande"
    // rugido: (altura) => (`${altura}`)
};