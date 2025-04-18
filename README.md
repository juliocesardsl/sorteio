Esse código foi feito em Python, mas tive que converter para JS por conta do repositório não aceitar códigos em Python.

Código em Python:

import random

qtd_jogos = int(input('Quantos jogos você quer sortear? '))
jogos = []

for i in range(qtd_jogos):
    nome_jogo = input('Qual o nome no jogo? ')
    jogos.append(nome_jogo)

sorteio = random.choice(jogos)

print('O jogo sorteado foi:', sorteio)



https://juliocesardsl.github.io/sorteio/
