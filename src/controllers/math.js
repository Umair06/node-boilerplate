/** @format */

export async function add(req, res) {
  const sum = Number(req.query.a) + Number(req.query.c);
  res.send(sum.toString());
}

export async function subtract(req, res) {
  const difference = Number(req.query.a) - Number(req.query.b);
  res.send(difference.toString());
}
