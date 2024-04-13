export function format(value: number) {
  const BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return BRL.format(value);
}
