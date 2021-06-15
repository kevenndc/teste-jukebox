<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'sobrenome',
        'email',
        'telefone',
        'pessoa_juridica',
        'cpf',
        'cnpj'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    // adiciona o campo de nome completo aos JSON's
    protected $appends = ['nome_completo'];

    // Retorna o nome completo da pessoa
    public function getNomeCompletoAttribute()
    {
        return $this->nome . ' ' . $this->sobrenome;
    }
}
