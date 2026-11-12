import { describe, expect, it } from "vitest";
import { contatos, linkWhatsApp } from "@/lib/contatos";

describe("contatos", () => {
  it("José usa o WhatsApp (11) 95693-0139", () => {
    const jose = contatos.find((c) => c.nome === "José");
    expect(jose?.telefone).toBe("(11) 95693-0139");
    expect(linkWhatsApp(jose!.numero)).toMatch(/^https:\/\/wa\.me\/5511956930139\?/);
  });

  it("Cristiano usa o WhatsApp (11) 94110-8914", () => {
    const cristiano = contatos.find((c) => c.nome === "Cristiano");
    expect(cristiano?.telefone).toBe("(11) 94110-8914");
    expect(linkWhatsApp(cristiano!.numero)).toMatch(/^https:\/\/wa\.me\/5511941108914\?/);
  });
});
