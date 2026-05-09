import { supabase } from "./supabase";
import { useState, useEffect, type CSSProperties } from "react";
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
  const [imagemAberta, setImagemAberta] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [cadastros, setCadastros] = useState<
  {
    id: number;
    nome: string;
    telefone: string;
    municipio: string;
    propriedade: string;
    quantidade: string;
    observacoes: string;
    imagem: string;
    data: string;
    status: string;
  }[]
>([]);(() => {
  const salvos = localStorage.getItem("cadastrosAgroTrama");

  return salvos ? JSON.parse(salvos) : [];
});
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
const [municipio, setMunicipio] = useState("");
  const [senhaAdmin, setSenhaAdmin] = useState("");
const [adminLogado, setAdminLogado] = useState(false);
const [filtroStatus, setFiltroStatus] = useState("Todos");
const [busca, setBusca] = useState("");
const [imagem, setImagem] = useState("");
const [propriedade, setPropriedade] = useState("");
const [quantidade, setQuantidade] = useState("");
const [observacoes, setObservacoes] = useState("");
useEffect(() => {
  carregarCadastros();
}, []);

async function carregarCadastros() {
  const { data, error } = await supabase
    .from("cadastros")
    .select("*")
    .order("created_at", { ascending: false })

  if (!error && data) {
    setCadastros(data);
  }
}
if (window.location.pathname === "/admin") {
  
  if (!adminLogado) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8FAF8",
          padding: 24,
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 40,
            borderRadius: 20,
            width: "100%",
            maxWidth: 420,
            border: "1px solid #E5E7EB",
          }}
        >
          <h1
            style={{
              marginBottom: 12,
              color: "#052E16",
            }}
          >
            Login Administrativo
          </h1>

          <p
            style={{
              color: "#6B7280",
              marginBottom: 24,
            }}
          >
            Área restrita da equipe AgroTrama.
          </p>

          <input
            type="password"
            placeholder="Senha"
            value={senhaAdmin}
            onChange={(e) => setSenhaAdmin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => {
              if (senhaAdmin === "123") {
                setAdminLogado(true);
              } else {
                alert("Senha incorreta");
              }
            }}
            style={{
              ...btnPrimary,
              width: "100%",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    );

          }
          return (
            <div
              style={{
                background: "#F8FAF8",
                minHeight: "100vh",
                padding: "40px 24px",
              }}
            >
              <div style={container}>
                <h1
                  style={{
                    fontSize: 42,
                    marginBottom: 10,
                  }}
                >
                  Painel Administrativo
                </h1>
          
                <p
                  style={{
                    color: "#6B7280",
                    marginBottom: 40,
                  }}
                >
                  Área interna da equipe AgroTrama.
                </p>
                <button
  onClick={() => {
    setAdminLogado(false);
    setSenhaAdmin("");
  }}
  style={{
    marginBottom: 30,
    background: "#DC2626",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
  }}
>
  Sair do painel
</button>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    marginBottom: 30,
  }}
>
  <div
    style={{
      background: "#052E16",
      color: "#fff",
      padding: 24,
      borderRadius: 18,
    }}
  >
    <h3
      style={{
        color: "#fff",
        fontSize: 36,
        marginBottom: 8,
      }}
    >
      {cadastros.length}
    </h3>

    <p>Total de cadastros recebidos</p>
    <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    marginBottom: 30,
  }}
>
  <div
    style={{
      background: "#FACC15",
      padding: 24,
      borderRadius: 18,
    }}
  >
    <h3 style={{ fontSize: 32 }}>
      {
        cadastros.filter(
          (c) => c.status === "Pendente"
        ).length
      }
    </h3>

    <p>🟡 Pendentes</p>
  </div>

  <div
    style={{
      background: "#22C55E",
      padding: 24,
      borderRadius: 18,
    }}
  >
    <h3 style={{ fontSize: 32 }}>
      {
        cadastros.filter(
          (c) => c.status === "Coletado"
        ).length
      }
    </h3>

    <p>🟢 Coletados</p>
  </div>

  <div
    style={{
      background: "#3B82F6",
      padding: 24,
      borderRadius: 18,
    }}
  >
    <h3 style={{ fontSize: 32 }}>
      {
        cadastros.filter(
          (c) => c.status === "Finalizado"
        ).length
      }
    </h3>

    <p>🔵 Finalizados</p>
  </div>
</div>
  </div>
  <div
  style={{
    marginBottom: 30,
  }}
>
  <select
    value={filtroStatus}
    onChange={(e) => setFiltroStatus(e.target.value)}
    style={{
      padding: "12px",
      borderRadius: 10,
      border: "1px solid #D1D5DB",
      minWidth: 220,
    }}
  >
    <option value="Todos">Todos</option>
    <option value="Pendente">Pendente</option>
    <option value="Coletado">Coletado</option>
    <option value="Finalizado">Finalizado</option>
  </select>
</div>
<input
  type="text"
  placeholder="Pesquisar por nome, telefone ou município"
  value={busca}
  onChange={(e) => setBusca(e.target.value)}
  style={{
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid #D1D5DB",
    width: "100%",
    maxWidth: 420,
    height: 48,
    background: "#fff",
  }}
