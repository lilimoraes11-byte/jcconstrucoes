export const MENSAGEM_PADRAO = "Olá! Vi o site da J.C Construções e gostaria de um orçamento.";

export const contatos = [
  { nome: "José", telefone: "(11) 95693-0139", numero: "5511956930139" },
  { nome: "Cristiano", telefone: "(11) 94110-8914", numero: "5511941108914" },
] as const;

export function linkWhatsApp(numero: string, mensagem: string = MENSAGEM_PADRAO) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
