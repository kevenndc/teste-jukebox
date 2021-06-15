<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePessoaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nome' => 'required',
            'sobrenome' => 'required',
            'email' => 'required',
            'telefone' => 'required',
            'pessoa_juridica' => 'boolean',
            'cpf' => 'string|nullable',
            'cnpj' => 'string|nullable',
        ];
    }
}
