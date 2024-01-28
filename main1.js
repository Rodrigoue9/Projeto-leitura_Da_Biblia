function atualizarMensagemDiaria() {
    const agora = new Date();

    const leituras = {
           // ... Mês de Janeiro

            // ... Gênesis
       "01-01": { livro: "Genesis", capitulo: "1-3" },
       "01-02": { livro: "Genesis", capitulo: "4-7" },
       "01-03": { livro: "Genesis", capitulo: "8-11" },
       "01-04": { livro: "Genesis", capitulo: "12-15" },
       "01-05": { livro: "Genesis", capitulo: "16-18" },
       "01-06": { livro: "Genesis", capitulo: "19-22" },
       "01-07": { livro: "Genesis", capitulo: "23-24" },
       "01-08": { livro: "Genesis", capitulo: "25-27" },
       "01-09": { livro: "Genesis", capitulo: "28-30" },
       "01-10": { livro: "Genesis", capitulo: "31-32" },
       "01-11": { livro: "Genesis", capitulo: "33-34" },
       "01-12": { livro: "Genesis", capitulo: "35-37" },
       "01-13": { livro: "Genesis", capitulo: "38-40" },
       "01-14": { livro: "Genesis", capitulo: "41-42" },
       "01-15": { livro: "Genesis", capitulo: "43-45" },
       "01-16": { livro: "Genesis", capitulo: "46-48" },
       "01-17": { livro: "Genesis", capitulo: "49-50" },
        
            // ... Exodo
           "01-18": { livro: "Exodus", capitulo: "1-4" },
           "01-19": { livro: "Exodus", capitulo: "5-7" },
           "01-20": { livro: "Exodus", capitulo: "8-10" },
           "01-21": { livro: "Exodus", capitulo: "11-13" },
           "01-22": { livro: "Exodus", capitulo: "14-15" },
           "01-23": { livro: "Exodus", capitulo: "16-18" },
           "01-24": { livro: "Exodus", capitulo: "19-21" },
           "01-25": { livro: "Exodus", capitulo: "22-25" },
           "01-26": { livro: "Exodus", capitulo: "26-28" },
           "01-27": { livro: "Exodus", capitulo: "29-30" },
           "01-28": { livro: "Exodus", capitulo: "31-33" },
           "01-29": { livro: "Exodus", capitulo: "34-35" },
           "01-30": { livro: "Exodus", capitulo: "36-38" },
           "01-31": { livro: "Exodus", capitulo: "39-40" },
    
                    // ... Mês de Janeiro
    
             // ... Mês de fevereiro
    
                // ... Levítico
           "02-01": { livro: "Leviticus", capitulo: "1-4" },
           "02-02": { livro: "Leviticus", capitulo: "5-7" },
           "02-03": { livro: "Leviticus", capitulo: "8-10" },
           "02-04": { livro: "Leviticus", capitulo: "11-13" },
           "02-05": { livro: "Leviticus", capitulo: "14-15" },
           "02-06": { livro: "Leviticus", capitulo: "16-18" },
           "02-07": { livro: "Leviticus", capitulo: "19-21" },
           "02-08": { livro: "Leviticus", capitulo: "24-25" },
           "02-09": { livro: "Leviticus", capitulo: "26-27" },
            // ... Números
    
          "02-10": { livro: "Numbers", capitulo: "1-3" },
          "02-11": { livro: "Numbers", capitulo: "4-6" },
          "02-12": { livro: "Numbers", capitulo: "7-9" },
          "02-13": { livro: "Numbers", capitulo: "10-12" },
          "02-14": { livro: "Numbers", capitulo: "13-15" },
          "02-15": { livro: "Numbers", capitulo: "16-18" },
          "02-16": { livro: "Numbers", capitulo: "19-21" },
          "02-17": { livro: "Numbers", capitulo: "22-24" },
          "02-18": { livro: "Numbers", capitulo: "25-27" },
          "02-19": { livro: "Numbers", capitulo: "28-30" },
          "02-20": { livro: "Numbers", capitulo: "31-32" },
          "02-21": { livro: "Numbers", capitulo: "33-36" },
        
            // ... Deuteronômio
           
           "02-22": { livro: "Deuteronomy", capitulo: "1-2" },
           "02-23": { livro: "Deuteronomy", capitulo: "3-4" },
           "02-24": { livro: "Deuteronomy", capitulo: "5-7" },
           "02-25": { livro: "Deuteronomy", capitulo: "8-10" },
           "02-26": { livro: "Deuteronomy", capitulo: "11-13" },
           "02-27": { livro: "Deuteronomy", capitulo: "14-16" },
           "02-28": { livro: "Deuteronomy", capitulo: "17-19" },
           "02-29": { livro: "Deuteronomy", capitulo: "20-22" },

    
                    // ... Fevereiro
        // Adicione mais leituras conforme necessário
    };
    const formatoData = (data) => {
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const dia = data.getDate().toString().padStart(2, '0');
        return `${mes}-${dia}`;
    };

    const dataAtual = formatoData(agora);
    const mensagemDiariaElemento = document.getElementById('mensagemDiaria');
    const leituraElemento = document.getElementById('Leitura');

    if (leituras[dataAtual]) {
        const leituraDoDia = leituras[dataAtual];
        mensagemDiariaElemento.innerText = leituraDoDia.livro;
        leituraElemento.innerText = leituraDoDia.capitulo;
    } else {
        mensagemDiariaElemento.innerText = "";
    }
}

var intervaloDeAtualizacao = 1000;
 setInterval(atualizarMensagemDiaria, intervaloDeAtualizacao);