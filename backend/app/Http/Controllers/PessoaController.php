<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePessoaRequest;
use App\Models\Pessoa;
use Illuminate\Http\Response;

class PessoaController extends Controller
{
    /**
     * Retorna uma lista com as pessoas cadastradas.
     *
     * @return mixed
     */
    public function index()
    {
        return Pessoa::orderBy('created_at', 'desc')->get()->toJson();
    }

    /**
     * Encontra e retorna uma Pessoa.
     *
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        $pessoa = Pessoa::findOrFail($id);
        return $pessoa->toJson();
    }

    /**
     * Cria uma nova Pessoa e retorna seus dados.
     *
     * @param StorePessoaRequest $request
     * @return mixed
     */
    public function store(StorePessoaRequest $request)
    {
        $validated = $request->validated();
        $pessoa = Pessoa::create($validated);
        return $pessoa->toJson();
    }

    /**
     * Atualiza os dados de uma determinada Pessoa e retorna os dados atualizados.
     *
     * @param StorePessoaRequest $request
     * @param $id
     * @return mixed
     */
    public function update(StorePessoaRequest $request, $id)
    {
        $validated = $request->validated();
        $pessoa = Pessoa::findOrFail($id);
        $pessoa->update($validated);
        return $pessoa->toJson();
    }

    /**
     * Remove uma determinada Pessoa e retorna seu ID.
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $pessoa = Pessoa::findOrFail($id);
        $pessoa->delete();
        return response()->json(['id' => $id, Response::HTTP_OK]);
    }
}
