import { useState, type CSSProperties } from "react";
const API_URL =
  "https://vitejsvitecwp45zcg-1ai0--8000--4c73681d.local-credentialless.webcontainer.io/api/status";

const C = {
  bg: "#F8FAF8",
  surface: "#FFFFFF",
  primary: "#052E16",
  primaryHover: "#166534",
  text: "#1F2937",
  border: "#E5E7EB",
  borderSoft: "#F0F4F0",
};

const container: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px",
};

const btnPrimary: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "14px 28px",
  borderRadius: 12,
  background: C.primary,
  color: "#fff",
  fontWeight: 600,
  fontSize: 15,
  border: "none",
};

const Icon = {
  Leaf: ({ size = 20, color = "currentColor" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  ),
};

function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.9)",
        borderBottom: "1px solid rgba(5,46,22,0.08)",
      }}
    >
      <div
        style={{
          ...container,
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: C.primary,
              color: "#fff",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Icon.Leaf size={18} />
          </span>

          <span
            style={{
              fontFamily: "Outfit",
              fontWeight: 700,
              fontSize: 18,
              color: C.primary,
            }}
          >
            AgroTrama{" "}
            <span style={{ color: C.primaryHover }}>
              Conecta
            </span>
          </span>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <a href="#sobre">Sobre</a>

          <a href="#como-funciona">
            Como funciona
          </a>

          <a href="#cadastro">
            Cadastrar
          </a>

          <button style={btnPrimary}>
            Cadastrar Lona
          </button>
        </nav>
      </div>
    </header>
  );
}
const card: CSSProperties = {
  background: "#fff",
  borderRadius: 20,
  padding: 28,
  border: `1px solid ${C.borderSoft}`,
  boxShadow: "0 2px 14px -4px rgba(5,46,22,0.06)",
};
const inputStyle: CSSProperties = {
  width: "100%",
  padding: "16px",
  borderRadius: 12,
  border: `1px solid ${C.border}`,
  fontSize: 16,
  outline: "none",
};
function App() {
  const [enviado, setEnviado] = useState(false);
  const [cadastros, setCadastros] = useState<string[]>([]);
  const [imagem, setImagem] = useState<string | null>(null);
  return (
    <div
      id="top"
      style={{
        background: C.bg,
        color: C.text,
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <section
        style={{
          background:
            "linear-gradient(135deg, #052E16 0%, #14532D 60%, #166534 100%)",
          color: "#fff",
          padding: "120px 24px",
        }}
      >
        <div
          style={{
            ...container,
            maxWidth: 900,
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              color: "#fff",
              marginBottom: 24,
            }}
          >
            Conectando o campo à sustentabilidade.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            O AgroTrama Conecta transforma lonas descartadas
            de aviários em soluções ambientais, sociais e educativas.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 16,
            }}
          >
            <button
              style={{
                ...btnPrimary,
                background: "#fff",
                color: C.primary,
              }}
            >
              Cadastrar Lona
            </button>

            <button
              style={{
                padding: "14px 28px",
                borderRadius: 12,
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              Saiba mais
            </button>
          </div>
        </div>
      </section>
      <section
  id="como-funciona"
  style={{
    padding: "96px 24px",
    background: "#ffffff",
  }}
>
  <div style={container}>

    <div
      style={{
        textAlign: "center",
        marginBottom: 70,
      }}
    >
      <h2
        style={{
          fontSize: 42,
          marginBottom: 18,
        }}
      >
        Como funciona
      </h2>

      <p
        style={{
          fontSize: 20,
          color: "#6B7280",
          maxWidth: 700,
          margin: "0 auto",
          lineHeight: 1.8,
        }}
      >
        Um processo simples para transformar resíduos do campo
        em impacto ambiental positivo.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 24,
      }}
    >

      <div style={card}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: "#DCFCE7",
            display: "grid",
            placeItems: "center",
            marginBottom: 20,
            fontSize: 26,
          }}
        >
          📋
        </div>

        <h3 style={{ marginBottom: 12 }}>
          Cadastro
        </h3>

        <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
          O produtor informa os dados da lona disponível para reaproveitamento.
        </p>
      </div>

      <div style={card}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: "#DCFCE7",
            display: "grid",
            placeItems: "center",
            marginBottom: 20,
            fontSize: 26,
          }}
        >
          🚛
        </div>

        <h3 style={{ marginBottom: 12 }}>
          Coleta
        </h3>

        <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
          As lonas são recolhidas e encaminhadas para triagem e reutilização.
        </p>
      </div>

      <div style={card}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: "#DCFCE7",
            display: "grid",
            placeItems: "center",
            marginBottom: 20,
            fontSize: 26,
          }}
        >
          ♻️
        </div>

        <h3 style={{ marginBottom: 12 }}>
          Transformação
        </h3>

        <p style={{ color: "#6B7280", lineHeight: 1.7 }}>
          O material ganha novos usos sustentáveis, sociais e ambientais.
        </p>
      </div>

    </div>
  </div>
