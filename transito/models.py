from django.db import models


class Idoso(models.Model):
    nome = models.CharField(max_length=255)
    data_nascimeto = models.DateField()
    telefone = models.CharField(max_length=14)
    cnh = models.CharField(max_length=20)
    val_cnh = models.DateField()
    email = models.EmailField()


class Endereco(models.Model):
    cep = models.PositiveIntegerField()
    rua = models.CharField(max_length=255)
    numero = models.PositiveBigIntegerField()
    Bairro = models.CharField(max_length=255)
    cidade = models.CharField(max_length=255)
    estado = models.CharField(max_length=255)


class Representante(models.Model):
    nome = models.CharField(max_length=255)
    email = models.EmailField()
    telefone = models.CharField(max_length=20)
    rg = models.CharField(max_length=20)
    rg_expedicao = models.DateField()
    uf = models.CharField(max_length=2)


class EnderecoRep(models.Model):
    cep = models.PositiveIntegerField()
    rua = models.CharField(max_length=255)
    numero = models.PositiveBigIntegerField()
    Bairro = models.CharField(max_length=255)
    cidade = models.CharField(max_length=255)
    estado = models.CharField(max_length=255)
