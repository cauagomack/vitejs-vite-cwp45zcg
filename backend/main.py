from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

dados = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend AgroTrama funcionando"}

@app.post("/api/status")
async def salvar(item: dict):
    dados.append(item)
    return {
        "success": True,
        "dados_recebidos": item
    }

@app.get("/api/status")
def listar():
    return dados