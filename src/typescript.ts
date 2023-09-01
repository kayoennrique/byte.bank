/* //          Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

//          Arrays
const lista: number[] = [];
lista.push(13, 10, 30, 6);

//          Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

//          Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferencia",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
}

console.log(novaTransacao);
*/