function status(request, response) {
  response.status(200).json({ chave: "São acima da méida" });
}

export default status;
