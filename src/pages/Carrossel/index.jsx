import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Carrossel/index.css"; // Importa o CSS



import logoRemedioImg from '../../assets/Images/logo-rem.png';
import logoMedicamento from '../../assets/Images/logo-medicamento.png';

const Carrossel = () => {
    const medicamentos = [
  {
    nome: "Paracetamol",
    descricao: "Analgésico e antitérmico, usado no tratamento de febre e dores leves a moderadas.",
    dose: "500mg",
    frequencia: "A cada 6 horas",
    faixaEtaria: "A partir de 12 anos",
    classe: "paracetamol"
  },
  {
    nome: "Dipirona",
    descricao: "Analgésico e antipirético, eficaz para febres altas e dores intensas.",
    dose: "1g",
    frequencia: "A cada 8 horas",
    faixaEtaria: "A partir de 10 anos",
    classe: "dipirona"
  },
  {
    nome: "Ibuprofeno",
    descricao: "Anti-inflamatório não esteroidal com ação analgésica, antitérmica e anti-inflamatória.",
    dose: "400mg",
    frequencia: "A cada 8 horas",
    faixaEtaria: "A partir de 6 meses",
    classe: "ibuprofeno"
  },
  {
    nome: "Amoxicilina",
    descricao: "Antibiótico do grupo das penicilinas, usado para infecções bacterianas como amigdalite e sinusite.",
    dose: "500mg",
    frequencia: "A cada 8 horas",
    faixaEtaria: "A partir de 2 anos",
    classe: "amoxicilina"
  },
  {
    nome: "Metformina",
    descricao: "Medicamento antidiabético oral utilizado no controle da glicemia em pessoas com diabetes tipo 2.",
    dose: "850mg",
    frequencia: "2x ao dia",
    faixaEtaria: "A partir de 10 anos",
    classe: "metformina"
  },
  {
    nome: "Omeprazol",
    descricao: "Inibidor da bomba de prótons usado no tratamento de úlceras, refluxo e gastrite.",
    dose: "20mg",
    frequencia: "Antes do café",
    faixaEtaria: "A partir de 12 anos",
    classe: "omeprazol"
  },
  {
    nome: "Ibuprofeno XR",
    descricao: "Formulação de liberação prolongada para controle de dores crônicas.",
    dose: "600mg",
    frequencia: "A cada 12 horas",
    faixaEtaria: "A partir de 18 anos",
    classe: "ibuprofeno"
  },
  {
    nome: "Paracetamol Plus",
    descricao: "Paracetamol combinado com cafeína para alívio mais rápido das dores.",
    dose: "500mg + 65mg cafeína",
    frequencia: "A cada 6 horas",
    faixaEtaria: "A partir de 12 anos",
    classe: "paracetamol"
  },
  {
    nome: "Amoxicilina Clavulanato",
    descricao: "Antibiótico combinado para infecções resistentes.",
    dose: "875mg + 125mg",
    frequencia: "A cada 12 horas",
    faixaEtaria: "A partir de 12 anos",
    classe: "amoxicilina"
  },
  {
    nome: "Metformina XR",
    descricao: "Versão de liberação prolongada para melhor adesão ao tratamento.",
    dose: "1000mg",
    frequencia: "1x ao dia",
    faixaEtaria: "A partir de 10 anos",
    classe: "metformina"
  },
  {
    nome: "Omeprazol DR",
    descricao: "Cápsulas de liberação retardada para tratamento gástrico.",
    dose: "40mg",
    frequencia: "1x ao dia",
    faixaEtaria: "A partir de 12 anos",
    classe: "omeprazol"
  },
  {
    nome: "Dipirona Sódica",
    descricao: "Dipirona em solução injetável para alívio rápido de dores intensas.",
    dose: "2g",
    frequencia: "A cada 6 horas",
    faixaEtaria: "A partir de 12 anos",
    classe: "dipirona"
  },
  {
    nome: "Ibuprofeno Infantil",
    descricao: "Suspensão oral para alívio de febre e dor em crianças.",
    dose: "100mg/5ml",
    frequencia: "A cada 8 horas",
    faixaEtaria: "A partir de 3 meses",
    classe: "ibuprofeno"
  },
  {
    nome: "Paracetamol Infantil",
    descricao: "Suspensão para tratamento de febre e dor em crianças.",
    dose: "100mg/5ml",
    frequencia: "A cada 6 horas",
    faixaEtaria: "A partir de 3 meses",
    classe: "paracetamol"
  },
  {
    nome: "Amoxicilina Infantil",
    descricao: "Suspensão antibiótica para infecções em crianças.",
    dose: "250mg/5ml",
    frequencia: "A cada 8 horas",
    faixaEtaria: "A partir de 2 anos",
    classe: "amoxicilina"
  },
  {
    nome: "Metformina XR Plus",
    descricao: "Metformina de liberação prolongada combinada com outras substâncias para diabetes.",
    dose: "1000mg",
    frequencia: "1x ao dia",
    faixaEtaria: "A partir de 10 anos",
    classe: "metformina"
  },
  {
    nome: "Omeprazol Infantil",
    descricao: "Cápsulas para tratamento gástrico em crianças.",
    dose: "10mg",
    frequencia: "1x ao dia",
    faixaEtaria: "A partir de 6 anos",
    classe: "omeprazol"
  },
  {
    nome: "Dipirona Comprimidos",
    descricao: "Comprimidos para dores moderadas e febre.",
    dose: "500mg",
    frequencia: "A cada 6 horas",
    faixaEtaria: "A partir de 12 anos",
    classe: "dipirona"
  },
  {
    nome: "Ibuprofeno Gel",
    descricao: "Gel para aplicação tópica contra inflamações musculares.",
    dose: "5%",
    frequencia: "3x ao dia",
    faixaEtaria: "Adultos",
    classe: "ibuprofeno"
  },
  {
    nome: "Paracetamol Solução",
    descricao: "Solução oral para alívio de dor e febre.",
    dose: "250mg/5ml",
    frequencia: "A cada 6 horas",
    faixaEtaria: "A partir de 6 meses",
    classe: "paracetamol"
  },
  {
    nome: "Amoxicilina XR",
    descricao: "Amoxicilina de liberação prolongada para infecções bacterianas.",
    dose: "875mg",
    frequencia: "1x ao dia",
    faixaEtaria: "A partir de 12 anos",
    classe: "amoxicilina"
  },
  {
    nome: "Metformina Comprimidos",
    descricao: "Comprimidos para controle de glicemia em diabetes tipo 2.",
    dose: "500mg",
    frequencia: "2x ao dia",
    faixaEtaria: "A partir de 10 anos",
    classe: "metformina"
  },
  {
    nome: "Omeprazol Cápsulas",
    descricao: "Cápsulas para tratamento gástrico.",
    dose: "20mg",
    frequencia: "1x ao dia",
    faixaEtaria: "A partir de 12 anos",
    classe: "omeprazol"
  },
  {
    nome: "Dipirona Solução",
    descricao: "Solução oral para alívio de febre e dores.",
    dose: "500mg/5ml",
    frequencia: "A cada 6 horas",
    faixaEtaria: "A partir de 12 anos",
    classe: "dipirona"
  },
  {
    nome: "Ibuprofeno Comprimidos",
    descricao: "Comprimidos para dores e inflamações.",
    dose: "400mg",
    frequencia: "A cada 8 horas",
    faixaEtaria: "A partir de 12 anos",
    classe: "ibuprofeno"
  }
];

 const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % medicamentos.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [medicamentos.length]);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + medicamentos.length) % medicamentos.length);
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % medicamentos.length);
    };

    const getItemClass = (i) => {
        const length = medicamentos.length;
        const relativeIndex = (i - index + length) % length;

        if (relativeIndex === 0) return "item center";
        if (relativeIndex === 1) return "item right-1";
        if (relativeIndex === 2) return "item right-2";
        if (relativeIndex === length - 1) return "item left-1";
        if (relativeIndex === length - 2) return "item left-2";
        return "item hidden";
    };

    return (
        <main className="home">
            <div className='home-content-box'>
                

                <div className="carousel-container">
                    <button className="carousel-button prev" onClick={handlePrev}>
                        &lt;
                    </button>
                    
                    <div className="carousel-track">
                        {medicamentos.map((med, i) => (
                            <div key={i} className={`${getItemClass(i)} ${med.classe}`}>
                                <img src={logoRemedioImg} alt="Logo Remédio" className="card-logo-header" />

                                <div className="med-info-container">
                                    <div className="med-nome-topo">{med.nome}</div>
                                    <p className="med-descricao">{med.descricao}</p>
                                </div>

                                <div className="tarja-amarela">
                                    <img src={logoMedicamento} alt="Logo Medicamento" className="card-logo" />
                                    <div className="tarja-content"></div>
                                </div>

                                <div className="tarja-vermelha">
                                    <div className="tarja-content">
                                        <p><strong>Dose:</strong> {med.dose}</p>
                                        <p><strong>Frequência:</strong> {med.frequencia}</p>
                                        <p><strong>Idade:</strong> {med.faixaEtaria}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="carousel-button next" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Carrossel;