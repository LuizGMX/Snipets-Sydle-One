// Esse script pega o conteudo de um campo tipo "data" do Sydle e o coloca no formato: dia + "/" + mes + "/" + ano + " às " + horario;
// Exemplo: 18/03/2022 às 12:00

function formataData(data) {
    const dataFormatoIso = data.toISOString();
    
    const dataSemFormatacaoIso = dataFormatoIso.substring(0, 10);
    
    const ano = dataSemFormatacaoIso.substring(0, 4);
    const mes = dataSemFormatacaoIso.substring(5, 7);
    const dia = dataSemFormatacaoIso.substring(8, 10);
    
    const horario = dataFormatoIso.substring(11, 16);
    
    return dia + "/" + mes + "/" + ano + " às " + horario;
}
