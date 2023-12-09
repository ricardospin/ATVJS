function extrairInformacoesHTML() {
    var codigoHTML = `
        <html>
            <head>
                <title>Gulliver Traveller - Roteiros</title>
            </head>
            <body>
                <b>->1 - Roteiros para *São Paulo*</b><br>
                A Terra da Garoa!<br>
                Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>
                #Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>
                #Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>
                #Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br>

                <b>->2 - Roteiros para *Las Vegas*</b><br>
                Viva Las Vegas!<br>
                A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>
                #Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>
                #Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado;<br>
                #Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br>

                <b>->3 - Roteiros para *Moscou*</b><br>
                Privet!<br>
                A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>
                #Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>
                #Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>
                #Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br>
            </body>
        </html>
    `;

    // Extrair informações
    var regexCidades = /\*\s*(.*?)\s*\*\s*<\/b>/g;
    var regexRoteiroA = /#Roteiro A \| Região:(.*?)#Roteiro B \|/g;
    var regexLocais = /#Roteiro A \| Região:.*?<(.*?)>/g;
    var regexPontosCentroSP = /Centro.*?<br>(.*?)#Roteiro C \|/g;
    var regexPontosDowntownLA = /Downtown.*?<br>(.*?)#Roteiro C \|/g;

    var cidades = [...codigoHTML.matchAll(regexCidades)].map(match => match[1]);
    var roteiroA = [...codigoHTML.matchAll(regexRoteiroA)].map(match => match[1]);
    var quantidadeLocais = [...codigoHTML.matchAll(regexLocais)].map(match => match[1].split(';').length);
    var pontosCentroSP = [...codigoHTML.matchAll(regexPontosCentroSP)].map(match => match[1].split(';').map(ponto => ponto.trim()));
    var pontosDowntownLA = [...codigoHTML.matchAll(regexPontosDowntownLA)].map(match => match[1].split(';').map(ponto => ponto.trim()));

    // Exibir informações no console
    console.log("Cidades:", cidades);
    console.log("Roteiro A:", roteiroA);
    console.log("Quantidade de Locais:", quantidadeLocais);
    console.log("Pontos Centro SP:", pontosCentroSP);
    console.log("Pontos Downtown LA:", pontosDowntownLA);
}

// Chamada da função para exibir informações
extrairInformacoesHTML();