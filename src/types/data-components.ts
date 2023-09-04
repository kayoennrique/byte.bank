import { formatarData } from "../utils/formatter.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

function renderizarData(): void {
    if (elementoDataAcesso !== null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}

const DataComponent = {
    atualizar: function () {
        renderizarData();
    },
};

export default DataComponent;
