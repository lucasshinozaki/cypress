Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

---------------------------------------------------------------------------------------

Cenário: Falha na tentativa de cadastro

Passos:

O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatórios (nome, email, senha e confirmação de senha) em brancos.
O usuário clica no botão "Cadastrar".

Resultado esperado:

O sistema valida os campos obrigatórios em brancos.
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.
