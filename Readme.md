# Teste Jukebox


## Instruções

### Vue.js

A aplicação em Vue.js se encontra dentro da pasta ```frontend```.
Para rodá-la, basta clona este repositório e rodas o comando ```npm install ``` dentro da pasta ```frontend```.

#### Importante!
O frontend inicialmente está salvando os dados em um ```Àrray```, porém, eu fiz a integração com a API desenvolvida em Laravel. Por isso, é possível habilitar a integração trocando o valor da variável ```useAPI``` para ```true``` na linha ```27``` do arquivo ```/src/App.vue```.

```javascript
// MUDE PARA TRUE PARA USAR A INTEGRAÇÃO COM O LARAVEL
const useAPI = false;
```
### Laravel
O projeto Laravel se encontra na pasta ```backend``` deste repositório. para executá-lo, basta seguir os passos abaixo:

1. Rode o comando ```./vendor/bin/sail up``` para subir a aplicação em um container Docker. OBS. Caso não queira subir através de um container Docker, talvez seja necessário alterar os dados da conexão com o Banco de Dados no arquivo ```.env```;
2. Rode o comando ```php artisan migrate``` para criar a tabela ```pessoas```no banco de dados;
3. Por final, execute o comando ```php artisan serve``` para que a aplicação comece a escutar requisições.