</section>
      <section
        id="sobre"
        style={{
          padding: "96px 24px",
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: 42,
              marginBottom: 24,
            }}
          >
            Sobre o Projeto
          </h2>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.8,
              maxWidth: 900,
            }}
          >
            O AgroTrama reutiliza lonas descartadas de aviários,
            transformando resíduos do campo em soluções sustentáveis,
            sociais e ambientais.
          </p>

          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: 28,
                border: `1px solid ${C.borderSoft}`,
                boxShadow:
                  "0 2px 14px -4px rgba(5,46,22,0.06)",
              }}
            >
              <h3
                style={{
                  marginBottom: 12,
                }}
              >
                Sacolas de coleta
              </h3>

              <p>
                Produção de sacolas resistentes para coleta seletiva.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: 28,
                border: `1px solid ${C.borderSoft}`,
                boxShadow:
                  "0 2px 14px -4px rgba(5,46,22,0.06)",
              }}
            >
              <h3
                style={{
                  marginBottom: 12,
                }}
              >
                Kits emergenciais
              </h3>

              <p>
                Coberturas provisórias para famílias afetadas.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: 28,
                border: `1px solid ${C.borderSoft}`,
                boxShadow:
                  "0 2px 14px -4px rgba(5,46,22,0.06)",
              }}
            >
              <h3
                style={{
                  marginBottom: 12,
                }}
              >
                Recuperação ambiental
              </h3>

              <p>
                Uso das lonas em recuperação ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
  style={{
    padding: "96px 24px",
    background:
      "linear-gradient(135deg, #052E16 0%, #14532D 100%)",
    color: "#fff",
  }}
>
  <div style={container}>

    <div
      style={{
        textAlign: "center",
        marginBottom: 70,
      }}
    >
      <h2
        style={{
          fontSize: 42,
          color: "#fff",
          marginBottom: 20,
        }}
      >
        Impacto do Projeto
      </h2>

      <p
        style={{
          fontSize: 20,
          opacity: 0.85,
          maxWidth: 700,
          margin: "0 auto",
          lineHeight: 1.8,
        }}
      >
        Cada lona reaproveitada representa menos resíduos
        no meio ambiente e mais impacto social positivo.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 24,
      }}
    >

      <div style={card}>
        <h3
          style={{
            fontSize: 42,
            color: "#166534",
            marginBottom: 10,
          }}
        >
          +3t
        </h3>

        <p
          style={{
            color: "#6B7280",
            lineHeight: 1.7,
          }}
        >
          de lona reaproveitada
        </p>
      </div>

      <div style={card}>
        <h3
          style={{
            fontSize: 42,
            color: "#166534",
            marginBottom: 10,
          }}
        >
          +120
        </h3>

        <p
          style={{
            color: "#6B7280",
            lineHeight: 1.7,
          }}
        >
          famílias impactadas
        </p>
      </div>

      <div style={card}>
        <h3
          style={{
            fontSize: 42,
            color: "#166534",
            marginBottom: 10,
          }}
        >
          +15
        </h3>

        <p
          style={{
            color: "#6B7280",
            lineHeight: 1.7,
          }}
        >
          escolas participantes
        </p>
      </div>

    </div>
  </div>
</section>
      <section
  id="cadastro"
  style={{
    padding: "96px 24px",
    background: "#ffffff",
  }}
>
  <div
    style={{
      ...container,
      maxWidth: 900,
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: 50,
      }}
    >
      <h2
        style={{
          fontSize: 42,
          marginBottom: 18,
        }}
      >
        Cadastro de Lona
      </h2>

      <p
        style={{
          color: "#6B7280",
          fontSize: 18,
        }}
      >
        Preencha as informações abaixo para cadastrar o material.
      </p>
    </div>

    <form
      style={{
        display: "grid",
        gap: 20,
      }}
    >

      <input
        placeholder="Nome do responsável"
        style={inputStyle}
      />

      <input
        placeholder="Telefone / WhatsApp"
        style={inputStyle}
      />

      <input
        placeholder="E-mail"
        style={inputStyle}
      />

      <select style={inputStyle}>
        <option>Tipo de cadastro</option>
        <option>Agricultor</option>
        <option>Cooperativa</option>
        <option>Empresa</option>
      </select>

      <input
        placeholder="Nome da propriedade"
        style={inputStyle}
      />

      <input
        placeholder="Município"
        style={inputStyle}
      />

      <input
        placeholder="Quantidade aproximada de lona"
        style={inputStyle}
      />

      <input
        placeholder="Cor da lona"
        style={inputStyle}
      />

      <select style={inputStyle}>
        <option>Estado da lona</option>
        <option>Boa</option>
        <option>Regular</option>
        <option>Precisa reparos</option>
      </select>

      <textarea
        placeholder="Observações"
        rows={5}
        style={inputStyle}
      />
      <div
  style={{
    border: "2px dashed #D1D5DB",
    borderRadius: 16,
    padding: "40px",
    textAlign: "center",
    background: "#F9FAFB",
  }}
