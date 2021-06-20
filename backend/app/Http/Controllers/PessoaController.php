<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePessoaRequest;
use App\Models\Pessoa;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PessoaController extends Controller
{
    // retorna todas as pessoas cadastradas
    public function index()
    {
        return Pessoa::orderBy('created_at', 'desc')->get()->toJson();
    }

    // retorna uma pessoa específica
    public function show($id)
    {
        $pessoa = Pessoa::findOrFail($id);
        return Pessoa::orderBy('created_at', 'desc')->get()->toJson();
    }

    // salva uma nova pessoa e retorna todas as pessoas cadastradas
    public function store(StorePessoaRequest $request)
    {
        try {
            $validated = $request->validated();
        } catch (\Exception $e) {
            http_response_code(400);
            die($e->getMessage());
        }
        $pessoa = Pessoa::create($validated);
        return $pessoa->toJson();
    }

    // atualiza uma pessoa e retorna todas as pessoas cadastradas
    public function update(StorePessoaRequest $request, $id)
    {
        try {
            $validated = $request->validated();
        } catch (\Exception $e) {
            http_response_code(400);
            die($e->getMessage());
        }
        $pessoa = Pessoa::findOrFail($id);
        $pessoa->update($validated);
        return $pessoa->toJson();
    }

    // remove uma pessoa e retorna as pessoas cadastradas
    public function destroy($id)
    {
        $pessoa = Pessoa::findOrFail($id);
        $pessoa->delete();
        return response()->json(['id' => $id, Response::HTTP_OK]);
    }
}
