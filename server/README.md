**API Planium**

Use `npm install` para instalar as dependências do sistema.
Use `npm run dev` para inicializar o servidor.

O servidor está rodando em ==> localhost:3333.

**Rotas GET:**

/planos

/precos

/beneficiarios

/propostas

**Rotas POST:**

/add_ben -- Recebe a seguinte estrutura.

{

"qtdBeneficiarios": 3,

"beneficiarios": [
{
"nome": "Teste",
"idade": "99"
}
],

"planRegistro": 3

}