>
  <div
    style={{
      fontSize: 42,
      marginBottom: 12,
    }}
  >
    📷
  </div>

  <h3
    style={{
      marginBottom: 10,
      color: "#052E16",
    }}
  >
    Upload da lona
  </h3>

  <p
    style={{
      color: "#6B7280",
      marginBottom: 20,
    }}
  >
    Adicione imagens da lona para análise visual.
  </p>

  <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (file) {
      setImagem(URL.createObjectURL(file));
    }
  }}
/>
{imagem && (
  <div style={{ marginTop: 25 }}>
    <p
      style={{
        color: "#166534",
        fontWeight: 600,
        marginBottom: 12,
      }}
    >
      Pré-visualização da imagem:
    </p>

    <img
      src={imagem}
      alt="Pré-visualização da lona"
      style={{
        width: "100%",
        maxHeight: 300,
        objectFit: "cover",
        borderRadius: 16,
        border: "1px solid #D1D5DB",
      }}
    />
  </div>
)}
</div>

<button
  type="button"
  onClick={() => {
    setCadastros([
      ...cadastros,
      `Cadastro recebido em ${new Date().toLocaleString("pt-BR")}`,
    ]);
  
    setEnviado(true);
  }}
  style={{
    ...btnPrimary,
    justifyContent: "center",
    padding: "18px",
    fontSize: 18,
  }}
>
  Enviar Cadastro
  {cadastros.length > 0 && (
  <div
    style={{
      marginTop: 30,
      background: "#F8FAF8",
      padding: 24,
      borderRadius: 16,
      border: "1px solid #E5E7EB",
    }}
  >
    <h3 style={{ marginBottom: 16 }}>
      Cadastros recebidos
    </h3>

    {cadastros.map((cadastro, index) => (
      <div
        key={index}
        style={{
          padding: 14,
          background: "#fff",
          borderRadius: 10,
          marginBottom: 10,
          border: "1px solid #E5E7EB",
        }}
      >
        {cadastro}
      </div>
    ))}
  </div>
)}
</button>
{
  enviado && (
    <div
      style={{
        background: "#DCFCE7",
        color: "#166534",
        padding: "18px",
        borderRadius: 14,
        textAlign: "center",
        fontWeight: 600,
      }}
    >
      Cadastro enviado com sucesso!
      {cadastros.length > 0 && (
  <div
    style={{
      marginTop: 30,
      background: "#F8FAF8",
      padding: 24,
      borderRadius: 16,
      border: "1px solid #E5E7EB",
    }}
  >
    <h3 style={{ marginBottom: 16 }}>
      Cadastros recebidos
    </h3>

    {cadastros.map((cadastro, index) => (
      <div
        key={index}
        style={{
          padding: 14,
          background: "#fff",
          borderRadius: 10,
          marginBottom: 10,
          border: "1px solid #E5E7EB",
        }}
      >
        {cadastro}
      </div>
    ))}
  </div>
)}
    </div>
  )
}

    </form>
  </div>
</section>
<footer
  style={{
    background: "#021910",
    color: "rgba(255,255,255,0.85)",
    padding: "64px 24px 32px",
  }}
>
  <div
    style={{
      ...container,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 40,
    }}
  >
    <div>
      <h3
        style={{
          color: "#fff",
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        AgroTrama Conecta
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.8,
        }}
      >
        Conectando o campo à sustentabilidade por meio do
        reaproveitamento de lonas de aviário.
      </p>
    </div>

    <div>
      <h4 style={{ color: "#fff", marginBottom: 16 }}>
        Projeto
      </h4>

      <p>Sobre</p>
      <p>Como funciona</p>
      <p>Impacto</p>
      <p>Cadastro</p>
    </div>

    <div>
      <h4 style={{ color: "#fff", marginBottom: 16 }}>
        Contato
      </h4>

      <p>contato@agrotrama.org</p>
      <p>+55 (44) 99843-3871</p>
      <p>Brasil</p>
    </div>
  </div>

  <div
    style={{
      ...container,
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontSize: 13,
      color: "rgba(255,255,255,0.5)",
    }}
  >
    <span>© 2026 AgroTrama Conecta. Todos os direitos reservados.</span>
    <span>Sustentabilidade · Reciclagem · Educação ambiental</span>
  </div>
</footer>
    </div>
  );
}

export default App;