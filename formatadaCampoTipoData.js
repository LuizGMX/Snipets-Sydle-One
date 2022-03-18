// Esse script pega o conteudo de um campo tipo "data" do Sydle e o coloca no formato: dia + "/" + mes + "/" + ano + " às " + horario;
// Exemplo: 18/03/2022 às 12:00

function formataData(data) {
    let dataFormatoIso = data.toISOString();
    let dataSemFormatacaoIso = dataFormatoIso.substring(0, 10);
    let ano = dataSemFormatacaoIso.substring(0, 4);
    let mes = dataSemFormatacaoIso.substring(5, 7);
    let dia = dataSemFormatacaoIso.substring(8, 10);
    let horario = dataFormatoIso.substring(11, 16);
    return dia + "/" + mes + "/" + ano + " às " + horario;
}
