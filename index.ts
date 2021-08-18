const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
    const i = event.currentTarget as HTMLInputElement;

    console.log(i.value);
});

// Generic Types

function adiconarApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adiconarApendiceALista([1,2,34,], 1);

interface IUsuario {
    id: string;
    email: string;
    cargo?: "normal" | "gerente" | "coordenador" | "supervisor";
}

/* interface IAdmin extends IUsuario {
    cargo: "gerente" | "coordenador" | "supervisor";
} */

function redirecionar(usuario: IUsuario ) {
    if(usuario.cargo) {
        console.log("area de adiministração");
    }else {
        console.log("area de usuario");
    }
}

// variaveis com propriedade readonly e private

interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type ICachorroLeitura = {
    +readonly [k in keyof ICachorro]-?: ICachorro[k];
}

const meuCachorro: ICachorro = {
    nome: "lek",
    idade: 5,
}

class MeuCachorro implements ICachorroLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(idade, nome, parqueFavorito) {
        this.idade = idade;
        this.nome = nome;
        this.parqueFavorito = parqueFavorito;
    }
}

const cao = new MeuCachorro(5, "lek", "jardim");

cao.idade = 8;

console.log(cao);

// importações

import $ from "jquery";

$.fn.extend({
    novaFuncao() {
        console.log("chamou uma nova função");
    }
})

$("body").novaFuncao();