/>
</div>
          
                <div
                  style={{
                    background: "#fff",
                    padding: 30,
                    borderRadius: 20,
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <h2 style={{ marginBottom: 20 }}>
                    Cadastros recebidos
                  </h2>
          
                  {cadastros.length === 0 && (
                    <p style={{ color: "#6B7280" }}>
                      Nenhum cadastro recebido ainda.
                    </p>
                  )}
          
          {cadastros
  .filter((cadastro) =>
  filtroStatus === "Todos"
    ? true
    : cadastro.status === filtroStatus
)
.filter((cadastro) =>
  `${cadastro.nome} ${cadastro.telefone} ${cadastro.municipio}`
    .toLowerCase()
    .includes(busca.toLowerCase())
)
  .map((cadastro, index) => (
                    <div
                      key={index}
                      style={{
                        padding: 18,
                        background: "#F8FAF8",
                        borderRadius: 14,
                        marginBottom: 14,
                        border: "1px solid #E5E7EB",
                      }}
                    >
                      <h3 style={{ marginBottom: 10 }}>
                        {cadastro.nome}
                      </h3>
                      {cadastro.imagem && (
  <img
  onClick={() => setImagemAberta(cadastro.imagem)}
    src={cadastro.imagem}
    alt="Lona"
    style={{
      width: "100%",
      maxHeight: 220,
      objectFit: "cover",
      borderRadius: 14,
      marginBottom: 14,
      marginTop: 10,
      cursor: "pointer",
    }}
  />
)}
                      <p>📞 {cadastro.telefone}</p>

<p>📍 {cadastro.municipio}</p>

<p>
  🚜 {cadastro.propriedade}
</p>

<p>
  📦 {cadastro.quantidade} lonas
</p>

<p
  style={{
    marginTop: 10,
    whiteSpace: "pre-wrap",
  }}
>
  📝 {cadastro.observacoes}
</p>
                      <button
  onClick={async () => {
    await supabase
      .from("cadastros")
      .delete()
      .eq("id", cadastro.id);

    carregarCadastros();
  }}
  style={{
    marginTop: 14,
    background: "#DC2626",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
  }}
>
  Remover cadastro
</button>
                    <div
  style={{
    background:
      cadastro.status === "Pendente"
        ? "#FACC15"
        : cadastro.status === "Coletado"
        ? "#22C55E"
        : "#3B82F6",
  
    color: "#fff",
  }}
>
</div>
<select
  value={cadastro.status}
  onChange={async (e) => {
    const novoStatus = e.target.value;
  
    await supabase
      .from("cadastros")
      .update({ status: novoStatus })
      .eq("id", cadastro.id);
  
    carregarCadastros();
  }}
  style={{
    marginTop: 12,
    padding: "10px",
    borderRadius: 10,
    border: "1px solid #D1D5DB",
    width: "100%",
  }}
>
  <option value="Pendente">Pendente</option>
  <option value="Coletado">Coletado</option>
  <option value="Finalizado">Finalizado</option>
</select>
          
                      <p
                        style={{
                          marginTop: 10,
                          fontSize: 13,
                          color: "#6B7280",
                        }}
                      >
                        {cadastro.data}
                      </p>
                    </div>
                  ))}
                  {imagemAberta && (
  <div
    onClick={() => setImagemAberta("")}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
      padding: 24,
    }}
  >
    <img
      src={imagemAberta}
      alt="Preview"
      style={{
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: 20,
      }}
    />
  </div>
)}
                </div>
              </div>
            </div>
          );}
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
    
  />
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

   

<input
  type="text"
  placeholder="Nome do responsável"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  style={inputStyle}
/>

<input
  type="text"
  placeholder="Telefone / WhatsApp"
  value={telefone}
  onChange={(e) => setTelefone(e.target.value)}
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
  type="text"
  placeholder="Município"
  value={municipio}
  onChange={(e) => setMunicipio(e.target.value)}
  style={inputStyle}
/>

  <input
  type="text"
  placeholder="Nome da propriedade"
  value={propriedade}
  onChange={(e) => setPropriedade(e.target.value)}
  style={inputStyle}
/>

<input
  type="number"
  placeholder="Quantidade de lonas"
  value={quantidade}
  onChange={(e) => setQuantidade(e.target.value)}
  style={inputStyle}
/>

<textarea
  placeholder="Observações"
  value={observacoes}
  onChange={(e) => setObservacoes(e.target.value)}
  style={{
    ...inputStyle,
    minHeight: 120,
    resize: "vertical",
  }}
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
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagem(reader.result as string);
      };
      
      reader.readAsDataURL(file);
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
  onClick={async () => {
    const novoCadastro = {
      nome,
      telefone,
      municipio,
      propriedade,
      quantidade,
      observacoes,
      imagem,
      data: new Date().toLocaleString("pt-BR"),
      status: "Pendente",
    };

    const novosCadastros = [...cadastros, novoCadastro];

    setCadastros(novosCadastros);
    const { error } = await supabase.from("cadastros").insert([
      {
        nome,
        telefone,
        municipio,
        imagem,
        status: "Pendente",
        data: new Date().toLocaleString("pt-BR"),
      },
    ]);
    
    if (error) {
      console.error("Erro Supabase:", error);
      alert("Erro ao salvar: " + error.message);
      return;
    }
    
    carregarCadastros();

    carregarCadastros();


    setNome("");
    setTelefone("");
    setMunicipio("");

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
    
  </div>
)}



   


    
  </div>
  )}
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